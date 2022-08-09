import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/rollup';
import svgLoader from 'vite-svg-loader'
import { resolve } from 'path';
import * as fs from 'fs';
import { default as autogenerationImport, getName } from 'vite-plugin-autogeneration-import-file';
import vueSetUpExtend from './plugin/vueSetupExtend';
import { viteMockServe } from 'vite-plugin-mock'
import { ConfigEnv, UserConfigExport } from 'vite';
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [viteMockServe({
      mockPath: 'mock/apiDemo',
      localEnabled: command === 'serve',
      prodEnabled: command !== 'serve',
      //  这样可以控制关闭mock的时候不让mock打包到最终代码内
      injectCode: `
        import { setupProdMockServer } from '../mock/index';
        setupProdMockServer();
      `,
    }),
    vue(), svgLoader({
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,//禁用插件
              },
            },
          },
          {
            name: 'removeAttrs',
            params: {
              attrs: '(width|height|fill)',//清除svg属性
            },
          },
        ],
      },
    }), AutoImport({//自动加载函数
      imports: ['vue', 'vue-router', 'pinia'],
      // 可以选择auto-imports.d.ts生成的位置，使用ts建议设置为'src/auto-imports.d.ts'
      dts: 'types/auto-imports.d.ts'
    }), autogenerationImport([
      {//svg icon
        pattern: ['*.svg'],
        dir: 'src/icons/svg',
        toFile: 'types/meIconComments.d.ts',
        name: (name) => {
          name = getName(name);
          return 'MeIcon' + name[0].toUpperCase() + name.slice(1);
        },
        template: fs.readFileSync('./template/meIconComments.d.ts', 'utf-8'),
        codeTemplates: [{ key: '        //code', template: '        {{name}}: Icon;\n' }]
      },
      {//pinia module
        pattern: ['**/*.{ts,js}', '*.{ts,js}'],
        dir: 'src/store/modules',
        toFile: 'src/store/module.ts',
        name: 'use_{{name}}_store'
      },
      {//global component
        pattern: ['*.{vue,ts}', '*/index.{vue,ts}'],
        dir: 'src/components/core',
        toFile: 'types/globalComponents.d.ts',
        template: fs.readFileSync('./template/globalComponents.d.ts', 'utf-8'),
        codeTemplates: [
          { key: '//import code', template: 'import {{name}} from "{{path}}"\n' },
          { key: '        //code', template: '        {{name}}: typeof {{name}};\n' }
        ]
      },
      {//global directives
        pattern: ['*.{vue,ts}', '*/index.{vue,ts}'],
        dir: 'src/directives/core',
        toFile: 'types/globalDirectives.d.ts',
        template: fs.readFileSync('./template/globalDirectives.d.ts', 'utf-8'),
        codeTemplates: [
          { key: '//import code', template: 'import {{name}} from "{{path}}"\n' },
          { key: '        //code', template: '        {{name}}: typeof {{name}};\n' }
        ],
        name: 'v_{{name}}'
      },
    ]),
    vueSetUpExtend({ setLangImport: true, exclude: ['steup', 'lang'], setComponents: true })
    ],
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /@\//,
          replacement: pathResolve('src') + '/',
        },
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js'
        }
      ],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    define: {
      __SSR__: `true`,
      __DEV__: mode === 'development' ? `true` : `false`,
      __COMPAT__: `false`,
      __FEATURE_SUSPENSE__: `true`,
      __FEATURE_PROD_DEVTOOLS__: `false`,
    }
  }
}
