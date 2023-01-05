import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { resolver } from './autoImport';
export default () =>
  Components({
    // 组件自动注册(包括components下的所有.vue组件和ElementPlus组件)
    include: [],
    dts: false,
    resolvers: [ElementPlusResolver({ importStyle: false }), resolver([3], [2])],
  });
