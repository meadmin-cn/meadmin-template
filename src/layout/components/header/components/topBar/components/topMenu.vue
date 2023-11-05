<template>
  <el-menu class="menu" :default-active="activeMenu" mode="horizontal">
    <layout-menu-item
      v-for="item in menus"
      :key="item.path"
      :no-child="true"
      :item="item"
      :collapse="themeConfig.menuCollapse"
    />
  </el-menu>
</template>

<script setup lang="ts" name="TopMenu">
const { themeConfig } = storeToRefs(useSettingStore());
import { useRouteStore, useSettingStore } from '@/store';
const routeStore = useRouteStore();
const route = useRoute();
const menus = computed(() => {
  return routeStore.routes; //.map(item=>Object.assign({},item,{children:[]}));
});
const activeMenu = computed(() => {
  return route.meta.menuIndex?.[0] + '';
});
</script>
<style lang="scss" scoped>
.top-menu {
}
</style>
