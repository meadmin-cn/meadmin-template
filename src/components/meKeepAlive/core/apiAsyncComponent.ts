import { ComponentInternalInstance, VNode, ComponentOptions } from 'vue';

export const isAsyncWrapper = (i: ComponentInternalInstance | VNode): boolean =>
  !!(i.type as ComponentOptions).__asyncLoader;
