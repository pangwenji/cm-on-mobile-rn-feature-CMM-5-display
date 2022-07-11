/*
 * @Date: 2022-01-12 14:04:20
 * @LastEditors: Save
 * @LastEditTime: 2022-01-12 18:34:37
 * @FilePath: /src/page/customer/component/details.tsx
 * @Description: Customer Details
 */

import React, { Fragment } from "react"
import { Button, View } from "react-native"
import Box from "~/component/Box"
import { Cell, TapCell } from "~/component/TapCell"
import Text from "~/component/Text"
import { authCache } from "~/utils/authCache"

export const CustomerDetails = () => {
  return (
    <Box
      flex={1}
      flexDirection={"row"}
    >
      <Box
        flex={2}
        padding={"m"}
        bg={"grayLayout"}
      >
        <Text variant={"h5"} style={{color: "gray"}}>Customer</Text>
        <Button 
          title="Fetch Auth"
          onPress={() => {
            const auth = authCache.getAuth()
            console.log(`Fetch Auth`, { auth })
          }}
        />
      </Box>
      <Box
        flex={4}
        margin={"m"}
        bg={"white"}
        padding={"s"}
        paddingTop={"none"}
        borderRadius={"m"}
      >
        <TapCell 
          title="Contact details" 
          subNode={(
            <Fragment>
              <Box flexDirection={"row"} alignItems={"center"}>
                <View style={{width: 13, height: 13, backgroundColor: "#4C4C4C", marginRight: 5}} />
                <Text>+852 12345678</Text>
              </Box>
              <Box flexDirection={"row"} alignItems={"center"} marginTop={"xs"}>
                <View style={{width: 13, height: 13, backgroundColor: "#4C4C4C", marginRight: 5}} />
                <Text>johnjr@gmail.com</Text>
              </Box>
            </Fragment>
          )}
        />
        <TapCell title="Acceptance" subTitle="Not Accepted" />
        <TapCell title="Boarding Pass" subTitle="Not Printed" />
        <TapCell title="Services" subTitle="MPUG" />
        <TapCell title="Payment" subTitle="--" />
        <TapCell title="Baggage" subTitle="--" />
        <TapCell 
          title="Acceptance" 
          subTitle="Not Accepted"
          rightIcon={(
            <View style={{width: 12, height: 12, backgroundColor: "#4C4C4C", marginRight: 5}} />
          )}
        />
        <TapCell title="Regulatory" subTitle="Passport details missing" />
        <TapCell 
          title="Services" 
          subNode={(
            <Box flexDirection={"row"} alignItems={"center"}>
              <Box
                height={35}
                width={35}
                borderRadius={"ms"}
                justifyContent={"center"}
                alignItems={"center"}
                style={{backgroundColor: "#1B3668"}}
                marginRight={"s"}
              >
                <Text variant={"h6"}>21A</Text>
              </Box>
              <Text>Business</Text>
              <View style={{width: 15, height: 15, backgroundColor: "#4C4C4C", marginRight: 5, marginLeft: 5}} />
              <View style={{width: 15, height: 15, backgroundColor: "#4C4C4C", marginRight: 5}} />
            </Box>
          )}
        />
        <Cell title="Tickets" subTitle="CX-ECONFLEX " />
        <TapCell title="FQTV" subTitle="CX123456789" />
        <TapCell 
          linkFlag={false} 
          title="Comments" 
          rightIcon={(
            <View style={{width: 12, height: 12, backgroundColor: "#4C4C4C", marginRight: 5}} />
          )}
          subNode={(
            <Box
              paddingRight={"lm"}
              justifyContent={"center"}
            >
              <Text variant={"h5"} style={{color: "#2D2D2D"}}>
                Anniversary Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ...
              </Text>
            </Box>
          )}
        />
      </Box>
    </Box>
  )
}
