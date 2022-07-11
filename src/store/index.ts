/*
 * @Date: 2022-01-05 13:16:07
 * @LastEditors: Save
 * @LastEditTime: 2022-01-12 15:06:00
 * @FilePath: /src/store/index.ts
 * @Description: 
 */
import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { useDispatch, useSelector, useStore } from 'react-redux';
import rootReducer, { RootState } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});


export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export type AppStore = typeof store
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppStore = () => useStore<AppStore>();
export const useAppSelector = <T extends keyof RootState>(name: T) => useSelector((state: RootState) => state[name])

export default store;
