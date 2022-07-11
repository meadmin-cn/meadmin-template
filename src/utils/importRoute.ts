import { RouteRecordRaw } from "vue-router";
import { objectRreduce } from "./helper";

//自动加载路由文件
export function importRoute(modules: Record<string, any>) {
    return objectRreduce(modules, (currentValue, previousValue) => {
        return currentValue.concat(previousValue.routes || []);
    }, [] as RouteRecordRaw[]);
}