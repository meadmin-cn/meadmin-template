<template>
  <template v-if="!item.meta?.hideMenu">
    <template
      v-if="onlyOneChild && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.meta?.alwaysShow"
    >
      <component
        :is="onlyOneChild.meta?.isLink ? 'a' : 'routerLink'"
        v-if="onlyOneChild.meta && onlyOneChild.meta.title"
        :href="onlyOneChild.path"
        :to="onlyOneChild.path"
      >
        <el-menu-item :index="onlyOneChild.path" :title="$t(onlyOneChild.meta.title)">
          <component :is="onlyOneChild.meta.icon" v-if="onlyOneChild.meta.icon" />
          <template #title>
            <span class="menu">{{ $t(onlyOneChild.meta.title) }}</span>
          </template>
        </el-menu-item>
      </component>
    </template>
    <el-sub-menu v-else :index="item.path">
      <template v-if="item.meta" #title>
        <component :is="item.meta!.icon" v-if="item.meta!.icon" />
        <span class="menu">{{ $t(item.meta!.title!) }}</span>
      </template>
      <layout-menu-item v-for="child in item.children" :key="child.path" :item="child"></layout-menu-item>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts" name="MenuItem">
import { RouteRecordRaw } from 'vue-router';
const props = defineProps<{item:RouteRecordRaw}>();
let onlyOneChild = ref<RouteRecordRaw>();
const hasOneShowingChild = (children = [] as RouteRecordRaw[], parent: RouteRecordRaw) => {
  const showingChildren = children.filter((item) => item.meta && !item.meta.hideMenu);
  if (showingChildren.length === 1) {
    onlyOneChild.value = showingChildren[0];
    return true;
  }
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, noShowingChildren: true };
    return true;
  }
  return false;
};
hasOneShowingChild(props.item.children, props.item);
</script>
