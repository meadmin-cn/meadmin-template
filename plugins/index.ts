import type { ConfigEnv } from "vite";
import autoComponents from "./autoComponents";
import autoImport from "./autoImport";
import autoImportApi from "./autoImportApi";
import mock from "./mock";
import svgLoader from "./svgLoader";
import vueSetUpExtend from "./vueSetUpExtend";
import vue from "@vitejs/plugin-vue";
// import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import viteCompression from "vite-plugin-compression"; //打包压缩
// import legacy from "@vitejs/plugin-legacy"; //历史兼容性

export default (configEnv: ConfigEnv) => {
  return [
    vue(),
    // VueI18nPlugin({
    //   /* options */
    //   // locale messages resource pre-compile option
    //   include: ['./src/**/lang/**/*.json', './src/**/lang/*.json'],
    // }),
    viteCompression(),
    autoComponents(),
    autoImport(),
    autoImportApi(),
    mock(configEnv),
    svgLoader(),
    vueSetUpExtend(),
    // legacy({ //建议在vit.config.ts中build.target配置兼容性，但最低到es2025。如需更低的兼容性支持，在此配置即可，但会相应增加打包时间。
    //   targets: [ "chrome 64", "Android 4.1", "iOS 7.1"],
    // }),
  ];
};
