import { difference } from "lodash-es";
import { ComponentInternalInstance, ComponentOptions, ConcreteComponent, isVNode, KeepAlive, KeepAliveProps, SetupContext, VNode, VNodeProps } from "vue";
import { isFunction } from '@vue/shared';
 enum ShapeFlags {
    ELEMENT = 1,
    FUNCTIONAL_COMPONENT = 2,
    STATEFUL_COMPONENT = 4,
    TEXT_CHILDREN = 8,
    ARRAY_CHILDREN = 16,
    SLOTS_CHILDREN = 32,
    TELEPORT = 64,
    SUSPENSE = 128,
    COMPONENT_SHOULD_KEEP_ALIVE = 256,
    COMPONENT_KEPT_ALIVE = 512,
    COMPONENT = 6
}
export function getComponentName(
  Component: ConcreteComponent
): string | undefined {
  return isFunction(Component)
    ? Component.displayName || Component.name
    : Component.name
}
function getInnerChild(vnode: VNode) {
  return vnode.shapeFlag & ShapeFlags.SUSPENSE ? vnode.ssContent! : vnode
}
export const isAsyncWrapper = (i: ComponentInternalInstance | VNode): boolean =>
  !!(i.type as ComponentOptions).__asyncLoader
const alive = KeepAlive as unknown as ComponentOptions;
export default Object.assign({
  props: Object.assign({
    includeKeys: [Array]
  }, alive.props),
  setup(props: KeepAliveProps, setupContext: SetupContext) {
    if (props.includeKeys) {
      const keys: Map<string | number | symbol | null, string> = new Map();
      props.include = undefined;
      props.exclude = undefined;
      const call = alive.setup!(props, setupContext);
      watch(
        () => props.includeKeys,
        (newVal, oldVal) => {
          const delKeys = difference(oldVal, newVal!);
          const exclude = [] as string[];
          delKeys.forEach((item) => {
            exclude.push(keys.get(item) as string);
            keys.delete(item);
          })
          props.exclude = exclude;
        },
        { flush: 'post', deep: true }
      )
      return () => {
        let slots = setupContext.slots;
        if (!slots.default) {
          return null
        }
        const children = slots.default()
        const rawVNode = children[0];
        if (children.length > 1) {
          return call();
        } else if (
          !isVNode(rawVNode) ||
          (!(rawVNode.shapeFlag & ShapeFlags.STATEFUL_COMPONENT) && !(rawVNode.shapeFlag & ShapeFlags.SUSPENSE))
        ) {
          return call();
        }
        const key = rawVNode.key;
        if(!key){
          console.warn('使用includeKeys时被缓存的组件必须指定key');
          return call();
        }
        let name = keys.get(key);
        if (!name) {
          const vnode = getInnerChild(rawVNode)
          const comp = vnode.type as ConcreteComponent
          // for async components, name check should be based in its loaded
          // inner component if available
          name = getComponentName(
            isAsyncWrapper(vnode)
              ? (vnode.type as ComponentOptions).__asyncResolved || {}
              : comp
          );
          name && keys.set(key, name);
        }
        props.include = name;
        if (name && props.exclude) {
          const index = (<string[]>props.exclude).indexOf(name);
          if (index > -1) {
            (<string[]>props.exclude).splice(index, 1);
          }
        }
        let res = call();
        props.include = undefined;
        return res;
      }
    }else{
      return alive.setup!(props,setupContext);
    }
  }
}, alive) as any as {
  __isKeepAlive: true
  new(): {
    $props: VNodeProps & KeepAliveProps
  }
};