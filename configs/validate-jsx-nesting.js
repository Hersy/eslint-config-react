import validateJsxNestingPlugin from 'eslint-plugin-validate-jsx-nesting';

export default {
  name: 'validateJsxNestingConfig',
  plugins: { 'validate-jsx-nesting': validateJsxNestingPlugin },
  rules: {
    'validate-jsx-nesting/no-invalid-jsx-nesting': 'error',
  },
};
