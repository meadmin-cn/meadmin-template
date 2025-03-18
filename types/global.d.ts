import { DefineComponent,Prop } from 'vue';
import { ElTable } from 'element-plus';
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
    -readonly [K in keyof Omit<InstanceType<Component>['$props'], keyof InstanceType<DefineComponent>['$props']>]: InstanceType<Component>['$props'][K];
  } & { [key: `on${Capitalize<string>}`]: (...args: any[]) => any };

  //将 对象类型 转化为合法的组件props声明类型
  type ComponentObjectPropsOptionsFromData<P=Record<string, unknown>> = {
    [K in keyof P]-?: undefined extends P[K] ? Prop<P[K]|undefined>:Prop<P[K]>;
  };
  
  //判断是否是字符串
  type IsStringLiteral<T> = T extends string ? string extends T ? false : true : false;
  //将数组类型emit转化为对象函数类型emit
  type ArrayEmitsOptionsToFns<T extends any[]> = {
    [K in T[0]]: IsStringLiteral<K> extends true ? (...args: T extends [e: infer E, ...args: infer P] ? K extends E ? P : never : never) => void : never;
  };

  type ELTableInstance = InstanceType<typeof ElTable> & {
    getSelectionIndexs: () => number[]; //获取选中行的索引
  };

  type KeyOfMap<T extends Map> = Parameters<T['get']>[0];

  type ValueOfMap<T extends Map> = ReturnType<T['get']>;
}
