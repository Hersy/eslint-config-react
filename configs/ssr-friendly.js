import ssrFriendlyPlugin from 'eslint-plugin-ssr-friendly';

export default {
  name: 'ssrFriendlyConfig',
  plugins: { 'ssr-friendly': ssrFriendlyPlugin },
  rules: {
    'ssr-friendly/no-dom-globals-in-module-scope': 'error',
    'ssr-friendly/no-dom-globals-in-constructor': 'error',
    'ssr-friendly/no-dom-globals-in-react-cc-render': 'error',
    'ssr-friendly/no-dom-globals-in-react-fc': 'error',
  },
};
