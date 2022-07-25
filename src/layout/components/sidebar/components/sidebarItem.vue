<template>
    <template v-if="item.meta && !item.meta.hideMenu">
        <template
            v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild!.children || onlyOneChild!.noShowingChildren) && !item.alwaysShow">
            <router-link v-if="onlyOneChild!.meta" :to="resolvePath(onlyOneChild!.path)">
                <el-menu-item :index="resolvePath(onlyOneChild!.path)" :title="onlyOneChild!.meta.title">
                    <component :is="onlyOneChild!.meta.icon" v-if="onlyOneChild!.meta.icon" />
                    <template #title>
                        <span class="menu">{{ onlyOneChild!.meta.title }}</span>
                    </template>
                </el-menu-item>
            </router-link>
        </template>
        <el-sub-menu v-else :index="resolvePath(item.path)">
            <template v-if="item.meta" #title>
                <component :is="item.meta.icon" v-if="item.meta.icon" />
                <span class="menu">{{ item.meta.title }}</span>
            </template>
            <sidebar-item v-for="child in item.children" :key="child.path" :item="child"
                :base-path="resolvePath(child.path)"></sidebar-item>
        </el-sub-menu>
    </template>
</template>

<script setup lang="ts" name="sidebarItem">
import { isExternal } from '@/utils/validate';
import { resolve } from 'path-browserify';
import { PropType } from 'vue';
import { RouteRecordRaw } from 'vue-router';

const props = defineProps({
    item: {
        type: Object as PropType<RouteRecordRaw>,
        required: true
    },
    basePath: {
        type: String,
        default: ''
    }
});
let onlyOneChild = ref<RouteRecordRaw>()
const hasOneShowingChild = (children = [] as RouteRecordRaw[], parent: RouteRecordRaw) => {
    const showingChildren = children.filter(item => item.meta && !item.meta.hideMenu);
    if (showingChildren.length === 1) {
        onlyOneChild.value = showingChildren[0]
        return true
    }
    if (showingChildren.length === 0) {
        onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }
        return true
    }
    return false
};
const resolvePath = (routePath: string) => {
    if (isExternal(routePath) || isExternal(props.basePath)) {
        return routePath
    }
    return resolve(props.basePath, routePath)
}

</script>
<style lang="scss" scoped>
</style>