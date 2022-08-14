<template>
  <el-config-provider :locale="settingStore.elLocale" :size="settingStore.themeConfig.size">
    <router-view v-slot="{ Component }">
      <me-component :is="Component"></me-component>
    </router-view>
  </el-config-provider>
</template>
<script setup lang="ts">
import { useSettingStore } from '@/store';
import { sizeEnum } from '@/enums/configEnum';
const settingStore = useSettingStore();
const htmlDom = document.getElementsByTagName('html')[0];
watchEffect(() => {
  Object.entries(sizeEnum).forEach(([key, value]) => {
    htmlDom.classList.remove('me-' + value);
  })
  htmlDom.classList.add('me-' + settingStore.themeConfig.size);
});
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
