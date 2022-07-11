/*
 * @Date: 2022-01-12 14:22:28
 * @LastEditors: Save
 * @LastEditTime: 2022-01-12 16:16:18
 * @FilePath: /src/store/slice-modules/customer.ts
 * @Description: customer
 */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CUSTOMER.initialStateType = {
  detailsBody: {},
  scanFlag: false
}

const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    setScan: (state, action: PayloadAction<boolean>) => {
      state.scanFlag = action.payload
    }
  }
})

export default customerSlice;
