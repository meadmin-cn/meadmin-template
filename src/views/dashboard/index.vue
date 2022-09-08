<template>
  <div class="index">
    hello word!
    <input v-model="value" name="text" />
  </div>
</template>
<script setup lang="ts" name="DashboardIndex">
const value = ref('');
const fullPath = useRoute().fullPath;
onActivated(() => {
  console.log('active', fullPath);
});
onDeactivated(() => {
  console.log('deactivated', fullPath);
});
</script>
