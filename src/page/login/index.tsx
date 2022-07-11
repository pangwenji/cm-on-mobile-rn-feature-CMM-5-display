/*
 * @Date: 2022-01-05 13:49:21
 * @LastEditors: Save
 * @LastEditTime: 2022-01-12 02:36:01
 * @FilePath: /src/page/login/index.tsx
 * @Description: Login Screen
 */
import React from 'react'
import LoginPage from '@uxui/stratos-react-native-login-page';
import { Base } from '~/interface';
import { useAppDispatch } from '~/store';
import { FETCH_TOKEN } from '~/store/slice-modules/auth';

const LoginScreen: Base.Fc = props => {

  const dispatch = useAppDispatch()

  return (
    <LoginPage 
      welcomeMessage="Login to"
      appName="CM Mobile(TBC)"
      onLoginButtonPress={() => {
        const data: AUTH.tokenReqData = {
          client_secret: "EuJJPpk0ITxFjaZ2",
          client_id: "C2wGyQfm0Xte8N2NPBYM6AThEtRVa4ss",
          grant_type: "client_credentials"
        }
        dispatch(FETCH_TOKEN(data)).unwrap()
      }}
    />
  )
};

export default LoginScreen;
