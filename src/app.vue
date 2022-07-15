<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade">
        <load-component :componentKey="route.fullPath" :is="Component" :v-if="aa(Component)"></load-component>
    </transition>
  </router-view>
</template>
<script setup lang="ts">
  import loadComponent from './components/loadComponent.vue';  
  const aa = (a)=>{console.log('a',a)}
</script>
<style lang="scss">

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
