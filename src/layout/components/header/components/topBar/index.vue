<template>
  <div class="top-bar">
    <Left></Left>
    <Right></Right>
  </div>
</template>

<script setup lang="ts" name="TopBar">
import Left from './components/left.vue';
import Right from './components/right/index.vue';
</script>
<style lang="scss" scoped>
.top-bar {
  height: $header-top-height;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--el-border-color);
}
</style>
