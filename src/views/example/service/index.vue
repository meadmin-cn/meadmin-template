<template>
  <div class="index">
    点击按钮，将以函数调用方式打开组件，函数调用组件会渲染到body中。 设计成动态组件方式而非vnode方式是因为vnode插入方式脱离当前app根组件，无法使用vue-deetools调试
    <br />
    <el-button @click="add()"> 以函数方式打开弹窗</el-button>
  </div>
</template>

<script setup lang="ts" name="Index">
import add from './components/add';
</script>
