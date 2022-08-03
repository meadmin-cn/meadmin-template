<template>
  <el-scrollbar view-class="layout-sidebar-content" class="layout-sidebar"
    :class="{ collapse: settingStore.menuCollapse }">
    <el-menu class="el-menu-vertical-demo" :default-active="activeMenu" :collapse="settingStore.menuCollapse">
      <div class="title">
        Me<span> - Admin</span>
      </div>
      <sidebar-item v-for="route in routeStore.routes" :key="route.path" :item="route" :base-path="route.path" />
    </el-menu>
  </el-scrollbar>
</template>
<script setup lang="ts" name="layoutSidebar">
import { useSettingStore, useRouteStore } from '@/store';
const settingStore = useSettingStore();
const routeStore = useRouteStore();
const route = useRoute();
let activeMenu = ref('');
watch(route, (route) => {
  if (route.meta) {
    if (route.meta.hideMenu) {
      if (route.meta.activeMenu) {
        return activeMenu.value = route.meta.activeMenu
      }
    } else {
      return activeMenu.value = route.path;
    }
  }
}, { immediate: true });
   
</script>
<style lang="scss" scoped>
@use 'element-plus/theme-chalk/src/mixins/function.scss' as *;
@use 'element-plus/theme-chalk/src/mixins/config.scss' as *;

.layout-sidebar {
  --#{$namespace}-menu-base-level-padding: 12px;
  --#{$namespace}-menu-text-color: rgba(255, 255, 255, 0.85);
  --#{$namespace}-menu-active-color: #ffffff;

  :deep(.layout-sidebar-content) {
    background-color: rgba(0, 0, 0, 0.9);
    min-height: 100vh;
    width: 200px;
    color: getCssVar('menu-active', 'color');
    transition: width 0.5s;

    .title {
      height: getCssVar('menu-item', 'height');
      line-height: getCssVar('menu-item', 'height');
      font-weight: bold;
      margin: 0 12px;
      font-size: 1.25em;
      word-break: break-all;
      overflow-y: hidden;
    }

    .menu {
      padding-right: 6px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
    }

    .#{$namespace}-menu {
      background-color: unset;
      border: 0;

      .#{$namespace}-sub-menu.is-active {
        >.#{$namespace}-sub-menu__title {
          color: getCssVar('menu-active', 'color');
        }
      }

      .#{$namespace}-sub-menu__title:hover,
      .#{$namespace}-menu-item:hover {
        background-color: rgba(getCssVar('color-primary', 'rgb'), 0.1);
        color: getCssVar('menu-active', 'color');
      }

      .#{$namespace}-menu-item.is-active {
        color: getCssVar('color', 'primary');
      }

      .#{$namespace}-menu--inline {
        background-color: rgb(31, 45, 61);
      }

      .#{$namespace}-menu-item,
      .#{$namespace}-sub-menu {
        .#{$namespace}-icon {
          width: 1em;
          margin-left: -1px;
          margin-right: 12px;
        }
      }
    }
  }
}

.collapse {
  :deep(.layout-sidebar-content) {
    width: calc(getCssVar('menu-icon', 'width') + getCssVar('menu-base', 'level-padding') * 2);

    .title {
      width: calc(getCssVar('menu-icon', 'width') + getCssVar('menu-base', 'level-padding') * 2);
      text-align: center;
      margin: 0;

      span {
        display: none;
      }
    }
  }
}
</style>