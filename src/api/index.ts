import axios, {Axios} from 'axios';
import {stringify} from 'qs';
import type {
  AxiosRequestConfig,
  Method,
  AxiosResponse,
  AxiosError,
} from 'axios';
import {authCache} from '~/utils/authCache';

class GlobalAxios extends Axios {
  protected RequestConfig: AxiosRequestConfig;
  protected alertMsg: string;
  protected toastFlag: boolean;
  protected networkFlag: boolean = true;
  protected errorFlag: boolean = true;

  constructor(obj: AxiosRequestConfig, alertMsg?: string, toastFlag?: boolean) {
    super(obj);
    this.RequestConfig = this.config(obj);
    this.alertMsg = alertMsg || '';
    this.toastFlag = toastFlag || true;
  }

  protected config(obj: AxiosRequestConfig) {
    const headers = obj.headers || {};
    const data: AxiosRequestConfig = {
      headers: {
        Accept: 'application/json',
        ...headers,
      },
      baseURL: '',
      timeout: 8000,
      paramsSerializer: params => {
        return stringify(params);
      },
      ...obj,
    };
    return data;
  }

  protected axiosError(error: AxiosError): API.RequestAPI {
    // const errObj: API.RequestAPI = {
    //   success: false,
    //   error,
    // };
    // return errObj;
    throw new Error(error.message);
  }

  protected async http<P, R>(
    config: AxiosRequestConfig,
  ): Promise<API.RequestAPI<P>> {
    const res: AxiosResponse<API.RequestAPI<P, AxiosError>, R> = await axios(
      config,
    );
    if (res.data.success) {
      return {success: true, payload: res.data.payload};
    } else {
      return this.axiosError(res.data.error);
    }
  }

  async fetch<P = any, R = any>(
    method?: Method,
    data?: R,
  ): Promise<API.RequestAPI<P>>;
  async fetch<P, R>(
    method: Method = 'GET',
    data?: R,
  ): Promise<API.RequestAPI<P>> {
    return this.mergeConfig<P, R>(method, data);
  }

  protected async mergeConfig<P, R>(
    method: Method,
    data?: R,
  ): Promise<API.RequestAPI<P>> {
    const config = GlobalAxios.HeaderConfig({
      ...this.RequestConfig,
      method,
      ...(() => {
        if (method.toLocaleLowerCase() === 'get') {
          return {params: data};
        }
        return {data};
      })(),
    });
    return await this.http<P, R>(config);
  }

  // 添加新的 header
  static HeaderConfig(res: AxiosRequestConfig) {
    const getAuth = authCache.getAuth();
    if (getAuth) {
      res.headers = {
        ...res.headers,
        Authorization: `Bearer ${getAuth.access_token}`,
      };
    }
    return res;
  }
}

axios.interceptors.response.use(
  async config => {
    try {
      if (config.status === 200) {
        config.data = {
          payload: config.data,
          success: true,
        };
      }
    } catch (error) {
      console.log(error);
    } finally {
      return config;
    }
  },
  error => {
    return {data: {success: false, error}};
  },
);

export {GlobalAxios};
