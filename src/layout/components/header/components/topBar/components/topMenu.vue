<template>
  <div style="position: relative; height: 100%">
    <el-menu class="top-menu" :default-active="activeMenu" mode="horizontal">
      <layout-menu-item
        v-for="item in menus"
        :key="item.path"
        :no-child="true"
        :item="item"
        :collapse="themeConfig.menuCollapse"
      />
    </el-menu>
  </div>
</template>

<script setup lang="ts" name="TopMenu">
import { useRouteStore, useSettingStore } from '@/store';
const { themeConfig } = storeToRefs(useSettingStore());
const routeStore = useRouteStore();
const route = useRoute();
const menus = computed(() => {
  return routeStore.routes.filter((item) => {
    return item.meta && !item.meta.hideMenu && item.meta.title;
  });
});
const activeMenu = computed(() => {
  return route.meta.menuIndex?.[0] + '';
});
</script>
<style lang="scss" scoped>
.top-menu {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  right: 0;
  border-bottom: 0;
  --el-menu-item-height: #{$header-top-height};
}
</style>
