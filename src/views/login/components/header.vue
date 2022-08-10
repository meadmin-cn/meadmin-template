<template>
    <div class="header">
        <me-dark-switch></me-dark-switch>
        <me-size-select></me-size-select>
        <me-locale-select></me-locale-select>
    </div>
</template>
<script setup lang="ts" name="Header">
</script>
<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 12px;
}
</style>