<template>
  <div class="index">
    hello word!
    <input name="text" v-model="value" />
  </div>
</template>
<script setup lang="ts" name="Dashboard">
  const value=ref('')
</script>

<style lang="scss" scoped>
.index {
}
</style>
