module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        "babel-plugin-root-import",
        {
          root: __dirname,
          paths: [
            {
              rootPathPrefix: '~/',
              rootPathSuffix: 'src'
            }
          ]
        }
      ]
    ]
  }
};
