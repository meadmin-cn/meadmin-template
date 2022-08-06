<template>
    <me-keep-alive v-if="keepAlive" v-bind="keepAlive">
        <component :is="componentIs" :key="$route.fullPath" v-bind="$attrs"></component>
    </me-keep-alive>
    <component v-else :is="componentIs" :key="componentKey"  v-bind="$attrs"></component>
</template>
<script setup lang="ts">
import { PropType, Ref } from 'vue';
import { MeKeepAliveProps } from './meKeepAlive';
import { useGetLoadMessagePromison } from '@/locales/i18n';
const route = useRoute();
const getLoadMessagePromison = useGetLoadMessagePromison();
const props = defineProps({
    is: {
        required: true,
    },
    keepAlive: Object as PropType<MeKeepAliveProps>,
    componentKey: String,
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
