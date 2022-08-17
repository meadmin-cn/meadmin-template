<template>
  <el-container class="layout">
    <el-aside v-if="!globalStore.isMobile" width="max-content">
      <layout-menu></layout-menu>
    </el-aside>
    <el-container>
      <el-header v-show="themeConfig.fixedHeader" class="right-header" height="max-content">
        <layout-header></layout-header>
      </el-header>
      <el-main class="right-main">
        <el-scrollbar>
          <layout-header v-show="!themeConfig.fixedHeader"></layout-header>
          <layout-page></layout-page>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
  <el-drawer
    v-if="globalStore.isMobile"
    custom-class="me-sidebar-drawer"
    :model-value="!themeConfig.menuCollapse"
    :with-header="false"
    :size="themeConfig.menuWidth"
    direction="ltr"
    @close="() => (themeConfig.menuCollapse = true)"
  >
    <layout-menu></layout-menu>
  </el-drawer>
</template>
<script setup lang="ts" name="layout">
import LayoutHeader from './components/header/index.vue';
import LayoutMenu from './components/menu/index.vue';
import LayoutPage from './components/page.vue';
import { useSettingStore, useGlobalStore } from '@/store';
const { themeConfig } = useSettingStore();
const globalStore = useGlobalStore();
</script>
<style lang="scss" scoped>
.layout {
  height: 100%;

  .right-header {
    padding: 0;
  }

  .right-main {
    padding: 0;
    background-color: rgb(240, 242, 245);
  }
}

.dark {
  .layout {
    .right-main {
      background-color: var(--el-bg-color);
    }
  }
}

:global(.me-sidebar-drawer .el-drawer__body) {
  padding: 0;
}
</style>
