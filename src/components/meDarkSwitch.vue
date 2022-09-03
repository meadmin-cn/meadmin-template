<template>
  <div :class="{ 'el-switch': true, 'is-checked': setting.isDark }" @click="setting.isDark = !setting.isDark">
    <span class="el-switch__core">
      <div class="el-switch__action">
        <me-icon-sunny v-show="!setting.isDark" class="icon"></me-icon-sunny>
        <me-icon-moon v-show="setting.isDark" class="icon"></me-icon-moon>
      </div>
    </span>
  </div>
</template>
<script setup lang="ts" name="MeDarkSwitch">
import { useSettingStore } from '@/store';
const setting = useSettingStore();
</script>
<style lang="scss" scoped>
.el-switch {
  margin: 0 10px;

  .el-switch__core {
    border-color: var(--el-switch-off-color) !important;
    background-color: var(--el-switch-off-color) !important;

    .el-switch__action {
      background-color: var(--el-bg-color);
      position: relative;
      color: var(--el-text-color-primary) !important;

      .icon {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
