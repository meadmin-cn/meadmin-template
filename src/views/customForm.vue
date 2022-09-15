<template>
  <div class="custom-form">
    <el-design-form></el-design-form>
  </div>
</template>

<script setup lang="ts">
import ElementPlus from 'element-plus';
import { ElDesignForm, ElGenerateForm } from 'vue-form-create';
console.log(getCurrentInstance()?.appContext.app.use(ElementPlus));
</script>
<style lang="scss" scoped>
.custom-form {
  width: 100%;
  height: 100%;
}
</style>
