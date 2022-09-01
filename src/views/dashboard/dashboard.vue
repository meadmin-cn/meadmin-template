<template>
  <div class="dashboard">
    <total-panel></total-panel>
    <charts></charts>
  </div>
</template>

<script setup lang="ts">
import TotalPanel from './components/totalPanel.vue';
import Charts from './components/charts.vue';
</script>
<style lang="scss" scoped>
.dashboard {
}
</style>
