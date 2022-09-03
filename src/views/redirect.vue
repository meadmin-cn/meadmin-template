<template>
  <span></span>
</template>
<script setup lang="ts" name="redirect">
import { useRouteStore } from '@/store';
const route = useRoute();
const router = useRouter();
const fullPath = route.params.path as string;
const routeStore = useRouteStore();
routeStore.cacheFullPath.delete(fullPath);
router.replace(fullPath);
</script>
