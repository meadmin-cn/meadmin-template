<template>
  <div class="me-setting pointer" @click="setting.showSettingMenu = true">
    <mel-icon-setting class="icon"></mel-icon-setting>
  </div>
</template>
<script setup lang="ts" name="MeSetting">
import { useSettingStore } from '@/store';
let setting = useSettingStore();
</script>
<style lang="scss" scoped>
.me-setting {
  padding: 0 10px;
  display: flex;
  align-items: center;

  .icon {
    font-size: 1.2em;
  }
}
</style>
