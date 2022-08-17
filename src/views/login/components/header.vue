<template>
  <div class="header">
    <me-dark-switch v-if="themeConfig.showDark"></me-dark-switch>
    <me-size-select v-if="themeConfig.showSize"></me-size-select>
    <me-locale-select v-if="localeConfig.localeList.length > 1"></me-locale-select>
  </div>
</template>
<script setup lang="ts" name="Header">
import { localeConfig } from '@/config';
import { useSettingStore } from '@/store';
const { themeConfig } = useSettingStore();
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 12px;
}
</style>
