<template>
    <div class="footer">
        <a class="icon pointer" :class="{ 'is-disabled': scrollLeft <= 0 }" @click="back">
            <el-icon-d-arrow-left></el-icon-d-arrow-left>
        </a>
        <el-scrollbar ref="scrollbarRef" @scroll="scroll($event)" view-class="list-parent" style="flex-grow:1">
            <div class="list" ref="listRef">
                <el-dropdown v-for="tag in tags" :key="tag.fullPath" trigger="contextmenu" ref="tagsRef">
                    <div class="item pointer" :class="{active:tag.fullPath === currentTag?.fullPath}">{{ tag.meta.title }}</div>
                    <contextmenu #dropdown></contextmenu>
                </el-dropdown>
            </div>

        </el-scrollbar>
        <div class="right">
            <div class="icon pointer" :class="{ 'is-disabled': scrollLeft >= max }" @click="go()">
                <el-icon-d-arrow-right></el-icon-d-arrow-right>
            </div>
            <div class="icon pointer">
                <el-icon-refresh></el-icon-refresh>
            </div>
            <el-dropdown>
                <div class="icon pointer">
                    <el-icon-menu></el-icon-menu>
                </div>
                <contextmenu #dropdown></contextmenu>
            </el-dropdown>
        </div>
    </div>
</template>
<script setup lang="ts" name="tags">
import { mitter, event } from '@/event';
import { useRouteStore } from '@/store';
import { ElScrollbar, IElDropdownInstance } from 'element-plus';
import { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import contextmenu from './components/contextmenu.vue';
import { isExternal } from '@/utils/validate';
import { resolve } from 'path-browserify';
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
const listRef = ref<HTMLDivElement>();
let scrollLeft = ref(0);
const scroll = (options: { scrollLeft: number; }) => {
    scrollLeft.value = options.scrollLeft;
}
const resolvePath = (routePath: string,basePath='') => {
    if (isExternal(routePath) || isExternal(basePath)) {
        return routePath
    }
    return resolve(basePath, routePath)
}
let max = ref(0);
let tagsRef = ref([] as IElDropdownInstance&{$el:HTMLElement}[]);
let currentTag = ref<RouteLocationNormalized>();
let route = useRoute();
let tags = reactive([] as RouteLocationNormalized[]);
mitter.on(event.resize, () => {
    max.value = listRef.value!.clientWidth - scrollbarRef.value?.$el.clientWidth;
}, true);
onMounted(() => {
    max.value = listRef.value!.clientWidth - scrollbarRef.value?.$el.clientWidth;
})
const back = () => {
    scrollbarRef.value!.setScrollLeft( scrollLeft.value - scrollbarRef.value!.$el.clientWidth / 2 )
}
const go = () => {
    scrollbarRef.value!.setScrollLeft( scrollLeft.value + scrollbarRef.value!.$el.clientWidth / 2 )
}
const jump = (index: number) => {
    nextTick(()=>{
        if(tagsRef.value[index]){
            const offsetLeft = tagsRef.value[index].$el.offsetLeft;
            const offsetWidth = tagsRef.value[index].$el.offsetWidth;
            const offsetRight = offsetWidth + offsetLeft;
            const parentWidth = scrollbarRef.value!.$el.clientWidth;
            const parentLeft = scrollLeft.value;
            const parentRight = parentWidth + scrollLeft.value;
            if(offsetLeft<parentLeft){
                scrollbarRef.value!.scrollTo({ behavior: 'smooth', left: offsetLeft})
            }
            if(offsetRight > parentRight){
                scrollbarRef.value!.scrollTo({ behavior: 'smooth', left: offsetLeft + offsetWidth - parentWidth});
            }
            currentTag.value = tags[index];
        }
    })
}

//添加固定tag
const addAffixTags = (routes: RouteRecordRaw[],basePath = '') => {
    routes.forEach(item => {
        if (item.meta?.affix && item.meta.title) {
            tags.push(Object.assign({ fullPath: resolvePath(item.path,basePath), hash: '', query: {}, matched: [], redirectedFrom: undefined }, item) as unknown as RouteLocationNormalized);
        }
        if (item.children) {
            addAffixTags(item.children,resolvePath(item.path,basePath));
        }
    });
}
addAffixTags(useRouteStore().routes);
watch(route, (route) => {
    if (route.meta.title && !route.meta.hideTag) {
        let index = tags.findIndex(item => item.fullPath == route.fullPath);
        if (index > -1) {
            return jump(index);
        }
        tags.push(JSON.parse(JSON.stringify(route)));
        return jump(tags.length-1);

    }
}, { immediate: true });

</script>
<style lang="scss" scoped>
@use 'element-plus/theme-chalk/src/mixins/function.scss' as *;

.footer {
    border-bottom: 1px solid getCssVar('border', 'color');
    height: 35px;
    display: flex;
    align-items: center;

    .is-disabled {
        color: getCssVar('disabled-text', 'color') !important;
        cursor: not-allowed;
    }

    .icon {
        padding: 0 10px;
        height: 100%;
        display: flex;
        align-items: center;
        border-right: 1px solid getCssVar('border', 'color');
        color: getCssVar('text-color', 'regular');
    }

    .icon:hover {
        color: getCssVar('text-color', 'primary');
    }

    .right {
        display: flex;
        flex-shrink: 0;
        flex-grow: 0;
        justify-self: right;
        height: 100%;
        border-left: 1px solid getCssVar('border', 'color');
    }

    &:deep(.list-parent) {
        height: 100%;
    }

    &:deep(.list) {
        display: flex;
        height: 100%;
        align-items: center;
        width: max-content;
                .el-dropdown {
            height: 100%;
        }

        .item {
            border-right: 1px solid getCssVar('border', 'color');
            height: 100%;
            align-items: center;
            display: flex;
            padding: 0 16px;
            flex-shrink: 0;
            flex-grow: 0;
            position: relative;
        }

        .item:first-child {
            margin-left: 0;
        }

        .item:hover {
            // background-color: rgba(getCssVar('color-primary', 'rgb'), 0.5);
            background-color: rgba(getCssVar('color-primary', 'rgb'), 0.1);
            color: getCssVar('color', 'primary');

        }

        .item.active {
            // color: getCssVar('color','primary');
            background-color: rgba(getCssVar('color-primary', 'rgb'), 0.1);
            color: getCssVar('color', 'primary');
        }

        .item::after {
            position: absolute;
            content: '';
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: getCssVar('color', 'primary');
            width: 0;
        }

        .item:hover::after,
        .item.active::after {
            width: 100%;
            transition: width 0.5s;

        }
    }

}
</style>