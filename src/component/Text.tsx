/*
 * @Date: 2022-01-09 18:53:21
 * @LastEditors: Save
 * @LastEditTime: 2022-01-10 00:31:23
 * @FilePath: /src/component/Text.tsx
 * @Description: Text
 */
import React from 'react'
import { Theme } from '~/theme'
import createText from '~/utils/createText'

const Text = createText<Theme>()

export type TextProps = React.ComponentProps<typeof Text>
export default Text
