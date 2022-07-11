/*
 * @Date: 2022-01-12 14:16:42
 * @LastEditors: Save
 * @LastEditTime: 2022-01-12 15:17:28
 * @FilePath: /src/page/scan/index.tsx
 * @Description: scan
 */
import React from 'react'
import { Button } from "react-native"
import Box from "~/component/Box"
import { Base } from '~/interface'
import { useAppDispatch } from '~/store'
import customerSlice from '~/store/slice-modules/customer'

const ScanScreen: Base.Fc = props => {
  const dispatch = useAppDispatch()
  return (
    <Box>
      <Button 
        title="扫码成功"
        onPress={() => {
          dispatch(customerSlice.actions.setScan(false))
          props.navigation.goBack()
        }}
      />
    </Box>
  )
}

export default ScanScreen
