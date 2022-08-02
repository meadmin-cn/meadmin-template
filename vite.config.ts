import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/rollup';
import svgLoader from 'vite-svg-loader'
import { resolve } from 'path';
import * as fs from 'fs';
import { default as autogenerationImport, getName } from 'vite-plugin-autogeneration-import-file';
import vueSetUpExtend from './plugin/vueSetupExtend';
import { viteMockServe } from 'vite-plugin-mock'
import { ConfigEnv ,UserConfigExport} from 'vite';
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
export default ({ command }: ConfigEnv): UserConfigExport =>{
  return {
  plugins: [viteMockServe({
    mockPath: 'mock/apiDemo',
      localEnabled: command === 'serve',
      prodEnabled: command !== 'serve',
      //  这样可以控制关闭mock的时候不让mock打包到最终代码内
      injectCode: `
        import { setupProdMockServer } from './mock/index';
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
  })
  ],
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /@\//,
        replacement: pathResolve('src') + '/',
      },
      {
        find:'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js'
      }
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  optimizeDeps:{
    exclude:['vue-router']
  }
}}
