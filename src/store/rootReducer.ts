/*
 * @Date: 2022-01-05 13:20:46
 * @LastEditors: Save
 * @LastEditTime: 2022-01-12 14:29:24
 * @FilePath: /src/store/rootReducer.ts
 * @Description: 
 */
import { combineReducers } from '@reduxjs/toolkit';

// slice modules
import authSlice from './slice-modules/auth'
import customerSlice from './slice-modules/customer';


const rootReducer = combineReducers({
  auth: authSlice.reducer,
  customer: customerSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
