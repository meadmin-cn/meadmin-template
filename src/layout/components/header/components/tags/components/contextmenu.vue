<template>
    <el-dropdown-menu v-bind="$attrs">
        <el-dropdown-item>
            <el-icon-refresh /> 重新加载
        </el-dropdown-item>
        <el-dropdown-item @click="closeCurrent()" :disabled="current.meta.affix || modelValue.length == 1">
            <el-icon-close /> 关闭当前
        </el-dropdown-item>
        <el-dropdown-item @click="closeLeft()" :disabled="index <= canCloseFirst" divided>
            <el-icon-download style="transform: rotate(90deg);" />关闭左侧
        </el-dropdown-item>
        <el-dropdown-item @click="closeRight()" :disabled="modelValue.length === index+1">
            <el-icon-download style="transform: rotate(270deg);" />关闭右侧
        </el-dropdown-item>
        <el-dropdown-item @click="closeOther()" :disabled="index <= canCloseFirst && modelValue.length === index+1" divided>
            <el-icon-document-delete /> 关闭其他
        </el-dropdown-item>
        <el-dropdown-item @click="closeAll()" :disabled="canCloseFirst === Infinity">
            <el-icon-minus /> 关闭全部
        </el-dropdown-item>
    </el-dropdown-menu>
</template>
<script setup lang="ts" name="contextmenu">
import { PropType } from 'vue';
import { RouteLocationNormalized } from 'vue-router';
const props = defineProps({
    modelValue: {
        required: true,
        type: Array as PropType<RouteLocationNormalized[]>
    },
    current: {
        required: true,
        type: Object as PropType<RouteLocationNormalized>
    }
});
const emit = defineEmits(['update:modelValue']);
const router = useRouter();
const route = useRoute();
let index = computed(() => props.modelValue.indexOf(props.current));
let canCloseFirst = computed(()=>{
    const index =  props.modelValue.findIndex(item=>!item.meta.affix);
    return index > -1?index:Infinity;
}); 
const closeCurrent = () => { //关闭当前
    if (props.modelValue.length === 0 || props.current.meta.affix) {
        return;
    }
    props.modelValue.splice(index.value, 1)
    emit('update:modelValue', props.modelValue);
    if (props.current.fullPath === route.fullPath) {
        router.push(props.modelValue[Math.min(props.modelValue.length - 1, index.value)].fullPath)
    }
}
const closeLeft = () => {//关闭左侧
    if (index.value <= canCloseFirst.value){
        return;
    }
    props.modelValue.splice(canCloseFirst.value, index.value - canCloseFirst.value)
    emit('update:modelValue', props.modelValue);
    if(props.modelValue.findIndex(item=>item.fullPath === route.fullPath) === -1){
         router.push(props.modelValue[index.value].fullPath);
    }
}
const closeRight = () => {//关闭左侧
    if (index.value+1 === props.modelValue.length){
        return;
    }
    props.modelValue.splice(index.value+1);
    emit('update:modelValue', props.modelValue);
    if(props.modelValue.findIndex(item=>item.fullPath === route.fullPath) === -1){
         router.push(props.modelValue[index.value].fullPath);
    }
}
const closeOther = ()=>{//关闭其他
    closeLeft();
    closeRight();
}
const closeAll = ()=>{//关闭全部
    if(canCloseFirst.value === Infinity){
        return;
    }
    props.modelValue.splice(canCloseFirst.value)
    emit('update:modelValue', props.modelValue);
    if(props.modelValue.findIndex(item=>item.fullPath === route.fullPath) === -1){
         router.push(props.modelValue[props.modelValue.length - 1].fullPath);
    }
}

</script>