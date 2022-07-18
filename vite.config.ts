import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/rollup';
import svgLoader from 'vite-svg-loader'
import { resolve } from 'path';
import * as fs from 'fs';
import {default as autogenerationImport,getName} from 'vite-plugin-autogeneration-import-file';
import vueSetUpExtend from './plugin/vueSetupExtend';
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
export default defineConfig({
  plugins: [vue(), svgLoader({
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
  }),autogenerationImport([
    {//svg icon
      pattern:['*.svg'],
      dir:'src/icons/svg',
      toFile:'types/meIconComments.d.ts',
      name:(name)=>{
        name = getName(name);
        return 'MeIcon'+name[0].toUpperCase()+name.slice(1);
      },
      template:fs.readFileSync('./template/meIconComments.d.ts','utf-8'),
      codeTemplates:[{key:'\n        //code',template:'\n        {{name}}: Icon;'}]
    },
    {//pinia module
      pattern:['**/*.{ts,js}','*.{ts,js}'],
      dir:'src/store/modules',
      toFile:'src/store/module.ts',
      name:'use_{{name}}_store'
    }
  ]),vueSetUpExtend({setLangImport:true,exclude:['steup','lang'],setComponents:true})],
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /@\//,
        replacement: pathResolve('src') + '/',
      }
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  }
})
