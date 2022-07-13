<template>
    <keep-alive v-if="keepAlive">
        <component  :is="components" :key="componentKey" v-bind="$attrs"></component>
    </keep-alive>
    <component v-else  :is="components" :key="componentKey" v-bind="$attrs"></component>

</template>
<script setup lang="ts">
import { PropType, Ref, WritableComputedRef } from 'vue';
import { loadMessage, globaleI18n } from '@/locales/I18n';
const props = defineProps({
    is: {
        required: true,
    },
    keepAlive:Object as PropType<{
        include?:string|string[]|RegExp,
        exclude?:string|string[]|RegExp,
        max?:number|string
    }>,
    componentKey:[Number,String,Symbol],
});
let components:Ref<any> = ref(undefined);
watch(() => props.is, (is) => {
    if (is) {
        if (typeof props.is == 'object' && typeof is.type == 'object' && is.type.langImport) {
            (async () => {
                try {
                    await loadMessage((globaleI18n.global.locale as WritableComputedRef<string>).value, is.type.langImport);
                } catch (e) {
                    console.log(e);
                }
                components.value = is;
            })()
        }else{
            components.value = is;

        }
    }
},{immediate:true})

</script>
<style lang="scss" scoped>
</style>
