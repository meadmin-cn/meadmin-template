export {};
declare global {
  //svg-icon /el-cion-*组件定义
  type Icon = DefineComponent<{
    size: (StringConstructor | NumberConstructor)[];
    color: StringConstructor;
  }>;
  declare var __SSR__: boolean;
  declare var __DEV__: boolean;
  declare var __COMPAT__: boolean;

  // Feature flags
  declare var __FEATURE_PROD_DEVTOOLS__: boolean;
  declare var __FEATURE_SUSPENSE__: boolean;
}
