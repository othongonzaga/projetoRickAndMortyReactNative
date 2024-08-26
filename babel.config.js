module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.js',
            '.ios.tsx',
            '.android.js',
            '.android.tsx',
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.json',
            '.native.ts',
            '.native.tsx',
          ],
          alias: {
            '@components': './src/components',
            '@assets': './src/assets',
            '@screens': './src/Screens',
            '@types': './src/types',
          },
        },
      ],
    ],
  };
};
