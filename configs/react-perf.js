import reactPerfPlugin from 'eslint-plugin-react-perf';

export default {
  name: 'reactPerfConfig',
  plugins: { 'react-perf': reactPerfPlugin },
  rules: {
    'react-perf/jsx-no-new-object-as-prop': 'error',
    'react-perf/jsx-no-new-array-as-prop': 'error',
    'react-perf/jsx-no-new-function-as-prop': 'error',
    'react-perf/jsx-no-jsx-as-prop': 'error',
  },
};
