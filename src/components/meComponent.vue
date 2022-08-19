<template>
  <me-keep-alive v-if="keepAlive" v-bind="keepAlive">
    <component :is="componentIs" :key="key" v-bind="attrs"></component>
  </me-keep-alive>
  <component :is="componentIs" v-else :key="key" v-bind="attrs"></component>
</template>
<script setup lang="ts" name="meCompnent" inheritAttrs="{{false}}">
import { PropType, Ref } from 'vue';
import { MeKeepAliveProps } from './meKeepAlive';
import { useLoadMessages } from '@/locales/i18n';
import nProgress from 'nprogress';
import { localeConfig } from '@/config';
const props = defineProps({
  is: {
    type: [String, Object],
    required: true,
  },
  keepAlive: Object as PropType<MeKeepAliveProps>,
  componentKey: [Number, String, Symbol],
  doneProgress: Boolean,
});
const loadMessages = useLoadMessages();
const componentIs: Ref<any> = ref(undefined);
const key = ref(props.componentKey);
const current = getCurrentInstance();
const attrs = ref(current?.proxy?.$attrs);
watch(
  () => props.is,
  async (is) => {
    if (is) {
      localeConfig.loadMessageConfig.componentLoad && (await Promise.allSettled(loadMessages(is as any, false))); // 自动加载语言包
      componentIs.value = is;
      key.value = props.componentKey;
      attrs.value = current?.proxy?.$attrs;
      if (props.doneProgress) {
        nProgress.done();
      }
    }
  },
  { immediate: true },
);
</script>
