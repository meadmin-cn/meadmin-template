<template>
  <div class="test">test vue</div>
</template>

<script setup lang="ts" name="test">
import { useLocalesI18n } from '@/locales/i18n';
console.log('test setup');
let { t } = useLocalesI18n({}, [(locale: string) => import(`./lang/${locale}.ts`), 'login']);

onMounted(() => {
  console.log('test mounted')
})
</script>
<style lang="scss" scoped>
.test {}
</style>