import { ConfigEnv } from 'vite';
import autoComponents from './autoComponents';
import autoImport from './autoImport';
import autoImportApi from './autoImportApi';
import babel from './babel';
import mock from './mock';
import svgLoader from './svgLoader';
import vueSetUpExtend from './vueSetUpExtend';
import { visualizer } from 'rollup-plugin-visualizer'; //打包大小分析（stats.html）
import vue from '@vitejs/plugin-vue';
// import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { splitVendorChunkPlugin } from 'vite';
import viteCompression from 'vite-plugin-compression'; //打包压缩

export default (configEnv: ConfigEnv) => {
  return [
    vue(),
    splitVendorChunkPlugin(), //打包分析，会生成stats.html展示打包情况
    // VueI18nPlugin({
    //   /* options */
    //   // locale messages resource pre-compile option
    //   include: ['./src/**/lang/**/*.json', './src/**/lang/*.json'],
    // }),
    visualizer(),
    viteCompression(),
    autoComponents(),
    autoImport(),
    autoImportApi(),
    babel(),
    mock(configEnv),
    svgLoader(),
    vueSetUpExtend(),
  ];
};
