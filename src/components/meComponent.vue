<template>
    <keep-alive v-if="keepAlive">
        <component :is="componentIs" :key="componentKey" v-bind="$attrs"></component>
    </keep-alive>
    <component v-else :is="componentIs" :key="componentKey" v-bind="$attrs"></component>
</template>
<script setup lang="ts">
import { PropType, Ref } from 'vue';
import { useGetLoadMessagePromison } from '@/locales/i18n';
const getLoadMessagePromison = useGetLoadMessagePromison();
const props = defineProps({
    is: {
        required: true,
    },
    keepAlive: Object as PropType<{
        include?: string | string[] | RegExp,
        exclude?: string | string[] | RegExp,
        max?: number | string
    }>,
    componentKey: [Number, String, Symbol],
});
let componentIs: Ref<any> = ref(undefined);
watch(() => props.is, async (is) => {
    if (is) {
        await Promise.allSettled(getLoadMessagePromison(is as any));//自动加载语言包
        componentIs.value = is;
    }
}, { immediate: true })
</script>
<style lang="scss" scoped>
</style>
