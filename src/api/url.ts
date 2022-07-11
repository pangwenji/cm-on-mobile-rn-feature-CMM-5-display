/*
 * @Date: 2022-01-11 16:48:35
 * @LastEditors: Save
 * @LastEditTime: 2022-01-11 18:46:45
 * @FilePath: /src/api/url.ts
 * @Description: URL
 */
const URL = "https://test.airlines.api.amadeus.com/"
const V1_URL = `${URL}v1`
export const LoginApiUrl = {
  token: `${V1_URL}/security/oauth2/token`
}
