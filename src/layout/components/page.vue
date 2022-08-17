hu
<template>
  <div class="main">
    <router-view v-slot="{ Component, route }">
      <me-component :is="Component" :keep-alive="keepAliveProps" :component-key="route.fullPath" doneProgress>
      </me-component>
    </router-view>
  </div>
</template>

<script setup lang="ts" name="layoutPage">
import { MeKeepAliveProps } from '@/components/meKeepAlive';
import { useRouteStore } from '@/store';
const routeStore = useRouteStore();
const keepAliveProps = reactive<MeKeepAliveProps>({
  max: 30,
  excludeKey: routeStore.noCacheFullPath,
  exclude: 'redirect',
});
const route = useRoute();
watch(route, () => {
  if (route.meta.noCache) {
    routeStore.setNoCache(route.fullPath);
  }
});
</script>
<style lang="scss" scoped>
.main {
  padding: 1rem;
}
</style>
