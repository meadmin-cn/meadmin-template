<template>
  <template v-if="menu">
    <el-sub-menu v-if="menu.children?.length && !noChild" :index="menu.path">
      <template v-if="menu.meta" #title>
        <component :is="menu.meta!.icon" v-if="menu.meta!.icon" />
        <div v-show="collapse" v-else class="icon-text">{{ $t(menu.meta.title).slice(0, 1) }}</div>
        <span class="menu">{{ $t(menu.meta!.title!) }}</span>
      </template>
      <menu-item v-for="child in menu.children" :key="child.path" :item="child"></menu-item>
    </el-sub-menu>
    <template v-else>
      <component
        :is="truePathMenu!.meta?.isLink ? 'a' : 'routerLink'"
        v-if="menu.meta && menu.meta.title"
        :href="truePathMenu!.path"
        :to="truePathMenu!.path"
      >
        <el-menu-item :index="noChild ? item.meta?.menuIndex?.toString() : menu.path" :title="$t(menu.meta.title)">
          <component :is="menu.meta.icon" v-if="menu.meta.icon" />
          <div v-show="collapse" v-else class="icon-text">{{ $t(menu.meta.title).slice(0, 1) }}</div>
          <template #title>
            <span class="menu">{{ $t(menu.meta.title) }}</span>
          </template>
        </el-menu-item>
      </component>
    </template>
  </template>
</template>

<script setup lang="ts" name="MenuItem">
import { useRouteStore } from '@/store';
import { RouteRecordRaw } from 'vue-router';
const routeStore = useRouteStore();
const props = defineProps<{ item: RouteRecordRaw; noChild?: boolean; collapse?: boolean }>();
const menu = ref<RouteRecordRaw>();
const getMenu = (item: RouteRecordRaw): RouteRecordRaw => {
  if (!item.children?.length) {
    return item;
  }
  const children = item.children.filter((v) => v.meta && !v.meta.hideMenu);
  const res = { ...item, children: children };
  if (!item.meta?.alwaysShow && children.length === 1) {
    return getMenu(children[0]);
  }
  return res;
};
const truePathMenu = ref<RouteRecordRaw>();
if (!props.item.meta?.hideMenu) {
  truePathMenu.value = menu.value = getMenu(props.item);
}
if (props.noChild) {
  const firstChildrenMenu: (children: RouteRecordRaw[]) => RouteRecordRaw | undefined = (
    children: RouteRecordRaw[],
  ) => {
    for (let i = 0; i < children.length; i++) {
      if (!children[i].meta?.hideMenu) {
        return children[i];
      }
      if (children[i].children) {
        const item = firstChildrenMenu(children[i].children!);
        if (item) {
          return item;
        }
      }
      return undefined;
    }
  };
  if (menu.value?.children?.length) {
    truePathMenu.value = firstChildrenMenu(menu.value.children) ?? menu.value;
  }
  routeStore.childsRoutes[props.item!.meta!.menuIndex![0]] = menu.value?.children ?? [];
}
</script>
<style lang="scss" scoped>
.icon-text {
  width: 1em;
  text-align: center;
}
</style>
