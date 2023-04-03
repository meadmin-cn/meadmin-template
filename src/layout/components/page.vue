<template>
  <router-view v-slot="{ Component, route }">
    <me-component
      :is="Component"
      :transition="props.transition"
      :keep-alive="keepAliveProps"
      :component-key="route.fullPath"
      done-progress
      close-loading="layout"
    >
    </me-component>
  </router-view>
</template>

<script setup lang="ts" name="LayoutPage">
import { MeKeepAliveProps } from '@/components/meKeepAlive';
import { settingConfig } from '@/config';
import { useRouteStore } from '@/store';
import { ComputedRef, TransitionProps } from 'vue';
const props = defineProps<{
  transition?: TransitionProps;
}>();
const routeStore = useRouteStore();
let keepAliveProps: undefined | ComputedRef<MeKeepAliveProps>;
if (settingConfig.openKeepAlive) {
  keepAliveProps = computed<MeKeepAliveProps>(() => ({
    max: 30,
    includeKey: [...routeStore.cacheFullPath],
  }));
  const route = useRoute();
  watch(
    route,
    () => {
      if (!route.meta.noCache) {
        routeStore.cacheFullPath.add(route.fullPath);
      }
    },
    { immediate: true },
  );
}
</script>
