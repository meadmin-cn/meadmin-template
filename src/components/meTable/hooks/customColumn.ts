import { debounce } from 'lodash-es';
import { VNode, Component, watch, reactive, shallowRef, ref, withCtx, renderSlot } from 'vue';
interface Label {
  value: string;
  label?: string;
  children: Label[];
}
const defaultMap = new Map<string, () => VNode[]>();
/* 用于判断 vnode 是否是 el-table-column 组件 */
function isElTableColumn(vnode: VNode) {
  return (vnode.type as Component)?.name === 'ElTableColumn';
}
export default (slot: () => VNode[]) => {
  const labels = [] as Label[];
  let needScreen = false;
  const checkedLabels = reactive(new Set<string>());
  const key = ref(Symbol());
  const children = shallowRef();
  const getVNodes = (vNodes: VNode[], labels: Label[], parentId = '') => {
    const components = [] as VNode[];
    vNodes.forEach((vNode, index) => {
      if (needScreen) {
        if (!checkedLabels.has(parentId + '_' + index)) {
          return;
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
      }
      if (vNode.children && (vNode.children as Record<string, () => VNode[]>).default) {
        if (!needScreen) {
          defaultMap.set(parentId + '_' + index, (vNode.children as Record<string, () => VNode[]>)?.default);
          getVNodes(
            defaultMap.get(parentId + '_' + index)!(),
            labels[labels.length - 1].children,
            parentId + '_' + index,
          );
        }
        const children = computed(() => defaultMap.get(parentId + '_' + index)!());
        (vNode.children as Record<string, () => VNode[]>).default = () => {
          return getVNodes(children.value, labels[labels.length - 1].children, parentId + '_' + index)();
        };
      }
      components.push(vNode);
    });
    return () => components;
  };
  children.value = getVNodes(slot(), labels);
  watch(
    checkedLabels,
    debounce(() => {
      needScreen = true;
      key.value = Symbol();
    }, 500),
  );
  return { children, key, labels, checkedLabels };
};
