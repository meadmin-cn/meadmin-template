<template>
    <el-dropdown class="meTranslation" max-height="500px">
        <me-icon-translation class="icon"></me-icon-translation>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item :disabled="$i18n.locale==item.locale" @click="setI18nLanguage(item.locale)" v-for="item in localeConfig.localeList">{{$t(item.text)}}</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>
<script setup lang="ts" name="meTranslation">
import {localeConfig} from '@/config';
import {setI18nLanguage} from "@/locales/i18n";
</script>
<style lang="scss" scoped>
.meTranslation {
    cursor:pointer;/*鼠标变小手*/
    line-height: 100%;
    .icon{
      font-size: 1.4em;
    }
}
</style>