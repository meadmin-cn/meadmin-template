<template>
    <div @click="settingStore.isDark = !settingStore.isDark"
        :class="{ [`${elNamespace}-switch`]: true, 'is-checked': settingStore.isDark }">
        <span :class="`${elNamespace}-switch__core`">
            <div :class="`${elNamespace}-switch__action`">
                <me-icon-sunny class="icon" v-show="!settingStore.isDark"></me-icon-sunny>
                <me-icon-moon class="icon" v-show="settingStore.isDark"></me-icon-moon>
            </div>
        </span>
    </div>
</template>
<script setup lang="ts" name="meDarkSwitch">
import { useSettingStore } from '@/store';
import { useGlobalConfig } from 'element-plus';
let elNamespace = useGlobalConfig('namespace');
const settingStore = useSettingStore();
</script>
<style lang="scss" scoped>
@use 'element-plus/theme-chalk/src/mixins/function.scss' as *;
@use 'element-plus/theme-chalk/src/mixins/config.scss' as *;

.#{$namespace}-switch {
    .#{$namespace}-switch__core {
        border-color: getCssVar('switch-off', 'color')!important;
        background-color: getCssVar('switch-off', 'color')!important;

        .#{$namespace}-switch__action {
            background-color: getCssVar('bg', 'color');
            position: relative;
            color: getCssVar('text-color', 'primary') !important;

            .icon {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
}
</style>