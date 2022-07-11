/*
 * @Date: 2022-01-12 01:16:10
 * @LastEditors: Save
 * @LastEditTime: 2022-01-12 01:35:18
 * @FilePath: /src/utils/auth.ts
 * @Description: auth cache
 */

export class authCache {
  static init: Partial<AUTH.tokenSliceRes> | null
  static setAuth(data: AUTH.tokenSliceRes) {
    this.init = data
  }
  static getAuth() {
    return this.init
  }
  static removeAuth() {
    this.init = null
  }
  static updateAuth(data: AUTH.tokenSliceRes) {
    this.init = Object.assign(this.init, data)
  }
}
