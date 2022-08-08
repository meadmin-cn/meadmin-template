<template>
    <el-space class="left">
        <div></div>
        <el-icon-expand class="fold-expand pointer" @click="setMenuCollapse()" v-if="settingStore.menuCollapse">
        </el-icon-expand>
        <el-icon-fold class="fold-expand pointer" @click="setMenuCollapse()" v-else></el-icon-fold>
        <el-scrollbar :min-size="10" wrap-style="display:flex;align-items:center" v-if="!globalStore.isMobile">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="index === breadcrumbList.length - 1 ? undefined : item"
                    v-for="(item, index) in breadcrumbList">{{ item.meta!.title }}</el-breadcrumb-item>
            </el-breadcrumb>
        </el-scrollbar>
    </el-space>
</template>
<script setup lang="ts" name="left">
import { useSettingStore, useGlobalStore } from '@/store';
import { RouteRecordRaw } from 'vue-router';
const settingStore = useSettingStore();
const globalStore = useGlobalStore();
const setMenuCollapse = () => { settingStore.menuCollapse = !settingStore.menuCollapse };
const breadcrumbList = ref([] as RouteRecordRaw[]);
const route = useRoute();
watch(route, (route) => {
    breadcrumbList.value = route.matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
}, { immediate: true });
</script>
<style lang="scss" scoped>
@use 'element-plus/theme-chalk/src/mixins/config.scss' as *;

.left {
    height: 100%;

    .fold-expand {
        font-size: 1.55rem;
    }

    &:deep(.#{$namespace}-breadcrumb__inner.is-link) {
        font-weight: normal;
    }

    &:deep(.#{$namespace}-space__item:nth-child(3)) {
        height: 80%;
    }
}
</style>