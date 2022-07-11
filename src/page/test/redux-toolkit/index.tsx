/*
 * @Date: 2022-01-07 09:36:05
 * @LastEditors: Save
 * @LastEditTime: 2022-01-12 03:06:15
 * @FilePath: /src/page/test/redux-toolkit/index.tsx
 * @Description: redux toolkit
 */
import React from 'react'
import { Button, Text, View } from "react-native"
import { useAppSelector } from '~/store'


export default () => {
  const { tokenType } = useAppSelector("auth")
  return (
    <View
      style={{flex: 1}}
    >
      <Button 
        title="Redux-Toolkit Get Fetch"
        onPress={() => {
          
        }}
      />
      <Text>Data: {tokenType}</Text>
    </View>
  )
}
