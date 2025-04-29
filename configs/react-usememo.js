import reactUseMemoPlugin from '@arthurgeron/eslint-plugin-react-usememo';

export default {
  name: 'reactUseMemoConfig',
  plugins: { '@arthurgeron/react-usememo': reactUseMemoPlugin.flatConfig },
  rules: {
    '@arthurgeron/react-usememo/require-usememo': 'error',
    '@arthurgeron/react-usememo/require-memo': 'error',
    '@arthurgeron/react-usememo/require-usememo-children': 'error',
  },
};
