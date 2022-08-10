import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { resolve} from 'path';
import * as fs from 'fs';
import { default as autogenerationImport, getName } from 'vite-plugin-autogeneration-import-file';
import vueSetUpExtend from './plugin/vueSetupExtend';
import { viteMockServe } from 'vite-plugin-mock'
import { ConfigEnv, UserConfigExport } from 'vite';
import { visualizer } from "rollup-plugin-visualizer";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { splitVendorChunkPlugin } from 'vite'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vueSetUpExtend({ setLangImport: true, exclude: ['steup', 'lang'], setComponents: true }),
      splitVendorChunkPlugin(),VueI18nPlugin({
      /* options */
      // locale messages resource pre-compile option
      include:  './src/**/lang/**.json',
    }),
    viteMockServe({
      mockPath: 'mock/apiDemo',
      localEnabled: command === 'serve',
      prodEnabled: command !== 'serve',
      //  这样可以控制关闭mock的时候不让mock打包到最终代码内
      injectCode: `
        import { setupProdMockServer } from '../mock/index';
        setupProdMockServer();
      `,
    }),
    AutoImport({//自动加载
      imports: ['vue', 'vue-router', 'pinia'],
      // 可以选择auto-imports.d.ts生成的位置，使用ts建议设置为'src/auto-imports.d.ts'
      dts: 'types/auto-imports.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
    Components({//组件自动注册(包括components下的所有.vue组件和ElementPlus组件)
      dts:'./types/components.d.ts',
      resolvers: [ElementPlusResolver()],
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
    })
    , autogenerationImport([//自动生成
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
    visualizer(),
    ],
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /@\//,
          replacement: pathResolve('src') + '/',
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
    },
    build:{
      rollupOptions: {
        output:{
          manualChunks: {//打包优化
            core: ['vue', 'vue-router','pinia','vue-request','vue-i18n/dist/vue-i18n.cjs.js','jquery','lodash-es'],
            elIcon:['@element-plus/icons-vue']
          },
        }
      },
    }
  }
}
