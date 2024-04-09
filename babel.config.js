module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.json', '.ts', '.tsx'],
        alias: {
          '@': './src',
        },
      },
    ],
    'nativewind/babel',
  ],
};
