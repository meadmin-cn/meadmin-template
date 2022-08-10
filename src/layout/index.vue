<template>
    <el-container class="layout">
        <el-aside width="max-content" v-if="!globalStore.isMobile">
            <layout-sidebar></layout-sidebar>
        </el-aside>
        <el-container>
            <el-header height="max-content">
                <layout-navbar></layout-navbar>
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
    <el-drawer custom-class="me-sidebar-drawer" :model-value="!settingStore.menuCollapse" :with-header="false"
        size="200px" direction="ltr" v-if="globalStore.isMobile" @close="() => settingStore.menuCollapse = true">
        <layout-sidebar></layout-sidebar>
    </el-drawer>
</template>
<script setup lang="ts" name="layout">
import layoutSidebar from './components/sidebar/index.vue';
import layoutNavbar from './components/navbar/index.vue';
import { useRouteStore, useSettingStore, useGlobalStore } from '@/store';
import { MeKeepAliveProps } from '@/components/meKeepAlive';
const settingStore = useSettingStore();
const routeStore = useRouteStore();
const globalStore = useGlobalStore();
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

:global(.me-sidebar-drawer .el-drawer__body) {
    padding: 0;
}
</style>