<template>
  <el-config-provider>
    <router-view v-slot="{ Component }">
      <me-component :is="Component" done-progress close-loading="layout"></me-component>
    </router-view>
    <set-el-globel v-if="showSetElGlobel"></set-el-globel>
    <Teleport to="body">
      <component :is="item.component" v-for="item in globalComponents" :key="item.key" :ref="(vnode:any)=>item.vnode = vnode" v-bind="item.props"></component>
    </Teleport>
  </el-config-provider>
</template>
<script setup lang="ts">
import { useGlobalStore, useSettingStore } from '@/store';
import { SizeEnum } from '@/dict/configEnum';
import SetElGlobel from './setElGlobel';
const settingStore = useSettingStore();
const htmlDom = document.getElementsByTagName('html')[0];
const { globalComponents } = toRefs(useGlobalStore());
watchEffect(() => {
  Object.entries(SizeEnum).forEach(([, value]) => {
    htmlDom.classList.remove('me-' + value);
  });
  htmlDom.classList.add('me-' + settingStore.themeConfig.size);
});
const showSetElGlobel = ref(true);
watch(
  () => [settingStore.elLocale, settingStore.themeConfig.size],
  () => {
    showSetElGlobel.value = !showSetElGlobel.value;
    new Promise<void>((reactive) => reactive()).then(() => (showSetElGlobel.value = !showSetElGlobel.value));
  },
);
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
