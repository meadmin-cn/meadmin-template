<template>
<el-button  v-bind="omit(attrs,'onClick', 'loading')" :ref="changeRef"  :loading="loading" @click="handleClick">
   <template v-for="(_, name) in $slots" #[name]="data">
      <slot :name="name" v-bind="data || {}"></slot>
    </template>
</el-button>
</template>

<script setup lang="ts" name="MeButton">
import { ButtonInstance } from 'element-plus';
import { omit } from 'lodash-es';
import { ComponentPublicInstance } from 'vue';

const loading = ref(false);
const attrs = useAttrs();
defineOptions({inheritAttrs:false});
async function handleClick(event:MouseEvent) {
  loading.value = true;
  try{
    await (attrs.onClick as (...args:any[])=>any)?.(event);
  }finally{
    loading.value = false;
  }
}
const vm = getCurrentInstance();
function changeRef(ref: Element | ComponentPublicInstance | null){
  if(vm){
    //暴露elButton属性
    vm.exposed = ref;
  }
}
//声明类型
defineExpose({} as ButtonInstance);
</script>
