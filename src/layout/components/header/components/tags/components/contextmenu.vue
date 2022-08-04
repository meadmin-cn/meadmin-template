<template>
    <el-popover :popper-class="`me-contextmenu-tooltip ${elNamespace}-dropdown__popper`" :visible="visible" :virtual-ref="virtualRef"
        virtual-triggering  pure>
            <ul :class="`${elNamespace}-dropdown-menu ${elNamespace}-dropdown-menu--default`" v-bind="$attrs"
                style="outline: none;" v-click-outside="closeMenu" role="menuitem">
                <li :class="`${elNamespace}-dropdown-menu__item`">
                    <el-icon-refresh /> 重新加载
                </li>
                <li @click="closeCurrent()"
                    :class="{ [`${elNamespace}-dropdown-menu__item`]: true, 'is-disabled': current.meta.affix || modelValue.length == 1 }">
                    <el-icon-close /> 关闭当前
                </li>
                <li @click="closeLeft()"
                    :class="{ [`${elNamespace}-dropdown-menu__item`]: true, 'is-disabled': index <= canCloseFirst }">
                    <el-icon-download style="transform: rotate(90deg);" />关闭左侧
                </li>
                <li @click="closeRight()"
                    :class="{ [`${elNamespace}-dropdown-menu__item`]: true, 'is-disabled': modelValue.length === index + 1 }">
                    <el-icon-download style="transform: rotate(270deg);" />关闭右侧
                </li>
                <li @click="closeOther()"
                    :class="{ [`${elNamespace}-dropdown-menu__item`]: true, 'is-disabled': index <= canCloseFirst && modelValue.length === index + 1 }">
                    <el-icon-document-delete /> 关闭其他
                </li>
                <li @click="closeAll()"
                    :class="{ [`${elNamespace}-dropdown-menu__item`]: true, 'is-disabled': canCloseFirst === Infinity }">
                    <el-icon-minus /> 关闭全部
                </li>
            </ul>
    </el-popover>
</template>
<script setup lang="ts" name="contextmenu">
import { PropType } from 'vue';
import { RouteLocationNormalized } from 'vue-router';
import { Trigger, useGlobalConfig } from 'element-plus';
import { useSettingStore } from '@/store';
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
    visible: {
        type: Boolean,
        default: true,
    }
});
const emit = defineEmits(['update:modelValue', 'update:visible']);
const elNamespace = useGlobalConfig('namespace');
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
    closeMenu();
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
    closeMenu();

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
    closeMenu();
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
    closeMenu();
}
const closeMenu = () => {
    emit('update:visible', false);
}
</script>
<style lang="scss">
@use 'element-plus/theme-chalk/src/mixins/function.scss' as *;
@use 'element-plus/theme-chalk/src/mixins/config.scss' as *;

.me-contextmenu-tooltip {
    width:max-content !important;
    min-width: unset !important;
    .#{$namespace}-dropdown-menu__item:not(.is-disabled):hover {
        background-color: getCssVar('dropdown-menuItem', 'hover-fill');
        color: getCssVar('dropdown-menuItem', 'hover-color');
    }

}
</style>