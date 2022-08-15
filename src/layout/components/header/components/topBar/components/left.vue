<template>
  <el-space class="left">
    <div></div>
    <mel-icon-expand
      class="fold-expand pointer"
      @click="setMenuCollapse()"
      v-if="themeConfig.menuCollapse"
    >
    </mel-icon-expand>
    <mel-icon-fold
      class="fold-expand pointer"
      @click="setMenuCollapse()"
      v-else
    ></mel-icon-fold>
    <el-scrollbar
      :min-size="10"
      wrap-style="display:flex;align-items:center"
      v-if="!globalStore.isMobile && themeConfig.breadcrumb"
    >
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          :to="index === breadcrumbList.length - 1 ? undefined : item"
          v-for="(item, index) in breadcrumbList"
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
    breadcrumbList.value = route.matched.filter(
      (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
    );
  };
  setBreadcrumbList(route);
  mitter.on(event.beforeRouteChange, ({ to }) => setBreadcrumbList(to), true);
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
