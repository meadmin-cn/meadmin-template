<template>
  <div class="title">M<span>e - Admin</span></div>
</template>

<script setup lang="ts" name="Title">
import { useSettingStore } from '@/store';
const { themeConfig } = storeToRefs(useSettingStore());
</script>
<style lang="scss" scoped>
.title {
  height: $header-top-height;
  line-height: $header-top-height;
  font-weight: bold;
  padding: 0 12px;
  font-size: 1.25em;
  word-break: break-all;
  overflow-y: hidden;
  background-color: inherit;
  width: v-bind('themeConfig.menuWidth');
}
</style>
