import nodeConfig, { test as testNodeConfig } from '@hersy/eslint-config-node';
import globals from 'globals';

import {
  babelConfig,
  compatConfig,
  jsxAllyConfig,
  reactHookFormConfig,
  reactHooksConfig,
  reactPerfConfig,
  reactPreferFunctionComponentConfig,
  reactUsememoConfig,
  reactConfig,
  ssrFriendlyConfig,
  storybookConfig,
  styledComponentsAllyPlugin,
  validateJsxNestingConfig,
} from './configs/index.js';

const reactFiles = ['**/*.{jsx,tsx}'];

const reactLanguageOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  globals: {
    ...globals.browser,
    ...globals.node,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};

const applyReactLanguageOptions = config => ({
  files: reactFiles,
  ...config,
  languageOptions: {
    ...reactLanguageOptions,
    ...config.languageOptions,
  },
});

const buildConfig = (test = false) => [
  { ignores: test ? [] : ['build/**/*', 'node_modules/**/*', 'test/**/*'] },
  ...test ? testNodeConfig : nodeConfig,
  applyReactLanguageOptions(reactConfig),
  applyReactLanguageOptions(reactHooksConfig),
  applyReactLanguageOptions(reactUsememoConfig),
  applyReactLanguageOptions(reactHookFormConfig),
  ...test
    ? []
    : [
      applyReactLanguageOptions(babelConfig),
      applyReactLanguageOptions(compatConfig),
      applyReactLanguageOptions(reactPerfConfig),
      applyReactLanguageOptions(ssrFriendlyConfig),
    ],
  applyReactLanguageOptions(jsxAllyConfig),
  applyReactLanguageOptions(reactPreferFunctionComponentConfig),
  applyReactLanguageOptions(styledComponentsAllyPlugin),
  applyReactLanguageOptions(validateJsxNestingConfig),
  storybookConfig,
];

const test = buildConfig(true);

export { test };

export default buildConfig();
