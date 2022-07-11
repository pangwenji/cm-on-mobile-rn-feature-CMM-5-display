/*
 * @Date: 2022-01-11 17:22:47
 * @LastEditors: Save
 * @LastEditTime: 2022-01-12 03:22:14
 * @FilePath: /src/store/slice-modules/auth.ts
 * @Description: 
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postAuth } from "~/api/modules/auth";
import { authCache } from "~/utils/authCache";
import { AuthType } from '~/assets/utils/type';
import asyncThunkName from "~/assets/utils/asyncThunkName";

export const FETCH_TOKEN = createAsyncThunk<any, AUTH.tokenReqData>(
  asyncThunkName.FETCH_TOKEN,
  async (data) => postAuth(data)
)

const initialState: AUTH.initialStateType = {
  tokenType: AuthType.Login,
  tokenBody: {}
}

function setInitState(tokenType: AUTH.AuthType, tokenBody: AUTH.tokenSliceRes | {}) {
  if (tokenType === AuthType.Main) {
    return { 
      tokenType: AuthType.Main,
      tokenBody
    }
  }
  return {
    tokenType: AuthType.Login,
    tokenBody
  }
}

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeAuth: () => {
      authCache.removeAuth()
      return setInitState(AuthType.Login, {})
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(FETCH_TOKEN.pending, () => {})
      .addCase(FETCH_TOKEN.fulfilled, (state, action) => {
        authCache.setAuth(action.payload)
        return setInitState(AuthType.Main, action.payload)
      })
      .addCase(FETCH_TOKEN.rejected, () => {
        authCache.removeAuth()
        return setInitState(AuthType.Login, {})
      })
  }
})

export default AuthSlice
