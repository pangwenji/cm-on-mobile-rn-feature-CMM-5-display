/*
 * @Date: 2022-01-12 01:45:13
 * @LastEditors: Save
 * @LastEditTime: 2022-01-12 01:46:50
 * @FilePath: /src/api/modules/auth.ts
 * @Description: auth fetch
 */
import { stringify } from "qs"
import { GlobalAxios } from ".."
import { LoginApiUrl } from "../url"

export async function postAuth(data: AUTH.tokenReqData) {
  const req = await new GlobalAxios({
    url: LoginApiUrl.token,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  }, "token").fetch<AUTH.tokenSliceRes>("POST", stringify(data))
  if (req.success) {
    return req.payload
  }
}
