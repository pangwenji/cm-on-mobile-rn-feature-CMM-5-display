/*
 * @Date: 2022-01-06 16:50:51
 * @LastEditors: Save
 * @LastEditTime: 2022-01-09 18:40:37
 * @FilePath: /src/route/modules/test.tsx
 * @Description: testScreen 入口
 */
import React, { memo } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BarCodeTest from '~/page/test/bar-code'
import TestScreen from '~/page/test'
import reduxToolkit from '~/page/test/redux-toolkit'

const TestStack = createNativeStackNavigator()
const TestStackScreen = () => {
  return (
    <TestStack.Navigator>
      <TestStack.Screen name="TestScreen" component={TestScreen} />
      <TestStack.Screen name="BarCodeScanner" component={BarCodeTest} />
      <TestStack.Screen name="ReduxToolkitTest" component={reduxToolkit} />
    </TestStack.Navigator>
  )
}

export default memo(TestStackScreen)
