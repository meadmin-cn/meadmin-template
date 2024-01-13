<template>
  <div class="layout-header">
    <top-bar v-if="themeConfig.topBar"></top-bar>
  </div>
</template>
<script setup lang="ts" name="LayoutHeader">
import { useSettingStore } from '@/store';
import TopBar from './components/topBar/index.vue';
const { themeConfig } = storeToRefs(useSettingStore());
</script>
<style lang="scss" scoped>
.layout-header {
  background-color: var(--el-bg-color);
}
</style>
