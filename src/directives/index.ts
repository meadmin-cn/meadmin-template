import { fileToHump } from "@/utils/helper";
import path from "path-browserify";
import { App, Directive } from "vue";
//注册全局指令
export function installDirective(app: App) {
    const directiveModules = import.meta.glob(['./core/*.ts', './core/*/index.ts'], {
        import: 'default',
        eager: true
    }) as Record<string, Directive>;
    for (const key in directiveModules) {
        app.directive(fileToHump(path.relative('/core', '/' + key)), directiveModules[key]);
    }
}