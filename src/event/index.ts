/**
 * 事件总线
 */
import Mitt from '@/utils/mitt';
import { NavigationFailure, RouteLocationNormalized } from "vue-router";
import eventEnmu from '@/enums/eventEnmu';
import { App } from "vue";
import { Composer } from 'vue-i18n';
type Events = {//事件总线
    [eventEnmu.start]: App,
    [eventEnmu.ready]: App,
    [eventEnmu.beforeRouteChange]: { to: RouteLocationNormalized, from: RouteLocationNormalized },//路由变更前
    [eventEnmu.afterRouteChange]: { to: RouteLocationNormalized, from: RouteLocationNormalized, failure: void | NavigationFailure | undefined },//路由变更后
    [eventEnmu.beforeLocalChange]: { locale: string, i18n: Composer<unknown, unknown, unknown> },//全局语言变更前
};
const mitter = Mitt<Events & Omit<{ [key in eventEnmu]: void }, keyof Events>>(); // inferred as Emitter<Events>
export { eventEnmu as event, mitter }