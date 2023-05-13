module.exports = {
  root: true,
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      // Script parser for `<script>`
      js: '@typescript-eslint/parser',

      // Script parser for `<script lang="ts">`
      ts: '@typescript-eslint/parser',
    },
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    extraFileExtensions: ['.vue'],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {},
    },
    {
      files: ['*.cjs'],
      rules: {},
    },
  ],
  rules: {
    // override/add rules settings here, such as:
    'lines-around-comment': ['warn', { beforeBlockComment: true }],
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-v-html': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'after-used' }],
    'no-undef': 'off', // ts(2304)
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allowSingleOrDouble',
        filter: {
          // you can expand this regex to add more allowed names
          regex: '^((__v_.*)|([0-9]+))$',
          match: false,
        },
      },
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: ['memberLike'],
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allowSingleOrDouble',
        filter: {
          // you can expand this regex to add more allowed names
          regex: '^((__v_.*)|([0-9]+))$',
          match: false,
        },
      },
      {
        selector: 'enumMember',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: ['typeLike', 'enum'],
        format: ['PascalCase'],
        leadingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: ['default'],
        modifiers: ['destructured', 'exported'],
        format: null,
      },
    ],
  },
};
