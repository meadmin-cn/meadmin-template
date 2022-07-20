<template>
    <el-space class="left">
        <div></div>
        <el-icon-expand class="fold-expand pointer" @click="setMenuCollapse()" v-if="settingStore.menuCollapse"></el-icon-expand>
        <el-icon-fold class="fold-expand pointer" @click="setMenuCollapse()" v-else></el-icon-fold>
        <el-scrollbar :min-size="10" wrap-style="display:flex;align-items:center">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                <el-breadcrumb-item>promotion management></el-breadcrumb-item>
                <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
            </el-breadcrumb>
        </el-scrollbar>
    </el-space>
</template>
<script setup lang="ts" name="left">
import { useSettingStore } from '@/store';
const settingStore = useSettingStore();
const setMenuCollapse = ()=>{settingStore.menuCollapse = !settingStore.menuCollapse};

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