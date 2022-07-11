/*
 * @Date: 2022-01-09 19:57:24
 * @LastEditors: Save
 * @LastEditTime: 2022-01-09 20:08:26
 * @FilePath: /src/interface/index.d.ts
 * @Description: 
 */

import React, { FC, ReactNode } from 'react';
import { ParamListBase, RouteProp, NavigationProp, StackActionType, NavigationState } from "@react-navigation/native";
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'

export interface StackActions {
  replace(name: string, params?: object | undefined): StackActionType;
  push(name: string, params?: object | undefined): StackActionType;
  pop(count?: number): StackActionType;
  popToTop(): StackActionType;
}


declare namespace Base {
  interface pageName {
    [pageName: string]: any
  }

  interface route<U> extends RouteProp<ParamListBase, string> {
    params: Readonly<U>
  }

  interface NavigationIProp extends NavigationProp<ParamListBase, string, NavigationState, NativeStackNavigationOptions>, StackActions {}

  interface IProps<U = {}> extends pageName {
    route: route<U>,
    navigation: NavigationIProp,
    children?: ReactNode
  }

  type Fc<T = {}, U = IProps<T>> = FC<U>

  interface RouterItem extends pageName {
    name: string,
    component: React.ComponentType<any>,
    options?: NativeStackNavigationOptions | ((props: {
      route: RouteProp<ParamListBase, string>
      navigation: NavigationIProp
  }) => NativeStackNavigationOptions)
    initialParams?: any
  }
}

export type RouterStackScreenArray = Array<Base.RouterItem>