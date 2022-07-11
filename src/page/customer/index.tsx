/*
 * @Date: 2022-01-09 23:27:05
 * @LastEditors: Save
 * @LastEditTime: 2022-01-12 16:20:29
 * @FilePath: /src/page/customer/index.tsx
 * @Description: customer screen
 */
import React, { useEffect } from 'react';
import { Button } from 'react-native';
import Box from "~/component/Box";
import { Base } from "~/interface";
import { useAppDispatch, useAppSelector } from '~/store';
import customerSlice from '~/store/slice-modules/customer';
import { CustomerDetails } from './component/details';

const CustomerScreen: Base.Fc = props => {
  const dispatch = useAppDispatch()
  const { scanFlag } = useAppSelector("customer")

  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        !scanFlag ?
        <Button 
          title="Sacn"
          onPress={() => {
            dispatch(customerSlice.actions.setScan(true))
            props.navigation.navigate("ScanScreen")
          }}
        /> : null
      )
    })
  }, [scanFlag, props.navigation, dispatch])

  if (scanFlag) {
    return (
      <Box
        flex={1}
        bg={"grayLayout"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        paddingBottom={"m"}
      >
        {/* TODO: npm install @uxui/stratos-react-native-button */}
        <Button 
          title="Sacn"
          onPress={() => {
            props.navigation.navigate("ScanScreen")
          }}
        />
      </Box>
    )
  }

  return <CustomerDetails />
}

export default CustomerScreen
