<template>
<div class="header">
    <me-dark-switch></me-dark-switch>
    <me-translation></me-translation>
</div>
</template>
<script setup lang="ts" name="header">
import MeDarkSwitch from '@/components/meDarkSwitch.vue';
import MeTranslation from '../../../components/meTranslation.vue';


</script>
<style lang="scss" scoped>
.header{
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 12px;
    >div{
        padding:0 12px
    }
}
</style>