import compatPlugin from 'eslint-plugin-compat';

export default {
  name: 'compatConfig',
  plugins: { compat: compatPlugin },
  settings: {
    lintAllEsApis: true,
    polyfills: [
      'Promise',
      'WebAssembly.compile',
      'fetch',
      'Array.prototype.push',
    ],
  },
  rules: {
    'compat/compat': 'error',
  },
};
