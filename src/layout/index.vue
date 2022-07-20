<template>
<el-container class="layout">
    <el-aside width="max-content">
        <layout-menu></layout-menu>
    </el-aside>
    <el-container>
    <el-header height="max-content">
        <layout-header></layout-header>
    </el-header>
    <el-main >
        <el-scrollbar>
            <div style="height: 1000px;background-color: blueviolet;" ></div>
        </el-scrollbar>
    </el-main>
    </el-container>
</el-container>
</template>
<script setup lang="ts" name="layout">
import LayoutMenu from './components/menu/index.vue';
import LayoutHeader from './components/header/index.vue';


</script>
<style lang="scss" scoped>
@use 'element-plus/theme-chalk/src/mixins/config.scss' as *;

.layout{
    height: 100%;
    &:deep(.#{$namespace}-header){
        padding: 0;
    }
    &:deep(.#{$namespace}-main){
        padding: 0;
    }
}
</style>