import type { DefineComponent,defineComponent } from 'vue'
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        SvgIconAdd:Icon
    }
}
export {};