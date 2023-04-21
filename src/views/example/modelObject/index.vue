<template>
  <div>
    <div>对组件v-model 绑定对象结构props进行proxy代理映射，进行深copy并调用update emit更新</div>
    <div class="index">外层 value值 {{ JSON.stringify(value) }}</div>
    <el-button @click="a2(7)"> 外层设置 a.a1.a2 = 7</el-button>
    <el-button @click="a2(8)"> 外层设置 a.a1.a2 = 8</el-button>
    <el-button @click="b1(77)"> 外层设置 a.b1 = 77</el-button>
    <el-button @click="b1(88)"> 外层设置 a.b1 = 88</el-button>
    <el-button @click="b(777)"> 外层设置 b = 777</el-button>
    <el-button @click="b(888)"> 外层设置 b = 888</el-button>
    <test-model v-model="value"></test-model>
  </div>
</template>

<script setup lang="ts" name="Test">
import TestModel from './components/testModel.vue';
const value = ref({
  a: { a1: { a2: 3 }, b1: 3 },
  b: 1,
});
const a2 = (v: number) => {
  value.value.a.a1.a2 = v;
};
const b1 = (v: number) => {
  value.value.a.b1 = v;
};
const b = (v: number) => {
  value.value.b = v;
};
</script>
