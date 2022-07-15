<template>
    <keep-alive v-if="keepAlive">
        <component ref="refComponent"  :is="components" :key="componentKey" v-bind="$attrs"></component>
    </keep-alive>
    <component v-else ref="refComponent"  :is="components" :key="componentKey" v-bind="$attrs"></component>

</template>
<script setup lang="ts">
import { PropType, Ref, WritableComputedRef,resolveDynamicComponent,createApp   } from 'vue';
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
let refComponent = ref(null)
watch(() => props.is, (is) => {
    if (is) {
        console.log(is);
        console.log('resolve',createApp().component('aa',is.type))
        if (typeof is == 'object' && typeof (is as {type:any}).type == 'object' && (is as {type:any}).type.langImport) {
            (async () => {
                try {
                    await loadMessage((globaleI18n.global.locale as WritableComputedRef<string>).value, (is as {type:any}).type.langImport);
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
