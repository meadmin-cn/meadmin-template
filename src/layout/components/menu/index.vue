<template>
  <div
    v-if="menus.length"
    class="layout-menu"
    :class="{ 'has-title': menuType !== 'top', collapse: !globalStore.isMobile && themeConfig.menuCollapse }"
  >
    <Expand v-if="menuType === 'top'" class="expand"></Expand>
    <Title v-else class="layout-title"></Title>
    <div class="menu-box">
      <el-scrollbar view-class="layout-menu-content">
        <el-menu
          class="el-menu-vertical-demo"
          :default-active="activeMenu"
          :collapse="!globalStore.isMobile && themeConfig.menuCollapse"
        >
          <menu-item v-for="item in menus" :key="item.path" :item="item" :collapse="themeConfig.menuCollapse" />
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>
<script setup lang="ts" name="layoutMenu">
import { useSettingStore, useRouteStore, useGlobalStore } from '@/store';
import { mixColor, getColorLuma } from '@/utils/helper';
import Title from '../title.vue';
import Expand from '@/layout/components/expand.vue';
import MenuItem from './components/menuItem.vue';

const { themeConfig, menuType } = storeToRefs(useSettingStore());
const routeStore = useRouteStore();
const globalStore = useGlobalStore();
const route = useRoute();
let activeMenu = ref('');
watch(
  route,
  (route) => {
    if (route.meta) {
      if (route.meta.hideMenu) {
        if (route.meta.activeMenu) {
          activeMenu.value = route.meta.activeMenu;
        }
      } else {
        activeMenu.value = route.path;
      }
    }
  },
  { immediate: true },
);
const menuBg1 = computed(() =>
  mixColor(themeConfig.value.menuBg, getColorLuma(themeConfig.value.menuBg) < 100 ? '#ffffff' : '#303133', 0.1),
);
const menuActiveColor = computed(() => (getColorLuma(themeConfig.value.menuBg) < 100 ? '#ffffff' : '#303133'));
const menuTextColor = computed(() => mixColor(themeConfig.value.menuBg, menuActiveColor.value, 0.8));
const menus = computed(() => {
  return menuType.value === 'top' ? routeStore.childsRoutes[route.meta.menuIndex![0]] : routeStore.routes;
});
</script>
<style lang="scss" scoped>
.layout-menu {
  --el-menu-base-level-padding: 12px;
  --el-menu-text-color: v-bind('menuTextColor');
  --el-menu-active-color: v-bind('menuActiveColor');
  background-color: v-bind('themeConfig.menuBg');
  height: 100%;
  position: relative;

  .layout-title {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    color: var(--el-menu-active-color);
    width: 100%;
    box-shadow: 0 1px v-bind(menuBg1);
  }
  .menu-box {
    height: 100%;
    :deep(.layout-menu-content) {
      width: v-bind('themeConfig.menuWidth');
      color: var(--el-menu-text-color);
      transition: width 0.5s;

      .menu {
        padding-right: 6px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
      }

      .el-menu {
        background-color: unset;
        border: 0;

        .el-sub-menu.is-active {
          > .el-sub-menu__title {
            color: var(--el-menu-active-color);
          }
        }
        .el-sub-menu__title {
          padding-right: 28px;
        }
        .el-sub-menu__title:hover,
        .el-menu-item:hover {
          background-color: rgba(var(--el-color-primary-rgb), 0.3);
          color: var(--el-menu-active-color);
        }

        .el-menu-item.is-active {
          color: var(--el-color-primary);
        }

        .el-menu--inline {
          background-color: v-bind('menuBg1');
        }

        .el-menu-item,
        .el-sub-menu {
          .el-icon {
            width: 1em;
            margin-left: -1px;
            margin-right: 12px;
          }
        }
      }
    }
  }
  .expand {
    position: absolute;
    bottom: 20px;
    right: 12px;
    padding: 5px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 2px;
    z-index: 1;
  }
}
.has-title {
  padding-top: $header-top-height;
}
.collapse {
  :deep(.layout-menu-content) {
    width: calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2) !important;
    span {
      visibility: hidden;
    }
    // .title {
    //   width: calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2);
    //   text-align: center;
    //   margin: 0;

    //   span {
    //     display: none;
    //   }
    // }
  }
}
</style>
