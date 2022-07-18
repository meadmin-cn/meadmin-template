<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade">
        <me-component :componentKey="route.fullPath" :is="Component"></me-component>
    </transition>
  </router-view>
</template>
<script setup lang="ts">
  import meComponent from './components/meComponent.vue';  
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
