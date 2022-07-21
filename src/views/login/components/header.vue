<template>
    <div class="header">
        <me-dark-switch></me-dark-switch>
        <me-size-select></me-size-select>
        <me-locale-select></me-locale-select>
    </div>
</template>
<script setup lang="ts" name="Header">
import MeDarkSwitch from '@/components/meDarkSwitch.vue';
import MeLocaleSelect from '@/components/meLocaleSelect.vue';
import MeSizeSelect from '@/components/meSizeSelect.vue';
</script>
<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 12px;

    >div {
        padding: 0 12px
    }
}
</style>