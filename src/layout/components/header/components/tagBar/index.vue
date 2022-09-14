<template>
  <div class="tag-bar">
    <a class="icon pointer" :class="{ 'is-disabled': scrollLeft <= 0 }" @click="back">
      <mel-icon-d-arrow-left></mel-icon-d-arrow-left>
    </a>
    <el-scrollbar
      ref="scrollbarRef"
      view-class="list-parent"
      style="flex-grow: 1"
      @scroll="({ scrollLeft: left } : any) => (scrollLeft = left)"
    >
      <div ref="listRef" class="list">
        <div
          v-for="tag in tags"
          :key="tag.fullPath"
          ref="tagsRef"
          class="item pointer"
          :class="{ active: tag.fullPath === currentTag?.fullPath }"
          @click="push(tag)"
          @contextmenu.prevent="setContextmenu($event.currentTarget as any, tag)"
        >
          {{ $t(tag.meta.title!) }}
          <div v-if="!tag.meta.affix" class="del-icon" @click.stop="close($event.currentTarget as any, tag)">
            <mel-icon-close />
          </div>
          <div></div>
        </div>
      </div>
    </el-scrollbar>
    <div class="right">
      <div class="icon pointer" :class="{ 'is-disabled': scrollLeft >= max }" @click="go">
        <mel-icon-d-arrow-right></mel-icon-d-arrow-right>
      </div>
      <div v-if="themeConfig.tagBarRefresh" class="icon pointer" @click="reload">
        <mel-icon-refresh :class="{ rotate: reoadUrl }"></mel-icon-refresh>
      </div>
      <div
        v-if="themeConfig.tagBarMenu"
        class="icon pointer"
        @click="setContextmenu($event.currentTarget as any, currentTag)"
      >
        <mel-icon-menu></mel-icon-menu>
      </div>
    </div>
  </div>
  <contextmenu
    v-if="virtualRef"
    ref="contextmenuRef"
    v-model:visible="showContextmenu"
    :virtual-ref="virtualRef"
    :current="contextmenuCurrent"
    :model-value="tags"
    @update:model-value="
      ($event:any) => {
        tags.splice(0, tags.length, ...$event);
      }
    "
  >
  </contextmenu>
