/**
 * 事件总线
 */
import Mitt from '@/utils/mitt';
import { NavigationFailure, RouteLocationNormalized } from "vue-router";
import event from '@/enums/event';
import { App } from "vue";
import { I18n } from 'vue-i18n';
type Events = {//事件总线
    [event.ready]: App
    [event.beforeRouteChange]: {to:RouteLocationNormalized,from:RouteLocationNormalized},//路由变更前
    [event.afterRouteChange]: {to:RouteLocationNormalized,from:RouteLocationNormalized,failure:void | NavigationFailure | undefined},//路由变更后
    [event.beforeLogin]: void,//登录成功前
    [event.afterLogin]: void,//登录成功后
    [event.beforeLogout]: void,//退出前
    [event.aftreLogout]: void,//退出后
    [event.beforeLocalChange]:{locale:string,i18n:I18n<unknown, unknown, unknown, boolean>}//全局语言变更前
};
const mitter = Mitt<Events>(); // inferred as Emitter<Events>
export { event, mitter }