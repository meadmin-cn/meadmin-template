<template>
<el-container class="layout">
    <el-aside width="200px">
        <layout-menu></layout-menu>
    </el-aside>
    <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    </el-container>
</el-container>
</template>
<script setup lang="ts" name="layout">
import LayoutMenu from './components/menu/index.vue';


</script>
<style lang="scss" scoped>
.layout{
    height: 100%;
}
</style>