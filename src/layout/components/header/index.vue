<template>
<div class="header">
    <left></left>
    <right class="right-header"></right>
</div>
<Footer></Footer>
</template>
<script setup lang="ts" name="layoutHeader">
import left from './components/left.vue';
import right from './components/right.vue';
import Footer from './components/footer.vue';


</script>
<style lang="scss" scoped>
@use 'element-plus/theme-chalk/src/mixins/function.scss' as *;

.header{
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid getCssVar('border','color');

}
</style>