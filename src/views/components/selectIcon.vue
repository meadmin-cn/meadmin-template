<template>
  <div class="icon-select">
    <el-form-item label="选择图标" prop="icon">
      <me-icon-select v-model="icon"></me-icon-select>
    </el-form-item>
  </div>
</template>

<script setup lang="ts" name="IconSelect">
const icon = ref("");
</script>
<style lang="scss" scoped>
.icon-select {
}
</style>
