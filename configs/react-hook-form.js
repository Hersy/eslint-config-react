import reactHookFormPlugin from 'eslint-plugin-react-hook-form';

export default {
  name: 'reactHookFormConfig',
  plugins: { 'react-hook-form': reactHookFormPlugin },
  rules: {
    'react-hook-form/destructuring-formstate': 'error',
    'react-hook-form/no-access-control': 'error',
    'react-hook-form/no-nested-object-setvalue': 'error',
  },
};
