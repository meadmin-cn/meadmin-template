import { debounce } from 'lodash-es';
import { VNode, Component } from 'vue';
import { useGlobalStore } from '@/store';
const { i18n } = useGlobalStore();
interface Label {
  value: string;
  label?: string;
  children: Label[];
}
const origionDefault = new Map<
  string,
  (data: { row: Record<any, any>; column: Record<any, any>; $index: number }) => VNode[]
>();

/* 用于判断 vnode 是否是 el-table-column 组件 */
function isElTableColumn(vnode: VNode) {
  return (vnode.type as Component)?.name === 'ElTableColumn';
}
export default (slot: () => VNode[]) => {
  const labels = reactive([]) as Label[];
  let needScreen = false;
  const checkedLabelsRaw = new Set<string>();
  let changeLabel = false;
  const getVNodes = (vNodes: VNode[], labels: Label[], parentId = '') => {
    const components = [] as VNode[];
    vNodes.forEach((vNode, index) => {
      if (!isElTableColumn(vNode)) {
        components.push(vNode);
        return;
      }
      if (changeLabel) {
        const label = labels.find((item) => item.value === parentId + '_' + index)!;
        label.label = vNode.props?.label;
        origionDefault.has(parentId + '_' + index) &&
          getVNodes(
            origionDefault.get(parentId + '_' + index)!({ row: {}, column: {}, $index: -1 }),
            label.children,
            parentId + '_' + index,
          );
        return;
      }
      //checkedLabelsRaw不能是动态reactive，否则属性值变换时会触发default渲染造成抖动
      if (needScreen) {
        if (!checkedLabelsRaw.has(parentId + '_' + index)) {
          return;
        }
      } else {
        labels.push({
          value: parentId + '_' + index,
          label: vNode.props?.label,
          children: [],
        });
        checkedLabelsRaw.add(parentId + '_' + index);
      }
      if (vNode.children && (vNode.children as Record<string, () => VNode[]>).default) {
        if (!needScreen) {
          origionDefault.set(parentId + '_' + index, (vNode.children as Record<string, () => VNode[]>)?.default);
          getVNodes(
            origionDefault.get(parentId + '_' + index)!({ row: {}, column: {}, $index: -1 }),
            labels[labels.length - 1].children,
            parentId + '_' + index,
          );
        }
        //必须使用函数方式包含 origion default 否则动态渲染会失效
        (vNode.children as Record<string, (data: any) => VNode[]>).default = (data: any) =>
          getVNodes(
            origionDefault.get(parentId + '_' + index)!(data ?? { row: {}, column: {}, $index: -1 }),
            [],
            parentId + '_' + index,
          )();
      }
      components.push(vNode);
    });
    return () => components;
  };
  const children = ref(() => getVNodes(slot(), labels)());
  children.value(); //初始化
  needScreen = true;
  const checkedLabels = reactive(checkedLabelsRaw);
  const localeWacth = watch(
    //语言变更时更新label
    i18n.locale,
    () => {
      changeLabel = true;
      getVNodes(slot(), labels);
      changeLabel = false;
    },
  );
  const checkedLabelsWatch = watch(
    checkedLabels,
    debounce(() => {
      children.value = () => getVNodes(slot(), labels)();
    }, 500),
  );
  return {
    children,
    labels,
    checkedLabels,
    clean: (() => {
      localeWacth();
      checkedLabelsWatch;
    }) as (() => void) | undefined,
  };
};
