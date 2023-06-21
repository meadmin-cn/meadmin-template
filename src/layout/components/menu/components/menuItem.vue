<template>
  <template v-if="menu">
    <el-sub-menu v-if="menu.children?.length" :index="menu.path">
      <template v-if="menu.meta" #title>
        <component :is="menu.meta!.icon" v-if="menu.meta!.icon" />
        <span class="menu">{{ $t(menu.meta!.title!) }}</span>
      </template>
      <layout-menu-item v-for="child in menu.children" :key="child.path" :item="child"></layout-menu-item>
    </el-sub-menu>
    <template v-else>
      <component
        :is="menu.meta?.isLink ? 'a' : 'routerLink'"
        v-if="menu.meta && menu.meta.title"
        :href="menu.path"
        :to="menu.path"
      >
        <el-menu-item :index="menu.path" :title="$t(menu.meta.title)">
          <component :is="menu.meta.icon" v-if="menu.meta.icon" />
          <template #title>
            <span class="menu">{{ $t(menu.meta.title) }}</span>
          </template>
        </el-menu-item>
      </component>
    </template>
  </template>
</template>

<script setup lang="ts" name="MenuItem">
import { RouteRecordRaw } from 'vue-router';
const props = defineProps<{ item: RouteRecordRaw }>();
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
if (!props.item.meta?.hideMenu) {
  menu.value = getMenu(props.item);
}
</script>
