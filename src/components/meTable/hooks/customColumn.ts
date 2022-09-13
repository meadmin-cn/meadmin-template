import { debounce } from 'lodash-es';
import {
  VNode,
  Component,
  nextTick,
  computed,
  watch,
  reactive,
  shallowRef,
  ref,
  withCtx,
  cloneVNode,
  renderSlot,
} from 'vue';
interface Label {
  value: string;
  label?: string;
  children: Label[];
}
/* 用于判断 vnode 是否是 el-table-column 组件 */
function isElTableColumn(vnode: VNode) {
  return (vnode.type as Component)?.name === 'ElTableColumn';
}
const componentMap = new Map<string, VNode>();
export default (slot: () => VNode[], parent: any) => {
  const labels = [] as Label[];
  let needScreen = false;
  const checkedLabels = reactive(new Set<string>());
  const key = ref(Symbol());
  const children = shallowRef();
  const getVNodes = (vNodes: VNode[], labels: Label[], parentId = '') => {
    const components = reactive([] as VNode[]);
    const props = reactive({ key: '' });
    vNodes.forEach((vNode, index) => {
      if (needScreen) {
        if (!checkedLabels.has(parentId + '_' + index)) {
          return components.push();
        }
      } else {
        if (isElTableColumn(vNode)) {
          labels.push({
            value: parentId + '_' + index,
            label: vNode.props?.label,
            children: [],
          });
        }
        checkedLabels.add(parentId + '_' + index);
        componentMap.set(parentId + '_' + index, vNode);
        vNode.key = parentId + '_' + index;
        props.key = vNode.key;
      }
      if (vNode.children && (vNode.children as Record<string, () => VNode[]>).default) {
        const oldDefault = (vNode.children as Record<string, () => VNode[]>).default;
        watch(
          computed(() => oldDefault()),
          (defaultVnode) => {
            (vNode.children as Record<string, () => VNode[]>).default = getVNodes(
              defaultVnode,
              labels[labels.length - 1].children,
              parentId + '_' + index,
            ) as any;
            props.key = vNode.key + new Date();
            console.log(111);
          },
          { immediate: true },
        );
      }
      components.push(cloneVNode(vNode, props, true));
    });
    return withCtx(() => [renderSlot({ default: () => components }, 'default')], parent);
  };
  children.value = getVNodes(slot(), labels);
  watch(
    checkedLabels,
    debounce(() => {
      needScreen = true;
      children.value = getVNodes(slot(), labels);
    }, 500),
  );
  return { children, key, labels, checkedLabels };
};
