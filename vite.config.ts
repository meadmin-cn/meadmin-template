import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { resolve} from 'path';
import * as fs from 'fs';
import { autoImport,resolver } from 'vite-plugin-autogeneration-import-file';
import vueSetUpExtend from './plugin/vueSetupExtend';
import { viteMockServe } from 'vite-plugin-mock'
import { ConfigEnv, UserConfigExport } from 'vite';
import { visualizer } from "rollup-plugin-visualizer";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { splitVendorChunkPlugin } from 'vite'
// @ts-ignore
import {loadMessageConfig} from './src/config/locale';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  return {
    envPrefix :'ME_',
    plugins: [
      vueSetUpExtend({exclude: ['steup', 'lang'], setLangImport: loadMessageConfig.componentLoad,setComponents: loadMessageConfig.componentLoad }),
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
    AutoImport({//自动加载API
      imports: ['vue', 'vue-router', 'pinia','@vueuse/core'],
      // 可以选择auto-imports.d.ts生成的位置，使用ts建议设置为'src/auto-imports.d.ts'
      dts: 'types/auto-imports.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
    Components({//组件自动注册(包括components下的所有.vue组件和ElementPlus组件)
      include:[],
      dts:false,
      resolvers: [ElementPlusResolver({importStyle:false}),resolver([3],[2])],
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
    , autoImport([//自动生成
      {//svg icon type
        pattern: ['*.svg'],
        dir: 'src/icons/svg',
        toFile: 'types/meIconComments.d.ts',
        name: 'MeIcon_{{name}}',
        template: fs.readFileSync('./template/meIconComments.d.ts', 'utf-8'),
        codeTemplates: [{ key: '        //code', template: '        {{name}}: Icon;\n' }]
      },
      {//pinia module
        pattern: ['**/*.{ts,js}', '*.{ts,js}'],
        dir: 'src/store/modules',
        toFile: 'src/store/module.ts',
        name: 'use_{{name}}_store'
      },
      {//auto import directives
        pattern: ['*.ts', '**/index.ts'],
        dir: 'src/directives',
        toFile: 'types/directives.d.ts',
        template: fs.readFileSync('./template/directives.d.ts', 'utf-8'),
        codeTemplates: [
          { key: '//code', template: '{{name}}: typeof import("{{path}}")["default"];\n        ' }
        ],
        name: 'V_{{name}}'
      },
      {//auto import components
        pattern: ['*.vue', '**/index.{vue,ts}'],
        dir: 'src/components',
        toFile: 'types/components.d.ts',
        template: fs.readFileSync('./template/components.d.ts', 'utf-8'),
        codeTemplates: [
          { key: '//code', template: '{{name}}: typeof import("{{path}}")["default"];\n        ' }
        ],
        name: '_{{name}}'
      }
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
