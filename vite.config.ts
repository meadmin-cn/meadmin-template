import { createRequire } from 'node:module';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import { resolve } from 'path';
import * as fs from 'fs';
import { autoImport, resolver } from 'vite-plugin-autogeneration-import-file';
import {vueSetUpExtend} from '@yuntian001/vue-setup-extend';
import { viteMockServe } from '@meadmin-cn/vite-plugin-mock';
import { ConfigEnv, UserConfigExport } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer'; //打包大小分析（stats.html）
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { splitVendorChunkPlugin } from 'vite';
import autoprefixer from 'autoprefixer';
// @ts-ignore
import px2rem from 'postcss-plugin-px2rem';
import viteCompression from 'vite-plugin-compression'; //打包压缩
import { babel } from '@rollup/plugin-babel';

// @ts-ignore
import { loadMessageConfig } from './src/config/locale';
function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  return {
    envPrefix: 'ME_',
    plugins: [
      babel({
        babelrc: false,
        extensions: ['.ts', '.tsx'],
        plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
        presets: [
          [
            '@babel/preset-env',
            {
              targets: ['chrome 87', 'safari 13', 'firefox 78', 'edge 88'],
              useBuiltIns: 'usage',
              bugfixes: true,
              loose: false,
              modules: false,
              corejs: createRequire(import.meta.url)('core-js/package.json').version,
              shippedProposals: true,
              ignoreBrowserslistConfig: true,
            },
          ],
        ],
        exclude: 'node_modules/**',
        babelHelpers: 'runtime',
      }),
      vueSetUpExtend({
        exclude: ['steup', 'lang'],
        setLangImport: loadMessageConfig.componentLoad,
        setComponents: loadMessageConfig.componentLoad,
      }),
      splitVendorChunkPlugin(),//打包分析，会生成stats.html展示打包情况
      // VueI18nPlugin({
      //   /* options */
      //   // locale messages resource pre-compile option
      //   include: ['./src/**/lang/**/*.json', './src/**/lang/*.json'],
      // }),
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
      AutoImport({
        // 自动加载API
        imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
        // 可以选择auto-imports.d.ts生成的位置，使用ts建议设置为'src/auto-imports.d.ts'
        dts: pathResolve('types/auto-imports.d.ts'),
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        // 组件自动注册(包括components下的所有.vue组件和ElementPlus组件)
        include: [],
        dts: false,
        resolvers: [ElementPlusResolver({ importStyle: false }), resolver([3], [2])],
      }),
      vue(),
      svgLoader({
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false, // 禁用插件
                },
              },
            },
            {
              name: 'removeAttrs',
              params: {
                attrs: '(width|height|fill)', // 清除svg属性
              },
            },
          ],
        },
      }),
      autoImport([
        // 自动生成
        {
          // svg icon type
          pattern: ['*.svg'],
          dir: pathResolve('src/icons/svg'),
          toFile: pathResolve('types/meIconComments.d.ts'),
          name: 'MeIcon_{{name}}',
          template: fs.readFileSync(pathResolve('./template/meIconComments.d.ts'), 'utf-8'),
          codeTemplates: [{ key: '//code', template: '{{name}}: Icon;\n    ' }],
        },
        {
          // pinia module
          pattern: ['**/*.{ts,js}', '*.{ts,js}'],
          dir: pathResolve('src/store/modules'),
          toFile: pathResolve('src/store/module.ts'),
          name: 'use_{{name}}_store',
        },
        {
          // auto import directives
          pattern: ['*.ts', '**/index.ts'],
          dir: pathResolve('src/directives'),
          toFile: pathResolve('types/directives.d.ts'),
          template: fs.readFileSync(pathResolve('./template/directives.d.ts'), 'utf-8'),
          codeTemplates: [
            {
              key: '//code',
              template: '{{name}}: typeof import("{{path}}")["default"];\n    ',
            },
          ],
          name: 'V_{{name}}',
        },
        {
          // auto import components
          pattern: ['*.{vue,ts}', '**/index.{vue,ts}'],
          dir: pathResolve('src/components'),
          toFile: pathResolve('types/components.d.ts'),
          template: fs.readFileSync(pathResolve('./template/components.d.ts'), 'utf-8'),
          codeTemplates: [
            {
              key: '//code',
              template: '{{name}}: typeof import("{{path}}")["default"];\n    ',
            },
            {
              key: '//typeCode',
              template: 'type {{name}}Instance = InstanceType<typeof import("{{path}}")["default"]>;\n  ',
            },
          ],
          name: '_{{name}}',
        },
      ]),
      visualizer(),
      viteCompression(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/variables.scss" as *;`,
        },
      },
      postcss: {
        plugins: [
          autoprefixer,
          px2rem({
            rootValue: 14, //换算基数，将 px 替换为 1/rootValue rem (即设计图下的fontSize)
            // unitPrecision: 5, //允许REM单位增长到的十进制数字。
            propWhiteList: ['font-size'], //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            // propBlackList: ['font-size', 'border'], //不应从 px 更改为 rem 的属性
            exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            // selectorBlackList: [], //要忽略并保留为px的选择器
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 2, //设置要替换的最小像素值(包含)。 默认 0
          }),
        ],
      },
    },
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /@\//,
          replacement: pathResolve('src') + '/',
        },
      ],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    /* eslint-disable */
    define: {
      __SSR__: `true`,
      __DEV__: mode === 'development' ? `true` : `false`,
      __COMPAT__: `false`,
      __FEATURE_SUSPENSE__: `true`,
      __FEATURE_PROD_DEVTOOLS__: `false`,
    },
    /* eslint-disable */
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // 打包优化
            core: ['vue', 'vue-router', 'pinia', 'vue-request', 'vue-i18n/dist/vue-i18n.cjs.js', 'jquery', 'lodash-es'],
            elIcon: ['@element-plus/icons-vue'],
            mock: [pathResolve('./mock')],
          },
        },
      },
    },
    optimizeDeps: {
      //因为项目中很多用到了自动引入和动态加载，所以vite首次扫描依赖项会扫描不全，这里强制扫描全局。
      entries: [pathResolve('./src/**/*.{ts,tsx,vue}')],
      include: [
        'element-plus/es/components/loading/style/css',
        'element-plus/es/components/message/style/css',
        'element-plus/es/components/message-box/style/css',
        'element-plus/es/components/notification/style/css',
      ],
    },
  };
};
