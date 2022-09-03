<template>
  <div class="right">
    <div></div>
    <me-dark-switch v-if="themeConfig.showDark" class="item no-hover"></me-dark-switch>
    <me-locale-select v-if="localeConfig.localeList.length > 1" class="item"></me-locale-select>
    <me-size-select v-if="themeConfig.showSize" class="item"></me-size-select>
    <message-box class="item"></message-box>
    <user class="item"></user>
    <me-setting v-if="themeConfig.showSetting" class="item"></me-setting>
  </div>
</template>
<script setup lang="ts" name="Right">
import { localeConfig } from '@/config';
import MeDarkSwitch from '@/components/meDarkSwitch.vue';
import MeLocaleSelect from '@/components/meLocaleSelect.vue';
import MeSizeSelect from '@/components/meSizeSelect.vue';
import MessageBox from './components/messageBox.vue';
import { useSettingStore } from '@/store';
import User from './components/user.vue';
const { themeConfig } = useSettingStore();
</script>
<style lang="scss" scoped>
.right {
  font-size: 14px;
  height: 100%;
  display: flex;

  .item {
    height: 100%;
  }

  .item:hover {
    background-color: var(--el-fill-color);
  }

  .no-hover:hover {
    background-color: unset;
  }

  &:deep(.el-space__item) {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
