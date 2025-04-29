import storybookPlugin from 'eslint-plugin-storybook';

export default {
  name: 'storybookConfig',
  files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)', '**/*.story.@(ts|tsx|js|jsx|mjs|cjs)'],
  plugins: { storybook: storybookPlugin.configs['flat/recommended'] },
  rules: {
    'storybook/await-interactions': 'error',
    'storybook/context-in-play-function': 'error',
    'storybook/csf-component': 'warn',
    'storybook/default-exports': 'error',
    'storybook/hierarchy-separator': 'error',
    'storybook/meta-inline-properties': 'warn',
    'storybook/meta-satisfies-type': 'warn',
    'storybook/no-redundant-story-name': 'error',
    'storybook/no-stories-of': 'warn',
    'storybook/no-title-property-in-meta': 'warn',
    'storybook/no-uninstalled-addons': 'error',
    'storybook/prefer-pascal-case': 'error',
    'storybook/story-exports': 'error',
    'storybook/use-storybook-expect': 'error',
    'storybook/use-storybook-testing-library': 'error',
  },
};
