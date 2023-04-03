import { DefineComponent } from 'vue';
declare global {
  //unplugin-auto-import的Element是在页面加载到的时候才生成类型，这里全局声明一下
  const ElLoading: typeof import('element-plus/es')['ElLoading'];
  const ElMessage: typeof import('element-plus/es')['ElMessage'];
  const ElMessageBox: typeof import('element-plus/es')['ElMessageBox'];
  const ElNotification: typeof import('element-plus/es')['ElNotification'];
  // svg-icon /el-cion-*组件定义
  type Icon = DefineComponent<{
    size: (StringConstructor | NumberConstructor)[];
    color: StringConstructor;
  }>;

  /* eslint-disable */
  declare const __SSR__: boolean;
  declare const __DEV__: boolean;
  declare const __COMPAT__: boolean;

  // Feature flags
  declare const __FEATURE_PROD_DEVTOOLS__: boolean;
  declare const __FEATURE_SUSPENSE__: boolean;
  /* eslint-disable */

  type ComponentProps<Component> = {
    -readonly [K in keyof Omit<
      InstanceType<Component>['$props'],
      keyof InstanceType<DefineComponent>['$props']
    >]: InstanceType<Component>['$props'][K];
  };
}
