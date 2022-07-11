/*
 * @Date: 2022-01-05 13:57:39
 * @LastEditors: Save
 * @LastEditTime: 2022-01-12 14:18:32
 * @FilePath: /src/route/index.tsx
 * @Description: 
 */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthType } from '~/assets/utils/type';
import { useAppSelector } from '~/store';

// AuthStack screen
import LoginScreen from '~/page/login';

// MainStack screen
import HomeScreen from '~/page/home';
import TestStackScreen from './modules/test';
import ScanScreen from '~/page/scan';




const AuthStack = createNativeStackNavigator()
const MainStack = createNativeStackNavigator()

const NavigationRoot = () => {

  const { tokenType } = useAppSelector("auth")

  return (
    <NavigationContainer>
      {
        tokenType === AuthType.Login && 
        <AuthStack.Navigator>
          <AuthStack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen}/>
        </AuthStack.Navigator>
      }
      {
        tokenType === AuthType.Main && 
        <MainStack.Navigator>
          <MainStack.Screen 
            name="MainScreen" 
            component={HomeScreen}
            options={{
              headerShown: false
            }}
          />
          <MainStack.Screen 
            name="ScanScreen"
            component={ScanScreen}
          />
        </MainStack.Navigator>
      }
      {
        tokenType === AuthType.Test &&
        <TestStackScreen />
      }
    </NavigationContainer>
  )
}

export default NavigationRoot
