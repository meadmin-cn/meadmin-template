import { useGlobalStore } from '@/store';
import Add from './add.vue';
export default async (props: Omit<ComponentProps<typeof Add>, 'show'> = {}) => {
  const show = ref(true);
  const globalStore = useGlobalStore();
  const key = globalStore.addGlobalComponents(
    Add,
    computed(() => ({
      show: show.value,
      ...props,
      ['onUpdate:show']: (value: boolean) => {
        show.value = value;
      },
      onClosed: () => {
        globalStore.removeGlobalComponents(key); //关闭时移除当前组件
        props.onClosed && props.onClosed();
      },
    })),
  );
  await nextTick();
  return key;
};
