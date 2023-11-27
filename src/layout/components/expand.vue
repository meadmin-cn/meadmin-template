<template>
  <div>
    <mel-icon-expand v-if="themeConfig.menuCollapse" class="fold-expand pointer" @click="setMenuCollapse">
    </mel-icon-expand>
    <mel-icon-fold v-else class="fold-expand pointer" @click="setMenuCollapse"></mel-icon-fold>
  </div>
</template>

<script setup lang="ts" name="Expand">
import { useSettingStore } from '@/store';
const { themeConfig } = storeToRefs(useSettingStore());
const setMenuCollapse = () => {
  themeConfig.value.menuCollapse = !themeConfig.value.menuCollapse;
};
</script>
<style lang="scss" scoped>
.expand {
}
</style>
