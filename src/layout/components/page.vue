<template>
  <router-view v-slot="{ Component, route }">
    <me-component
      :is="Component"
      :transition="props.transition"
      :keep-alive="keepAliveProps"
      :component-key="route.fullPath"
      done-progress
    >
    </me-component>
  </router-view>
</template>

<script setup lang="ts" name="layoutPage">
import { MeKeepAliveProps } from '@/components/meKeepAlive';
import { useRouteStore } from '@/store';
import { PropType, TransitionProps } from 'vue';
const props = defineProps({
  transition: Object as PropType<TransitionProps>,
});
const routeStore = useRouteStore();
const keepAliveProps = computed<MeKeepAliveProps>(() => ({
  max: 30,
  includeKey: [...routeStore.cacheFullPath],
  exclude: 'Redirect',
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
</script>
