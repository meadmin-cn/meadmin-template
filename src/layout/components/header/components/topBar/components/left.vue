<template>
  <el-space class="left">
    <div></div>
    <mel-icon-expand v-if="themeConfig.menuCollapse" class="fold-expand pointer" @click="setMenuCollapse">
    </mel-icon-expand>
    <mel-icon-fold v-else class="fold-expand pointer" @click="setMenuCollapse"></mel-icon-fold>
    <el-scrollbar
      v-if="!globalStore.isMobile && themeConfig.breadcrumb"
      :min-size="10"
      wrap-style="display:flex;align-items:center"
    >
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="(item, index) in breadcrumbList"
          :key="index"
          :to="index === breadcrumbList.length - 1 ? undefined : item"
          >{{ $t(item.meta!.title!) }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </el-scrollbar>
  </el-space>
</template>
<script setup lang="ts" name="left">
import { mitter, event } from '@/event';
import { useSettingStore, useGlobalStore } from '@/store';
import { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
const { themeConfig } = useSettingStore();
const globalStore = useGlobalStore();
const setMenuCollapse = () => {
  themeConfig.menuCollapse = !themeConfig.menuCollapse;
};
const breadcrumbList = ref([] as RouteRecordRaw[]);
const route = useRoute();
const setBreadcrumbList = (route: RouteLocationNormalized) => {
  breadcrumbList.value = route.matched.filter((item) => item.meta && item.meta.title && item.meta.breadcrumb !== false);
};
setBreadcrumbList(route);
mitter.on(event.BEFORE_ROUTE_CHANGE, ({ to }) => setBreadcrumbList(to), true);
</script>
<style lang="scss" scoped>
.left {
  height: 100%;

  .fold-expand {
    font-size: 1.55rem;
  }

  &:deep(.el-breadcrumb__inner.is-link) {
    font-weight: normal;
  }

  &:deep(.el-space__item:nth-child(3)) {
    height: 80%;
  }
}
</style>
