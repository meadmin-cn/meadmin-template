<template>
    <div class="footer">
        <a class="icon pointer" :class="{ 'is-disabled': scrollLeft <= 0 }" @click="back">
            <el-icon-d-arrow-left></el-icon-d-arrow-left>
        </a>
        <el-scrollbar ref="scrollbarRef" @scroll="({ scrollLeft: left }) => scrollLeft = left" view-class="list-parent"
            style="flex-grow:1">
            <div class="list" ref="listRef">
                <div class="item pointer" v-for="(tag, index) in tags" :key="tag.fullPath" ref="tagsRef"
                    :class="{ active: tag.fullPath === currentTag?.fullPath }" @click="push(tag)"
                    @contextmenu.prevent="setContextmenu($event.currentTarget as any, tag)">
                    {{ tag.meta.title }}
                </div>
            </div>
        </el-scrollbar>
        <div class="right">
            <div class="icon pointer" :class="{'is-disabled': scrollLeft >= max }" @click="go()">
                <el-icon-d-arrow-right></el-icon-d-arrow-right>
            </div>
            <div class="icon pointer">
                <el-icon-refresh></el-icon-refresh>
            </div>
            <div class="icon pointer" @click="setContextmenu($event.currentTarget as any, currentTag)">
                <el-icon-menu></el-icon-menu>
            </div>
        </div>
    </div>
    <contextmenu v-if="virtualRef" v-model:visible="showContextmenu" v-model="tags" :virtual-ref="virtualRef" :current="contextmenuCurrent">
    </contextmenu>
</template>
<script setup lang="ts" name="tags">
import { mitter, event } from '@/event';
import { useRouteStore } from '@/store';
import { ElScrollbar } from 'element-plus';
import { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import contextmenu from './components/contextmenu.vue';
import { isExternal } from '@/utils/validate';
import { resolve } from 'path-browserify';
import $ from 'jquery';
import { useGlobalConfig } from 'element-plus';
//初始化tags
const tags = reactive([] as RouteLocationNormalized[]);
const resolvePath = (routePath: string, basePath = '') => {
    if (isExternal(routePath) || isExternal(basePath)) {
        return routePath
    }
    return resolve(basePath, routePath);
}
const addAffixTags = (routes: RouteRecordRaw[], basePath = '') => {
    routes.forEach(item => {
        if (item.meta?.affix && item.meta.title) {
            tags.push(Object.assign({ fullPath: resolvePath(item.path, basePath), hash: '', query: {}, matched: [], redirectedFrom: undefined }, item) as unknown as RouteLocationNormalized);
        }
        if (item.children) {
            addAffixTags(item.children, resolvePath(item.path, basePath));
        }
    });
}
addAffixTags(useRouteStore().routes);

//滚动设置
const elNamespace = useGlobalConfig('namespace');
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
const listRef = ref<HTMLDivElement>();
let scrollLeft = ref(0);
const setScrollLeft = (left: number, isAdd = false) => {
    if (isAdd) {
        left = left + scrollLeft.value;
    }
    $(scrollbarRef.value!.$el).find(`.${elNamespace.value}-scrollbar__wrap`).animate({ scrollLeft: left }, 300);
}
const max = ref(0);
const tagsRef = ref([] as HTMLElement[]);
const currentTag = ref<RouteLocationNormalized>({ fullPath: '/', meta: { title: '' } } as RouteLocationNormalized);
const route = useRoute();
onMounted(() => {
    max.value = listRef.value!.offsetWidth - scrollbarRef.value?.$el.clientWidth;
    mitter.on(event.resize, () => {
        max.value = listRef.value!.offsetWidth - scrollbarRef.value?.$el.clientWidth;
    }, true);
})
const back = () => {
    setScrollLeft(0 - scrollbarRef.value!.$el.clientWidth / 2, true)
}
const go = () => {
    setScrollLeft(scrollbarRef.value!.$el.clientWidth / 2, true);
}
const jump = (index: number) => {
    nextTick(() => {
        if (tagsRef.value[index]) {
            const offsetLeft = tagsRef.value[index].offsetLeft;
            const offsetWidth = tagsRef.value[index].offsetWidth;
            const offsetRight = offsetWidth + offsetLeft;
            const parentWidth = scrollbarRef.value!.$el.clientWidth;
            const parentLeft = scrollLeft.value;
            const parentRight = parentWidth + scrollLeft.value;
            if (offsetLeft < parentLeft) {
                setScrollLeft(offsetLeft)
            }
            if (offsetRight > parentRight) {
                setScrollLeft(offsetLeft + offsetWidth - parentWidth);
            }
            currentTag.value = tags[index];
        }
    })
}
//动态设置active
watch(route, (route) => {
    if (route.meta.title && !route.meta.hideTag) {
        let index = tags.findIndex(item => item.fullPath == route.fullPath);
        if (index > -1) {
            return jump(index);
        }
        tags.push(JSON.parse(JSON.stringify(route)));
        return jump(tags.length - 1);

    }
}, { immediate: true });
const router = useRouter();
const push = (route: RouteLocationNormalized) => {
    if (route.fullPath !== currentTag.value!.fullPath) {
        router.push(route.fullPath);
    }
}
const contextmenuCurrent = ref(currentTag.value);
const virtualRef = ref<HTMLElement>();
const showContextmenu = ref(false);
const setContextmenu = (event: HTMLElement, current: RouteLocationNormalized) => {
    virtualRef.value = event;
    contextmenuCurrent.value = current;
    showContextmenu.value = true;
} 
</script>
<style lang="scss" scoped>
@use 'element-plus/theme-chalk/src/mixins/function.scss' as *;
@use 'element-plus/theme-chalk/src/mixins/config.scss' as *;

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

    :deep(.list-parent) {
        height: 100%;
    }

    :deep(.list) {
        display: flex;
        height: 100%;
        align-items: center;
        width: max-content;

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
            transition: width 0.45s;

        }
    }

}
</style>