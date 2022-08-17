import { ConcreteComponent } from 'vue';
import { isFunction } from '@vue/shared';
export function getComponentName(Component: ConcreteComponent, includeInferred = true): string | false | undefined {
  return isFunction(Component)
    ? Component.displayName || Component.name
    : Component.name || (includeInferred && Component.__name);
}
