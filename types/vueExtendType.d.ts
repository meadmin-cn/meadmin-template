import {MessageImport} from '@/locales/I18n';
declare module "@vue/runtime-core" {
    export declare interface ComponentOptionsBase{
        langImport?:MessageImport
    }
}
export { };