<template>
    <div class="navbar">
        <left></left>
        <right class="right-header"></right>
    </div>
    <tags></tags>
</template>
<script setup lang="ts" name="navbar">
import left from './components/left.vue';
import right from './components/right/index.vue';
import tags from './components/tags/index.vue';
</script>
<style lang="scss" scoped>
@use 'element-plus/theme-chalk/src/mixins/function.scss' as *;

.navbar {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid getCssVar('border', 'color');

}
</style>