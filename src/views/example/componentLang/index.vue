<template>
  <div class="component-lang">
    {{ t('切换语言查看效果') }}
    <br />
    {{ t('打开Network可以看到语言包请求') }}
  </div>
</template>

<script setup lang="ts" name="ComponentLang">
import { useLocalesI18n } from '@/locales/i18n';
const { t, loadRes } = useLocalesI18n({}, [(locale: string) => import(`./lang/${locale}.json`), 'compnentLang']);
await loadRes;//等语言包加载完毕后再渲染，需要包裹在Suspense下;
</script>
