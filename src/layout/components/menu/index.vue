<template>
  <el-scrollbar
    view-class="layout-menu-content"
    class="layout-menu"
    :class="{ collapse: !globalStore.isMobile && themeConfig.menuCollapse }"
  >
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="activeMenu"
      :collapse="!globalStore.isMobile && themeConfig.menuCollapse"
    >
      <div class="title">M<span>e - Admin</span></div>
      <layout-menu-item
        v-for="route in routeStore.routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>
<script setup lang="ts" name="layoutMenu">
  import { useSettingStore, useRouteStore, useGlobalStore } from '@/store';
  import { mixColor, getColorLuma } from '@/utils/helper';
  const { themeConfig } = useSettingStore();
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
            return (activeMenu.value = route.meta.activeMenu);
          }
        } else {
          return (activeMenu.value = route.path);
        }
      }
    },
    { immediate: true }
  );
  const menuBg1 = computed(() =>
    mixColor(
      themeConfig.menuBg,
      getColorLuma(themeConfig.menuBg) < 100 ? '#ffffff' : '#303133',
      0.1
    )
  );
  const menuActiveColor = computed(() =>
    getColorLuma(themeConfig.menuBg) < 100 ? '#ffffff' : '#303133'
  );
  const menuTextColor = computed(() =>
    mixColor(themeConfig.menuBg, menuActiveColor.value, 0.8)
  );
</script>
<style lang="scss" scoped>
  .layout-menu {
    --el-menu-base-level-padding: 12px;
    --el-menu-text-color: v-bind('menuTextColor');
    --el-menu-active-color: v-bind('menuActiveColor');

    :deep(.layout-menu-content) {
      background-color: v-bind('themeConfig.menuBg');
      min-height: 100vh;
      width: v-bind('themeConfig.menuWidth');
      color: var(--el-menu-text-color);
      transition: width 0.5s;

      .title {
        height: var(--el-menu-item-height);
        line-height: var(--el-menu-item-height);
        font-weight: bold;
        padding: 0 12px;
        font-size: 1.25em;
        word-break: break-all;
        overflow-y: hidden;
        color: var(--el-menu-active-color);
      }

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

  .collapse {
    :deep(.layout-menu-content) {
      width: calc(
        var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2
      );

      .title {
        width: calc(
          var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2
        );
        text-align: center;
        margin: 0;

        span {
          display: none;
        }
      }
    }
  }
</style>
