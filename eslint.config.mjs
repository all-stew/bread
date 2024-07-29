import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

const projectConfig = [
  // global rules
  {
    rules: {
      // fix *.d.ts
      // https://stackoverflow.com/questions/55807329/why-eslint-throws-no-unused-vars-for-typescript-interface
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      indent: ['error', 2, { SwitchCase: 1 }],
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      semi: ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-nested-ternary': 'error',
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      'jsx-quotes': ['error', 'prefer-double'],
      'no-empty': ['error', { allowEmptyCatch: true }],
      'vue/no-setup-props-destructure': 'off',
      // 'import/extensions': [
      //   'error',
      //   'ignorePackages',
      //   {
      //     ts: 'never',
      //   },
      // ],
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: ['error'],
        },
      ],
      // Note: you must disable the base rule as it can report incorrect errors
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': 'error',
    },
  },
];

export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...projectConfig,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
];
