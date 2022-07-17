<template>
    <div class="el-switch" @click="isDark = !isDark" :class="{ 'is-checked': isDark }">
        <span class="el-switch__core">
            <div class="el-switch__action">
                <svg-icon-sunny class="icon" v-show="!isDark"></svg-icon-sunny>
                <svg-icon-moon class="icon" v-show="isDark"></svg-icon-moon>
            </div>
        </span>
    </div>
</template>

<script setup lang="ts" name="meDarkSwitch">
let isDark = ref(false);
watchEffect(() => {
    if (isDark.value) {
        document.getElementsByTagName('html')[0].classList.add('dark');
    } else {
        document.getElementsByTagName('html')[0].classList.remove('dark');
    }
})
</script>
<style lang="scss" scoped>
.el-switch{
    .el-switch__core{
        border-color: var(--el-switch-border-color, var(--el-switch-off-color)) !important;
        background-color: var(--el-switch-off-color) !important;
        .el-switch__action{
            background-color: var(--el-bg-color);
            position: relative;
            color: var(--text-color-light);
            .icon{
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
}
</style>