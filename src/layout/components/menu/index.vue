<template>
  <el-scrollbar view-class="layout-menu-content" class="layout-menu" :class="{ collapse: settingStore.menuCollapse }">
    <el-menu class="el-menu-vertical-demo" default-active="2" :collapse="settingStore.menuCollapse">
      <div class="title">
        Me<span> - Admin</span>
      </div>
      <el-sub-menu index="1">
        <template #title>
          <el-icon-location></el-icon-location>
          <span class="menu" title="Navigator One">Navigator One</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
        <el-menu-item index="1-3">item three</el-menu-item>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon-menu></el-icon-menu>
        <span>Navigator Two</span>
      </el-menu-item>

      <el-menu-item index="4">
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>
<script setup lang="ts" name="layoutMenu">
import { useSettingStore } from '@/store';
const settingStore = useSettingStore();

</script>
<style lang="scss" scoped>
@use 'element-plus/theme-chalk/src/mixins/function.scss' as *;
@use 'element-plus/theme-chalk/src/mixins/config.scss' as *;

.layout-menu {
  --#{$namespace}-menu-base-level-padding: 12px;

  &:deep(.layout-menu-content) {
    background-color: #001529;
    min-height: 100%;
    width: 200px;
    color: #ffffff;
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
      padding-right: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
    }

    .#{$namespace}-menu {
      background-color: inherit;
      border: 0;

      .#{$namespace}-menu-item,
      .#{$namespace}-sub-menu__title,
      .#{$namespace}-menu-item-group__title {
        color: #ffffff;
      }

      .#{$namespace}-menu-item.is-active {
        color: getCssVar('color', 'primary');
      }

      .#{$namespace}-sub-menu__title:hover,
      .#{$namespace}-menu-item:hover {
        background-color: rgba(getCssVar('color-primary', 'rgb'), 0.1);
      }

      .#{$namespace}-menu--inline {
        background-color: #0d2236;
      }

      .#{$namespace}-menu-item,
      .#{$namespace}-sub-menu {
        .#{$namespace}-icon {
          width: 1em;
          margin-left: -1px;
        }

      }

    }
  }
}

.collapse {
  &:deep(.layout-menu-content) {
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