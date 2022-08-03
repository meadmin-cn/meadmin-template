<template>
<el-container class="layout">
    <el-aside width="max-content">
        <layout-sidebar></layout-sidebar>
    </el-aside>
    <el-container>
    <el-header height="max-content">
        <layout-header></layout-header>
    </el-header>
    <el-main >
        <el-scrollbar>
            <div style="height: 1000px;background-color: var(--el-bg-color-page);" >
                <router-view v-slot="{ Component, route }">
                    <me-component :keep-alive="keepAliveProps" :is="Component" :component-key="route.fullPath"></me-component>
                </router-view>
            </div>
        </el-scrollbar>
    </el-main>
    </el-container>
</el-container>
</template>
<script setup lang="ts" name="layout">
import layoutSidebar from './components/sidebar/index.vue';
import layoutHeader from './components/header/index.vue';
import meComponent from '@/components/meComponent.vue';
import { KeepAliveProps } from 'vue';
const keepAliveProps = reactive<KeepAliveProps>({
    max:30,
    includeKeys:[]
});
const route = useRoute();
watch(route,()=>{
    if(!keepAliveProps.includeKeys!.includes(route.fullPath)){
        keepAliveProps.includeKeys!.push(route.fullPath);
    }
})


</script>
<style lang="scss" scoped>
@use 'element-plus/theme-chalk/src/mixins/config.scss' as *;

.layout{
    height: 100%;
    :deep(.#{$namespace}-header){
        padding: 0;
    }
    :deep(.#{$namespace}-main){
        padding: 0;
    }
}
</style>