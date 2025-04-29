import babelParser from '@babel/eslint-parser';
import babelPlugin from '@babel/eslint-plugin';

export default {
  name: 'babelConfig',
  plugins: { '@babel': babelPlugin },
  languageOptions: {
    parser: babelParser,
    parserOptions: {
      requireConfigFile: false,
      babelOptions: {
        babelrc: false,
        configFile: false,
        presets: ['@hersy/babel-preset'],
      },
    },
  },
  rules: {
    '@babel/new-cap': 'error',
    '@babel/no-invalid-this': 'error',
    '@babel/no-undef': 'error',
    '@babel/no-unused-expressions': 'error',
  },
};
