/*
 * @Date: 2022-01-12 00:35:59
 * @LastEditors: Save
 * @LastEditTime: 2022-01-12 02:35:53
 * @FilePath: /src/interface/auth.d.ts
 * @Description: 
 */

declare namespace AUTH {

  type AuthType = "Main" | "Login" | "Test"

  interface tokenReqData {
    client_secret: string
    client_id: string
    grant_type: string
  }

  interface tokenSliceRes {
    access_token: string
    application_name: string
    client_id: string
    expires_in: number
    guest_office_id: string
    scope: string
    state: string
    token_type: string
    type: string
    username: string
  }

  interface initialStateType {
    tokenType: AuthType
    tokenBody: AUTH.tokenSliceRes | {}
  }
  
}
