import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/rollup';

export default defineConfig({
  plugins: [vue(),AutoImport({//自动加载函数
    imports: ['vue', 'vue-router','pinia'],
    // 可以选择auto-imports.d.ts生成的位置，使用ts建议设置为'src/auto-imports.d.ts'
    dts: 'types/auto-imports.d.ts'
  })]
})
