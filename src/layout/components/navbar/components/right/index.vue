<template>
  <el-space class="right">
    <div></div>
    <me-dark-switch class="item no-hover"></me-dark-switch>
    <message-box class="item"></message-box>
    <me-locale-select class="item"></me-locale-select>
    <me-size-select class="item"></me-size-select>
    <el-space class="item pointer">
      <el-avatar size="small" src="" />
      admin
    </el-space>
  </el-space>
</template>
<script setup lang="ts" name="right">
import MeDarkSwitch from "@/components/meDarkSwitch.vue";
import MeLocaleSelect from "@/components/meLocaleSelect.vue";
import MeSizeSelect from "@/components/meSizeSelect.vue";
import MessageBox from "./components/messageBox.vue";


</script>
<style lang="scss" scoped>
@use 'element-plus/theme-chalk/src/mixins/function.scss' as *;

.right {
  font-size: 1rem;
  height: 100%;

  .item {
    height: 100%;
  }

  .item:hover {
    background-color: getCssVar('bg-color', 'page');
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