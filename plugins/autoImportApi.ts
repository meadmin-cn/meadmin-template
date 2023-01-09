import AutoImport from 'unplugin-auto-import/vite';
import { resolve } from 'path';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
function pathResolve(dir: string) {
  return resolve(__dirname, '../', dir);
}
export default () =>
  AutoImport({
    // 自动加载API
    imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
    // 可以选择auto-imports.d.ts生成的位置，使用ts建议设置为'src/auto-imports.d.ts'
    dts: false, // pathResolve('types/auto-imports.d.ts'),
    resolvers: [ElementPlusResolver()],
  });