</template>
<script setup lang="ts" name="TagBar">
import { mitter, event } from '@/event';
import { useRouteStore, useSettingStore } from '@/store';
import { ElScrollbar } from 'element-plus';
import { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import contextmenu from './components/contextmenu.vue';
import { isExternal } from '@/utils/validate';
import { resolve } from 'path-browserify';
import $ from 'jquery';
const { themeConfig } = useSettingStore();
// 初始化tags
const tags = reactive([] as RouteLocationNormalized[]);
const resolvePath = (routePath: string, basePath = '') => {
  if (isExternal(routePath) || isExternal(basePath)) {
    return routePath;
  }
  return resolve(basePath, routePath);
};
const addAffixTags = (routes: RouteRecordRaw[], basePath = '') => {
  routes.forEach((item) => {
    if (item.meta?.affix && item.meta.title) {
      tags.push({
        fullPath: resolvePath(item.path, basePath),
        hash: '',
        query: {},
        matched: [],
        redirectedFrom: undefined,
        meta: { ...item.meta },
      } as unknown as RouteLocationNormalized);
    }
    if (item.children) {
      addAffixTags(item.children, resolvePath(item.path, basePath));
    }
  });
};
addAffixTags(useRouteStore().routes);

// 滚动设置
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>();
const listRef = ref<HTMLDivElement>();
let scrollLeft = ref(0);
const setScrollLeft = (left: number, isAdd = false) => {
  if (isAdd) {
    left = left + scrollLeft.value;
  }
  $(scrollbarRef.value!.$el).find('.el-scrollbar__wrap').animate({ scrollLeft: left }, 300);
};
const max = ref(0);
const tagsRef = ref([] as HTMLElement[]);
const currentTag = ref<RouteLocationNormalized>({
  fullPath: '/',
  meta: { title: '' },
} as RouteLocationNormalized);
const route = useRoute();
onMounted(() => {
  max.value = listRef.value!.offsetWidth - scrollbarRef.value?.$el.clientWidth;
  mitter.on(
    event.RESIZE,
    () => {
      max.value = listRef.value!.offsetWidth - scrollbarRef.value?.$el.clientWidth;
    },
    true,
  );
});
const back = () => {
  setScrollLeft(0 - scrollbarRef.value!.$el.clientWidth / 2, true);
};
const go = () => {
  setScrollLeft(scrollbarRef.value!.$el.clientWidth / 2, true);
};
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
        setScrollLeft(offsetLeft);
      }
      if (offsetRight > parentRight) {
        setScrollLeft(offsetLeft + offsetWidth - parentWidth);
      }
      currentTag.value = tags[index];
    }
  });
};
// 动态设置active
const setTag = (route: RouteLocationNormalized) => {
  if (route.meta.title && !route.meta.hideTag) {
    let index = tags.findIndex((item) => item.fullPath === route.fullPath);
    if (index > -1) {
      return jump(index);
    }
    tags.push({ ...route });
    return jump(tags.length - 1);
  }
};
setTag(route);
mitter.on(event.BEFORE_ROUTE_CHANGE, ({ to }) => setTag(to), true);
const router = useRouter();
const push = (route: RouteLocationNormalized) => {
  if (route.fullPath !== currentTag.value!.fullPath) {
    router.push(route.fullPath);
  }
};
const contextmenuCurrent = ref(currentTag.value);
const virtualRef = ref<HTMLElement>();
const showContextmenu = ref(false);
const contextmenuRef = ref<InstanceType<typeof contextmenu>>();
const setContextmenu = (event: HTMLElement, current: RouteLocationNormalized, show = true) => {
  virtualRef.value = event;
  contextmenuCurrent.value = current;
  showContextmenu.value = show;
};
const close = async (event: HTMLElement, current: RouteLocationNormalized) => {
  setContextmenu(event, current, false);
  await nextTick();
  contextmenuRef.value?.closeCurrent();
};
const reload = () => {
  // 刷新
  router.replace('/redirect/' + encodeURIComponent(route.fullPath));
};
const reoadUrl = ref('');
watch(route, () => {
  if (route.name == 'redirect') {
    reoadUrl.value = route.params.path as string;
  } else if (reoadUrl.value == route.fullPath) {
    setTimeout(() => {
      reoadUrl.value = '';
    }, 500);
  }
});
</script>
<style lang="scss" scoped>
.tag-bar {
  border-bottom: 1px solid var(--el-border-color);
  height: $header-tag-height;
  display: flex;
  align-items: center;

  .is-disabled {
    color: var(--el-disabled-text-color) !important;
    cursor: not-allowed;
  }

  .icon {
    padding: 0 10px;
    height: 100%;
    display: flex;
    align-items: center;
    border-right: 1px solid var(--el-border-color);
    color: var(--el-text-color-regular);

    .rotate {
      animation: loading-rotate 1s linear infinite;
    }
  }

  .icon:hover {
    color: var(--el-text-color-primary);
  }

  .right {
    display: flex;
    flex-shrink: 0;
    flex-grow: 0;
    justify-self: right;
    height: 100%;
    border-left: 1px solid var(--el-border-color);
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
      border-right: 1px solid var(--el-border-color);
      height: 100%;
      align-items: center;
      display: flex;
      padding-left: 16px;
      padding-right: 16px;
      flex-shrink: 0;
      flex-grow: 0;
      position: relative;

      .del-icon {
        height: 100%;
        width: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        margin-right: -16px;
        visibility: hidden;
      }

      .del-icon:hover {
        font-size: 14px;
      }
    }

    .item:first-child {
      margin-left: 0;
    }

    .item:hover {
      // background-color: rgba(var(--el-color-primary-rgb), 0.5);
      background-color: rgba(var(--el-color-primary-rgb), 0.1);
      color: var(--el-color-primary);

      .del-icon {
        visibility: unset;
      }
    }

    .item.active {
      // color: var(--el-color-primary);
      background-color: rgba(var(--el-color-primary-rgb), 0.1);
      color: var(--el-color-primary);
    }

    .item::after {
      position: absolute;
      content: '';
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--el-color-primary);
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
