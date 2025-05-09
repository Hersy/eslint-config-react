import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default {
  name: 'reactHooksConfig',
  plugins: { 'react-hooks': reactHooksPlugin },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
