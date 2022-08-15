import { ComponentInternalInstance } from 'vue';

export interface ComponentRenderContext {
  [key: string]: any;
  _: ComponentInternalInstance;
}
