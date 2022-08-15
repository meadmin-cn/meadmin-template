<template>
  <template v-if="!item.meta?.hideMenu">
    <template
      v-if="
        onlyOneChild &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
        !item.meta?.alwaysShow
      "
    >
      <component
        v-if="onlyOneChild.meta && onlyOneChild.meta.title"
        :is="onlyOneChild.meta?.isLink ? 'a' : 'routerLink'"
        :href="basePath"
        :to="resolvePath(onlyOneChild.path)"
      >
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :title="$t(onlyOneChild.meta.title)"
        >
          <component
            :is="onlyOneChild.meta.icon"
            v-if="onlyOneChild.meta.icon"
          />
          <template #title>
            <span class="menu">{{ $t(onlyOneChild.meta.title) }}</span>
          </template>
        </el-menu-item>
      </component>
    </template>
    <el-sub-menu v-else :index="resolvePath(item.path)">
      <template v-if="item.meta" #title>
        <component :is="item.meta!.icon" v-if="item.meta!.icon" />
        <span class="menu">{{ $t(item.meta!.title!) }}</span>
      </template>
      <layout-menu-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
      ></layout-menu-item>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts" name="menuItem">
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
      //当前菜单的绝对路径
      type: String,
      default: ''
    }
  });
  let onlyOneChild = ref<RouteRecordRaw>();
  const hasOneShowingChild = (
    children = [] as RouteRecordRaw[],
    parent: RouteRecordRaw
  ) => {
    const showingChildren = children.filter(
      (item) => item.meta && !item.meta.hideMenu
    );
    if (showingChildren.length === 1) {
      onlyOneChild.value = showingChildren[0];
      return true;
    }
    if (showingChildren.length === 0) {
      onlyOneChild.value = { ...parent, path: '', noShowingChildren: true };
      return true;
    }
    return false;
  };
  const resolvePath = (routePath: string) => {
    if (isExternal(routePath) || isExternal(props.basePath)) {
      return routePath;
    }
    return resolve(props.basePath, routePath);
  };
  hasOneShowingChild(props.item.children, props.item);
</script>
<style lang="scss" scoped></style>
