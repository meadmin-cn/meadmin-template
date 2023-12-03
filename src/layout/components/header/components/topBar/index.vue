<template>
  <div class="top-bar">
    <Title v-if="menuType === 'top'"></Title>
    <Left v-else></Left>
    <top-menu v-if="menuType === 'top'" class="menu"></top-menu>
    <Right></Right>
  </div>
</template>

<script setup lang="ts" name="TopBar">
import { useSettingStore } from '@/store';
import Left from './components/left.vue';
import Right from './components/right/index.vue';
import TopMenu from './components/topMenu.vue';
import Title from '@/layout/components/title.vue';
const { menuType } = storeToRefs(useSettingStore());
</script>
<style lang="scss" scoped>
.top-bar {
  height: $header-top-height;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--el-border-color);
  overflow: hidden;
  .menu {
    flex: 1;
  }
}
</style>
