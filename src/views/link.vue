<template>
  <div class="link"></div>
</template>
<script setup lang="ts" name="link">
  const route = useRoute();
  window.location.href = route.fullPath;
</script>
<style lang="scss" scoped>
  .link {
  }
</style>
