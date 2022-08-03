<template>
    <el-tooltip popper-class="me-contextmenu-tooltip" :visible="visible"   
    :virtual-ref="virtualRef" virtual-triggering :effect="'light'" :trigger="trigger">
        <template #content>
            <ul class="el-dropdown-menu el-dropdown-menu--default" v-bind="$attrs"  ref="popperPaneRef" style="outline: none;" v-click-outside:[popperPaneRef]="handleClose">
                <li class="el-dropdown-menu__item">
                    <el-icon-refresh /> 重新加载
                </li>
            </ul>
        </template>
    </el-tooltip>
</template>
<script setup lang="ts" name="contextmenu">
import { PropType } from 'vue';
import { RouteLocationNormalized } from 'vue-router';
import { Trigger } from 'element-plus';
const props = defineProps({
    modelValue: {
        required: true,
        type: Array as PropType<RouteLocationNormalized[]>
    },
    current: {
        required: true,
        type: Object as PropType<RouteLocationNormalized>
    },
    virtualRef: {
        required: true,
        type: Object as PropType<HTMLElement>
    },
    trigger: {
        type: [String,Array] as PropType<Trigger | Trigger[]>,
        default:'contextmenu',
    },
    visible:{
        type: Boolean,
        default:true,
    }
});
const emit = defineEmits(['update:modelValue','update:visible']);
const router = useRouter();
const route = useRoute();
let index = computed(() => props.modelValue.indexOf(props.current));
let canCloseFirst = computed(() => {
    const index = props.modelValue.findIndex(item => !item.meta.affix);
    return index > -1 ? index : Infinity;
});
const closeCurrent = () => { //关闭当前
    if (props.modelValue.length === 0 || props.current.meta.affix) {
        return;
    }
    const nowIndex = index.value;
    props.modelValue.splice(index.value, 1)
    if (props.current.fullPath === route.fullPath) {
        router.push(props.modelValue[Math.min(props.modelValue.length - 1, nowIndex)].fullPath)
    }
}
const closeLeft = () => {//关闭左侧
    if (index.value <= canCloseFirst.value) {
        return;
    }
    props.modelValue.splice(canCloseFirst.value, index.value - canCloseFirst.value)
    emit('update:modelValue', props.modelValue);
    if (props.modelValue.findIndex(item => item.fullPath === route.fullPath) === -1) {
        router.push(props.modelValue[index.value].fullPath);
    }
}
const closeRight = () => {//关闭右侧
    if (index.value + 1 === props.modelValue.length) {
        return;
    }
    props.modelValue.splice(index.value + 1);
    emit('update:modelValue', props.modelValue);
    if (props.modelValue.findIndex(item => item.fullPath === route.fullPath) === -1) {
        router.push(props.modelValue[index.value].fullPath);
    }
}
const closeOther = () => {//关闭其他
    closeLeft();
    closeRight();
}
const closeAll = () => {//关闭全部
    if (canCloseFirst.value === Infinity) {
        return;
    }
    props.modelValue.splice(canCloseFirst.value)
    emit('update:modelValue', props.modelValue);
    if (props.modelValue.findIndex(item => item.fullPath === route.fullPath) === -1) {
        router.push(props.modelValue[props.modelValue.length - 1].fullPath);
    }
}
const handleClose = ()=>{
    
}
</script>
<style scoped>
:deep(.me-contextmenu-tooltip){
    padding: 0 !important;
}
</style>