import { PropType, Ref, Transition, TransitionProps, VNode } from 'vue';
import { MeKeepAliveProps, default as MeKeepAlive } from './meKeepAlive';
import { useLoadMessages } from '@/locales/i18n';
import { done } from '@/utils/nProgress';
import { localeConfig } from '@/config';
import { closeLoading, loadingObject } from '@/utils/loading';
export default defineComponent({
  name: 'MeComponent',
  props: {
    is: {
      type: [String, Object],
    },
    keepAlive: Object as PropType<MeKeepAliveProps>,
    componentKey: [Number, String, Symbol],
    doneProgress: Boolean,
    closeLoading: String as PropType<keyof typeof loadingObject>,
    transition: Object as PropType<TransitionProps>,
  },
  setup(props, { attrs }) {
    const loadMessages = useLoadMessages();
    const componentIs: Ref<any> = ref(undefined);
    const key = ref(props.componentKey);
    const _attrs = ref(attrs);
    watch(
      () => props.is,
      async (is) => {
        if (is) {
          localeConfig.loadMessageConfig.componentLoad && (await Promise.allSettled(loadMessages(is as any, false))); // 自动加载语言包
          componentIs.value = is;
          key.value = props.componentKey;
          _attrs.value = attrs;
          props.doneProgress && done();
          props.closeLoading && closeLoading(false,1,props.closeLoading);
        }
      },
      { immediate: true },
    );

    return () => {
      const components = [] as VNode[];
      components.push(
        h(componentIs.value || 'div', {
          key: key.value,
          ..._attrs.value,
        }),
      );
      if (props.keepAlive) {
        const index = components.length - 1;
        components.push(h(MeKeepAlive, props.keepAlive, [components[index]]));
      }
      if (props.transition) {
        const index = components.length - 1;
        components.push(h(Transition, props.transition, { default: () => components[index] }));
      }
      return components[components.length - 1];
    };
  },
});
