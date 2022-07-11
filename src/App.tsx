/*
 * @Date: 2022-01-04 17:59:56
 * @LastEditors: Save
 * @LastEditTime: 2022-01-10 00:35:46
 * @FilePath: /src/App.tsx
 * @Description: 
 */
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from '@shopify/restyle'
import NavigationRoot from './route';
import { theme } from '~/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NavigationRoot />
      </Provider>
    </ThemeProvider>
  );
}
