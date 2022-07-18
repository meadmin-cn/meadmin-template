<template>
    <div class="el-switch" @click="isDark = !isDark" :class="{ 'is-checked': isDark }">
        <span class="el-switch__core">
            <div class="el-switch__action">
                <me-icon-sunny class="icon" v-show="!isDark"></me-icon-sunny>
                <me-icon-moon class="icon" v-show="isDark"></me-icon-moon>
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
@use 'element-plus/theme-chalk/src/mixins/function.scss' as *;
.el-switch{
    .el-switch__core{
        border-color: getCssVar('switch-off','color');
        background-color: getCssVar('switch-off','color');
        .el-switch__action{
            background-color: getCssVar('bg','color');
            position: relative;
            color: getCssVar('text-color','primary');
            .icon{
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
}
</style>