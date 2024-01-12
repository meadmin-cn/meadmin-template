<template>
  <el-drawer v-model="setting.showSettingMenu" :title="$t('项目配置')" size="300px" append-to-body>
    <el-form class="content" label-position="left" label-width="170px">
      <div class="title">
        <div class="title-content">{{ $t('布局') }}</div>
      </div>
      <div class="info" :style="{ '--primaryColor': themeConfig.primaryColor }">
        <div
          class="layout-base layout-left"
          :class="{ active: themeConfig.menuType === 'sidebar' }"
          :title="$t('左侧菜单模式')"
          @click="themeConfig.menuType = 'sidebar'"
        ></div>
        <div
          class="layout-base layout-top"
          :class="{ active: themeConfig.menuType === 'top' }"
          :title="$t('顶部菜单混合模式')"
          @click="themeConfig.menuType = 'top'"
        ></div>
      </div>
      <div class="title">
        <div class="title-content">{{ $t('配置') }}</div>
      </div>
      <el-form-item :label="$t('主题色')">
        <el-color-picker v-model="themeConfig.primaryColor" :predefine="predefinePrimaryColors" />
      </el-form-item>
      <el-form-item :label="$t('侧边栏背景色')">
        <el-color-picker v-model="themeConfig.menuBg" :predefine="sidebarBgColors" />
      </el-form-item>
      <el-form-item :label="$t('折叠侧边栏')">
        <el-switch v-model="themeConfig.menuCollapse"></el-switch>
      </el-form-item>
      <el-form-item :label="$t('侧边栏展开宽度')">
        <el-input v-model="themeConfig.menuWidth"></el-input>
      </el-form-item>
      <el-form-item :label="$t('固定') + $t(' ') + $t('Header')">
        <el-switch v-model="themeConfig.fixedHeader"></el-switch>
      </el-form-item>
      <el-form-item :label="$t('顶栏')">
        <el-switch v-model="themeConfig.topBar"></el-switch>
      </el-form-item>
      <el-form-item :label="$t('菜单') + $t(' ') + $t('搜索')">
        <el-switch v-model="themeConfig.showSearchMenu"></el-switch>
      </el-form-item>
      <el-form-item :label="$t('模式') + $t(' ') + $t('切换')">
        <el-switch v-model="themeConfig.showDark"></el-switch>
      </el-form-item>
      <el-form-item :label="$t('Size') + $t(' ') + $t('切换')">
        <el-switch v-model="themeConfig.showSize"></el-switch>
      </el-form-item>
      <el-form-item :label="$t('面包屑')">
        <el-switch v-model="themeConfig.breadcrumb"></el-switch>
      </el-form-item>
      <el-form-item :label="$t('标签栏')">
        <el-switch v-model="themeConfig.tagBar"></el-switch>
      </el-form-item>
      <el-form-item :label="$t('标签栏') + $t(' ') + $t('刷新') + $t(' ') + $t('按钮')">
        <el-switch v-model="themeConfig.tagBarRefresh"></el-switch>
      </el-form-item>
      <el-form-item :label="$t('标签栏') + $t(' ') + $t('菜单') + $t(' ') + $t('按钮')">
        <el-switch v-model="themeConfig.tagBarMenu"></el-switch>
      </el-form-item>
      <el-button style="width: 100%" @click="Object.assign(themeConfig, origionThemeConfig)"
        >{{ $t('重置') }}
      </el-button>
      <el-button style="width: 100%; margin: 10px 0" type="danger" @click="clear">
        {{ $t('清除缓存') }}{{ $t(' ') }}{{ $t('并') }}{{ $t(' ') }}{{ $t('退出登录') }}
      </el-button>
    </el-form>
  </el-drawer>
</template>
<script lang="ts" setup name="MeSettingMenu">
import { themeConfig as origionThemeConfig } from '@/config';
import { useSettingStore, useUserStore } from '@/store';
const setting = useSettingStore();
const { themeConfig } = storeToRefs(setting);
const userStore = useUserStore();
const predefinePrimaryColors = reactive([
  '#409EFF',
  '#1890FF',
  '#304156',
  '#212121',
  '#11A983',
  '#13C2C2',
  '#6959CD',
  '#F5222D',
]);
const sidebarBgColors = reactive([
  '#1d1e1f',
  '#212121',
  '#273352',
  '#ffffff',
  '#191b24',
  '#191a23',
  '#304156',
  '#001628',
]);
const clear = () => {
  setting.clearCache();
  userStore.logOut();
};
</script>
<style lang="scss" scoped>
.content {
  margin-top: -32px;
  .title {
    display: block;
    height: 1px;
    width: 100%;
    margin: 24px 0;
    border-top: 1px var(--el-border-color) var(--el-border-style);
    position: relative;
    .title-content {
      position: absolute;
      background-color: var(--el-bg-color);
      padding: 0 20px;
      font-weight: 500;
      color: var(--el-text-color-primary);
      font-size: 14px;
      left: 50%;
      transform: translate(-50%) translateY(-50%);
    }
  }
  .info {
    display: flex;
    justify-content: center;
    .layout-base {
      width: 50px;
      height: 50px;
      border-radius: 5px;
      position: relative;
      background: #e5e7eb;
      border: 1px solid #e5e7eb;
      margin-right: 15px;
      cursor: pointer;
    }
    .active {
      border: 2px solid var(--primaryColor) !important;
    }
    .layout-left::before {
      content: '';
      background-color: #000;
      position: absolute;
      left: 0;
      width: 10px;
      top: 0;
      bottom: 0;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    .layout-left::after {
      content: '';
      background-color: #fff;
      position: absolute;
      left: 10px;
      right: 0;
      top: 0;
      height: 10px;
      border-top-right-radius: 5px;
    }
    .layout-top::before {
      content: '';
      background-color: #000;
      position: absolute;
      left: 0;
      width: 10px;
      top: 10px;
      bottom: 0;
      border-bottom-left-radius: 5px;
    }
    .layout-top::after {
      content: '';
      background-color: #fff;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: 10px;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }
  }
}
</style>
