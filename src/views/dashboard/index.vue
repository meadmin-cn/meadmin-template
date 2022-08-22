<template>
  <div class="index">
    hello word!
    <input v-model="value" name="text" />
  </div>
</template>
<script setup lang="ts" name="Dashboard">
const value = ref('');
</script>

<style lang="scss" scoped>
.index {
}
</style>
