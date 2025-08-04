import { ElButton } from 'element-plus';
import { PropType } from 'vue';
const props = {
  onClick: Function as PropType<() => any | Promise<any>>,
};
export default defineComponent({
  name: 'MeButton',
  props: props as unknown as typeof props & ComponentObjectPropsOptionsFromData<ComponentProps<typeof ElButton>>,
  setup(props, { slots }) {
    const btnLoading = ref(false);
    const clickHandle = async (evt: MouseEvent) => {
      if (typeof props.onClick === 'function') {
        btnLoading.value = true;
        try {
          await props.onClick(evt);
        } catch (e) {
          console.error(e);
        }
        btnLoading.value = false;
      }
    };
    return () => h(ElButton, { ...props, onClick: clickHandle, loading: btnLoading.value }, slots);
  },
});
