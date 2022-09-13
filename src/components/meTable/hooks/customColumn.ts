import { debounce } from 'lodash-es';
import { VNode, Component, createCommentVNode, cloneVNode, renderSlot, Slots } from 'vue';
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
export default (slot: () => VNode[]) => {
  const labels = [] as Label[];
  let needScreen = false;
  const checkedLabels = reactive(new Set<string>());
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
        componentMap.set(parentId + '_' + index, vNode);
      }
      if (vNode.children && (vNode.children as Record<string, () => VNode[]>).default) {
        (vNode.children as Record<string, () => VNode[]>).default = getVNodes(
          (vNode.children as Record<string, () => VNode[]>).default(),
          labels[labels.length - 1].children,
          parentId + '_' + index,
        );
      }
      components.push(cloneVNode(vNode));
    });
    return () => components;
  };
  const children = shallowRef(getVNodes(slot(), labels));
  watch(
    checkedLabels,
    debounce(() => {
      needScreen = true;
      children.value = getVNodes(slot(), labels);
    }, 500),
  );
  watch(slot, () => {
    console.log('watch slot');
    children.value = getVNodes(slot(), labels);
  });
  return { children, labels, checkedLabels };
};
