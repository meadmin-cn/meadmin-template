import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginVue from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginVue.configs['flat/recommended'],
  {
    files: ['**/*.{ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        parser: tseslint.parser,
      },
    },
    rules: {
      // override/add rules settings here, such as:
      "@typescript-eslint/consistent-type-imports": ["error",
        {
          fixStyle:'separate-type-imports',
        }
      ],
      "@typescript-eslint/no-import-type-side-effects": "error",
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true, //允许使用逻辑短路语句，例如 a && b()。
          allowTernary: true, //允许使用三元运算符 a ? b() : c()
        },
      ],
      '@typescript-eslint/no-unused-vars': [//未使用的变量报错
        'error',
        { argsIgnorePattern: '^_' }//允许忽略_开头的变量名
      ],
      'vue/multi-word-component-names': 'off',
      'vue/no-required-prop-with-default': 'off',
      'vue/require-default-prop': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-undef': 'off', // ts(2304)
      'no-async-promise-executor': 'off',
      'vue/prefer-import-from-vue': 'off',
      'vue/no-v-html': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase', 'PascalCase'],
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
          format: null,
          // format: ['camelCase', 'PascalCase'],
          // leadingUnderscore: 'allowSingleOrDouble',
          // filter: {
          //   // you can expand this regex to add more allowed names
          //   regex: '^((__v_.*)|([0-9]+))$',
          //   match: false,
          // },
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
  },
  { ignores: ['**/*.d.ts', '**/coverage', '**/dist','template','vite.config.ts','.prettierrc.js','commitlint.config.cjs' ] },
  eslintConfigPrettier,
  {
    files: ['**/*.js'],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.js'], //包含不在tsconfig中的文件
        },
        tsconfigRootDir: import.meta.dirname,
        parser: tseslint.parser,
        // or, in CommonJS, __dirname
      },
    },
  },
);
