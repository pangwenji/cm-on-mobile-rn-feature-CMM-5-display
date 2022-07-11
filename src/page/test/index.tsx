/*
 * @Date: 2022-01-06 11:18:16
 * @LastEditors: Save
 * @LastEditTime: 2022-01-12 02:32:12
 * @FilePath: /src/page/test/index.tsx
 * @Description: test screen entrance
 */
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { useAppDispatch } from '~/store';

const TestScreen: React.FC = props => {
  const navigation = useNavigation<NavigationProp<any>>()
  const dispatch = useAppDispatch()
  return (
    <View
      style={{flex: 1}}
    >
      <Text>Test Screen</Text>
      <Button 
        title="Bar Code Screen"
        onPress={() => {
          navigation.navigate("BarCodeScanner")
        }}
      />
      <Button 
        title={"Redux Toolkit"}
        onPress={() => {
          navigation.navigate("ReduxToolkitTest")
        }}
      />
    </View>
  )
};

export default TestScreen;
