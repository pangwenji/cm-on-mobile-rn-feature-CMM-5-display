/*
 * @Date: 2022-01-05 16:27:41
 * @LastEditors: Save
 * @LastEditTime: 2022-01-10 00:17:50
 * @FilePath: /src/page/home/index.tsx
 * @Description: 
 */
import React, { memo } from 'react'
import { useAppDispatch } from '../../store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomerScreen from '../customer';
import FlightScreen from '../flight';
import SettingScreen from '../settings';


const Tab = createBottomTabNavigator()
const HomeScreen: React.FC = props => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Customer" 
        component={CustomerScreen}
        options={{
          // headerTitle: "", // TODO pending: hide and show ?
          headerShadowVisible: true
        }}
      />
      <Tab.Screen name="Flight" component={FlightScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  )
};
export default memo(HomeScreen);
