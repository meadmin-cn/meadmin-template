import { useGlobalStore } from '@/store';
import { Component, onBeforeUnmount } from 'vue';
/**
 * 创建弹窗action调用
 * @param component 组件
 * @param closeRemove 关闭是是否移除组件（默认是）
 * @param showKey 组件否展示绑定的v-model对应key
 * @returns
 */
export const useActionModel = <T extends Component>(component: T, closeRemove = true, showKey = 'modelValue' as const) => {
  const show = ref(false);
  let key = '' as string | number | symbol;
  const globalStore = useGlobalStore();
  const close = () => {
    show.value = false;
    if (closeRemove && key) {
      globalStore.removeGlobalComponents(key); //关闭时移除当前组件
      key = '';
    }
  };
  const open = (props?: Omit<ComponentProps<T>, typeof showKey>) => {
    closeRemove && close();
    show.value = true;
    if (!key) {
      key = globalStore.addGlobalComponents(
        component,
        computed(() => ({
          [showKey]: show.value,
          ...props,
          [`onUpdate:${showKey}`]: (value: boolean) => {
            show.value = value;
          },
          onClosed: () => {
            close();
            if (typeof props?.onClosed === 'function') {
              props.onClosed();
            }
          },
        })),
      );
    }
  };
  onBeforeUnmount(() => {
    if (key) {
      globalStore.removeGlobalComponents(key); //销毁前移除组件
      key = '';
    }
  });
  return {
    open: open,
    close: close,
  };
};
export default useActionModel;
