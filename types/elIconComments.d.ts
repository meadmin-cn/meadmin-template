import { icons } from '@element-plus/icons-vue/global';
declare module "@vue/runtime-core" {
    type GlobalComponentsTypes = {
        [k in `ElIcon${keyof (typeof icons)}`]: Icon
    }
    interface GlobalComponents extends GlobalComponentsTypes {

    }
}
export { };