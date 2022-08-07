<template>
    <el-container class="layout">
        <el-aside width="max-content">
            <layout-sidebar></layout-sidebar>
        </el-aside>
        <el-container>
            <el-header height="max-content">
                <layout-header></layout-header>
            </el-header>
            <el-main>
                <el-scrollbar>
                    <div style="height: 1000px;background-color: var(--el-bg-color-page);">
                        <router-view v-slot="{ Component, route }">
                            <me-component :keep-alive="keepAliveProps" :is="Component" :component-key="route.fullPath"
                                doneProgress></me-component>
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
import { useRouteStore } from '@/store';
import { MeKeepAliveProps } from '@/components/meKeepAlive';
const routeStore = useRouteStore();
const keepAliveProps = reactive<MeKeepAliveProps>({
    max: 30,
    excludeKey: routeStore.noCacheFullPath,
    exclude: 'redirect'
});
const route = useRoute();
watch(route, () => {
    if (route.meta.noCache) {
        routeStore.setNoCache(route.fullPath);
    }
})


</script>
<style lang="scss" scoped>
@use 'element-plus/theme-chalk/src/mixins/config.scss' as *;

.layout {
    height: 100%;

    :deep(.#{$namespace}-header) {
        padding: 0;
    }

    :deep(.#{$namespace}-main) {
        padding: 0;
    }
}
</style>