import { PropType, Ref, SuspenseProps, Transition, TransitionProps } from 'vue';
import { MeKeepAliveProps, default as MeKeepAlive } from './meKeepAlive';
import { done } from '@/utils/nProgress';
import { closeLoading, loadingObject } from '@/utils/loading';
import { Suspense } from 'vue';
import { omit } from 'lodash-es';
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
    suspense: Object as PropType<SuspenseProps>,
  },
  setup(props, { attrs, slots }) {
    const componentIs: Ref<any> = ref(undefined);
    const key = ref(props.componentKey);
    const _attrs = ref(attrs);
    watch(
      () => props.is,
      async (is) => {
        if (is) {
          key.value = props.componentKey;
          _attrs.value = attrs;
          componentIs.value = is;
          if(!props.suspense && !slots.fallback){
            props.doneProgress && done();
            props.closeLoading && closeLoading(false, 1, props.closeLoading);
          }
        }
      },
      { immediate: true },
    );
    return () => {
      let component = h(componentIs.value || 'div', {
        key: key.value,
        ..._attrs.value,
      }, omit(slots,'fallback'));
      if (props.suspense || slots.fallback) {
        const tmpComponent = component;
        component = h(Suspense, {...(props.suspense || {}),onResolve:()=>{
          props.doneProgress && done();
          props.closeLoading && closeLoading(false, 1, props.closeLoading);
          props.suspense?.onResolve?.();
        }}, { default: () => tmpComponent, fallback: slots.fallback });
      }
      if (props.keepAlive) {
        const tmpComponent = component;
        component = h(MeKeepAlive, props.keepAlive, [tmpComponent]);
      }
      if (props.transition) {
        const tmpComponent = component;
        component = h(Transition, props.transition, { default: () => tmpComponent });
      }
      return component;
    };
  },
});
