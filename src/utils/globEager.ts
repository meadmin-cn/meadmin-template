import { RouteRecordRaw } from "vue-router";

export function globEagerReduce<R extends any>(modules: Record<string, any>, callbackFn: (previousValue, currentValue, currentKey, object) => R, initialValue: R): R {
    for (const i in modules) {
        initialValue = callbackFn(modules[i], initialValue, i, modules);
    }
    return initialValue
}

//自动加载路由文件
export function globEagerRoute(modules: Record<string, any>): RouteRecordRaw[] {
    return globEagerReduce(modules, (previousValue, currentValue: []) => {
        return currentValue.concat(previousValue.default || []);
    }, []);
}