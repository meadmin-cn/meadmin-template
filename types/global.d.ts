import { Component, AllowedComponentProps, DefineComponent, VNodeProps } from 'vue';
export {};
declare global {
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
