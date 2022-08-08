import path from "path-browserify";
import { App, ComponentOptions } from "vue";
import { fileToHump } from '@/utils/helper';

//注册全局组件
export function installComponent(app: App) {
    const componentModules = import.meta.glob(['./core/*.{vue,ts}', './core/*/index.{vue,ts}'], {
        import: 'default',
        eager: true
    }) as Record<string, ComponentOptions>;
    for (const key in componentModules) {
        app.component(fileToHump(path.relative('/core', '/' + key)), componentModules[key]);
    }
}