import preferFunctionComponentPlugin from 'eslint-plugin-react-prefer-function-component/config';

export default {
  name: 'reactPreferFunctionComponentConfig',
  plugins: { 'react-prefer-function-component': preferFunctionComponentPlugin },
  rules: {
    'react-prefer-function-component/react-prefer-function-component': 'error',
  },
};
