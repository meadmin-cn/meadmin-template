<template>
  <router-view v-slot="{ Component, route }">
      <component ref="routeView" v-if="aa(Component) && showComponent"  :is="Component" :key="route.meta.usePathKey ? route.path : undefined"/>
  </router-view>
</template>
<script setup lang="ts">
  import { WritableComputedRef } from 'vue';
  import { loadMessage,globaleI18n } from './locales/I18n';
  const routeView = ref<any>(null);
  let showComponent = ref(false);
  const aa = (component:any)=>{
    if(component){
      if(component.type.langImport){
        loadMessage((globaleI18n.global.locale as WritableComputedRef<string>).value,component.type.langImport).finally(()=>showComponent.value = true);
      }
      return true;
    }
    return false;
  }
</script>
<style lang="scss" scoped>
</style>
