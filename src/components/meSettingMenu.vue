<template>
  <el-drawer v-model="setting.showSettingMenu" :title="$t('项目配置')" size="300px" append-to-body>
    <el-form label-position="left" label-width="170px">
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
const themeConfig = setting.themeConfig;
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
