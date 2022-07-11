/*
 * @Date: 2022-01-09 23:33:02
 * @LastEditors: Save
 * @LastEditTime: 2022-01-12 02:08:52
 * @FilePath: /src/page/settings/index.tsx
 * @Description: Settings Screen
 */
import React from 'react';
import { Button } from 'react-native';
import Box from "~/component/Box";
import Text from "~/component/Text";
import { Base } from "~/interface";
import { useAppDispatch } from '~/store';
import AuthSlice from '~/store/slice-modules/auth';

const SettingScreen: Base.Fc = props => {
  const dispatch = useAppDispatch()
  return (
    <Box
      flex={1}
    >
      <Text>Settings page</Text>
      <Button 
        title="Back Login"
        onPress={() => {
          dispatch( AuthSlice.actions.removeAuth())
        }}
      />
    </Box>
  )
}

export default SettingScreen
