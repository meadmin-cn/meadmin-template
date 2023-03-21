<template>
  <el-dropdown class="me-size-select" trigger="click" max-height="500px">
    <div class="flex-center pointer">
      <me-icon-size class="icon"></me-icon-size>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in SizeEnum"
          :key="item"
          :disabled="themeConfig.size === item"
          @click="themeConfig.size = item"
          >{{ $t(item) }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts" name="MeSizeSelect">
import { SizeEnum } from '@/dict/configEnum';
import { useSettingStore } from '@/store';
const { themeConfig } = storeToRefs(useSettingStore());
</script>
<style lang="scss" scoped>
.me-size-select {
  .flex-center {
    padding: 0 10px;

    .icon {
      font-size: 1.3em;
    }
  }
}
</style>
