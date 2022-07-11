/*
 * @Date: 2022-01-07 21:14:46
 * @LastEditors: Save
 * @LastEditTime: 2022-01-07 21:58:16
 * @FilePath: /.eslintrc.js
 * @Description: 导出 Eslint
 */
module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-trailing-spaces': 'off',
    'prettier/prettier': 'off',
    'eslint-disable-next-line': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react-native/no-inline-styles': 'off',
    'no-undef': 'off',
    'no-dupe-class-members': 'off',
    'no-new': 'off',
    'comma-dangle': 'off',
    quotes: 'off',
    semi: 'off',
  },
};
