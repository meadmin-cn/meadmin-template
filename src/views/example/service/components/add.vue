<template>
  <el-dialog v-model="show" @closed="$emit('closed')">
    <div>这是测试弹窗 <el-button @click="add()"> 再次打开弹窗 </el-button></div>
  </el-dialog>
</template>

<script setup lang="ts" name="Add">
import add from './add.js';
const show = defineModel<boolean>();
defineEmits<{ closed: [] }>();
</script>
