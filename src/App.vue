<template>
  <el-config-provider :locale="settingStore.elLocale" :size="settingStore.themeConfig.size">
    <router-view v-slot="{ Component }">
      <me-component :is="Component" done-progress close-loading="layout"></me-component>
    </router-view>
  </el-config-provider>
</template>
<script setup lang="ts">
import { useSettingStore } from '@/store';
import { SizeEnum } from '@/dict/configEnum';
const settingStore = useSettingStore();
const htmlDom = document.getElementsByTagName('html')[0];
watchEffect(() => {
  Object.entries(SizeEnum).forEach(([key, value]) => {
    htmlDom.classList.remove('me-' + value);
  });
  htmlDom.classList.add('me-' + settingStore.themeConfig.size);
});
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
