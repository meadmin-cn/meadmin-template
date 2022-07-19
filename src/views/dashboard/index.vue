<script setup lang="ts" name="Index">
import { useLocalesI18n } from '@/locales/i18n';
let { t } = useLocalesI18n({}, [(locale: string) => import(`@/views/login/lang/${locale}.ts`), 'login'])

</script>

<template>
    <div class="index">
        控制台
    </div>
</template>

<style lang="scss" scoped>
.index {}
</style>