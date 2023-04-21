<template>
  <div class="test">
    <div>modelValue: {{ JSON.stringify(modelValue) }}</div>
    <div>value: {{ JSON.stringify(value) }}</div>
    <el-button @click="a2(1)"> 内层设置 a.a1.a2 = 1</el-button>
    <el-button @click="a2(2)"> 内层设置 a.a1.a2 = 2</el-button>
    <el-button @click="b1(11)"> 内层设置 a.b1 = 11</el-button>
    <el-button @click="b1(22)"> 内层设置 a.b1 = 22</el-button>
    <el-button @click="b(111)"> 内层设置 b = 111</el-button>
    <el-button @click="b(122)"> 内层设置 b = 222</el-button>
    <div>a.a1.a2 :<el-input v-model="value.a.a1.a2"></el-input></div>
  </div>
</template>

<script setup lang="ts" name="Test">
import { computedModel } from '@/hooks';
const props = defineProps<{
  modelValue: Record<string, any>;
}>();
const emit = defineEmits<{ (e: 'update:modelValue', value: Record<string, any>): void }>();
const value = computedModel(
  () => props.modelValue,
  (value) => emit('update:modelValue', value),
);
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

<style lang="scss" scoped>
.test {
}
</style>
