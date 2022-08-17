<script setup lang="ts" name="redirect">
import { useRouteStore } from '@/store';
const route = useRoute();
const router = useRouter();
const fullPath = route.params.path as string;
const routeStore = useRouteStore();
if (routeStore.noCacheFullPath.includes(fullPath)) {
  router.replace(fullPath);
} else {
  routeStore.setNoCache(fullPath);
  onMounted(() => {
    routeStore.removeNoCache(fullPath);
    router.replace(fullPath);
  });
}
</script>
