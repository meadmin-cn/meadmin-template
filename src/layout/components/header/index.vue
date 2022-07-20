<template>
<div class="header">
    <left></left>
    <right class="right-header"></right>
</div>
</template>
<script setup lang="ts" name="layputHeader">
import Left from './components/left.vue';
import Right from './components/right.vue';


</script>
<style lang="scss" scoped>
.header{
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;

}
</style>