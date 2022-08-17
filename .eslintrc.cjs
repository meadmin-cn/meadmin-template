module.exports = {
  extends: ['alloy', 'alloy/vue', 'alloy/typescript'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      cjs: '@babel/eslint-parser',
      js: '@babel/eslint-parser',
      jsx: '@babel/eslint-parser',

      ts: '@typescript-eslint/parser',
      tsx: '@typescript-eslint/parser',

      // Leave the template parser unspecified, so that it could be determined by `<script lang="...">`
    },
  },
  overrides: [
    {
      files: ['*.vue', '*.ts'],
      rules: {
        'no-undef': 'off', // ts(2304)
      },
    },
    {
      files: ['*.cjs'],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
  ],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // Customize your rules
    //
    // Please keep this rule off because it requiresTypeChecking
    // https://github.com/vuejs/vue-eslint-parser/issues/104
    // https://github.com/typescript-eslint/typescript-eslint/pull/5318
    '@typescript-eslint/prefer-optional-chain': 0,
    'no-param-reassign': 0,
    '@typescript-eslint/consistent-type-assertions': 0,
    'prefer-object-spread': 0,
    'max-params': ['error', 4],
    'vue/no-duplicate-attributes': 0,
    'vue/no-duplicate-attr-inheritance': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    'spaced-comment': 0,
  },
};
