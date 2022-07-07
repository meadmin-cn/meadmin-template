import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/rollup';
import {resolve} from 'path';
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
export default defineConfig({
  plugins: [vue(),AutoImport({//自动加载函数
    imports: ['vue', 'vue-router','pinia'],
    // 可以选择auto-imports.d.ts生成的位置，使用ts建议设置为'src/auto-imports.d.ts'
    dts: 'types/auto-imports.d.ts'
  })],
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /@\//,
        replacement: pathResolve('src') + '/',
      }
    ],
    extensions:['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json','.vue']
  },
})
