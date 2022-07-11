/*
 * @Date: 2022-01-12 16:24:36
 * @LastEditors: Save
 * @LastEditTime: 2022-01-13 11:29:27
 * @FilePath: /src/component/TapCell.tsx
 * @Description: Tap Cell
 */
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Box from './Box'
import Text from './Text'
const minHeight = 26
interface CellContextIProps {
  title: string
  linkFlag?: boolean
}
const CellContext: React.FC<CellContextIProps> = props => {
  const { linkFlag = true, title, children } = props
  return (
    <Box
      flexDirection={"row"}
      minHeight={minHeight}
      paddingTop={"ms"}
      paddingBottom={"ms"}
      position={"relative"}
    >
      <Box 
        flex={3}
        height={minHeight}
        justifyContent={"center"}
      >
        <Text variant={"h5"} color={"grayPrimary"}>{title}</Text>
      </Box>
      {children}
      {linkFlag && <View style = {styles.link} />}
    </Box>
  )
}
interface CellIProps extends CellContextIProps {
  subTitle?: string
  subNode?: React.ReactChild
}
const Cell: React.FC<CellIProps> = props => {
  return (
    <CellContext {...props}>
      <Box
        flex={5}
        justifyContent={"center"}
        paddingRight={"ms"}
      >
        {props.subNode ? props.subNode : (
          <Text variant={"h5"} style={styles.sub_text}>{props.subTitle}</Text>
        )}
      </Box>
      {props.children}
    </CellContext>
  )
}
interface TapCellIProps extends CellIProps {
  rightIcon?: React.ReactChild
}
const TapCell: React.FC<TapCellIProps> = props => {

  return (
    <TouchableOpacity
      style={styles.tap_cell_box}
    >
      <Cell {...props}>
      <Box
        flexDirection={"row"}
        alignItems={"center"}
        height={minHeight}
        style={styles.right_icon_box}
      >
        {props.rightIcon}
        <View style = {styles.right_icon} />
      </Box>
      </Cell>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  link: {
    position: "absolute", 
    bottom: 0, 
    height: 1, 
    width: "100%", 
    backgroundColor: "#E6E7E8"
  },
  right_icon_box: {
    position: "absolute",
    right: 0,
    top: minHeight / 2
  },
  right_icon: {
    width: 12,
    height: 12,
    backgroundColor: "red"
  },
  tap_cell_box: {
    position: "relative"
  },
  sub_text: {
    color: "#2D2D2D"
  }
})


export {
  CellContext,
  Cell,
  TapCell
}
