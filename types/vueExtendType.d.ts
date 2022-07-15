import {MessageImport} from '@/locales/lang';
declare module "@vue/runtime-core" {
    export declare interface ComponentOptionsBase{
        langImport?:MessageImport
    }
}
export { };