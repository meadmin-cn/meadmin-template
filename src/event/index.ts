/**
 * 事件总线
 */
import Mitt from '@/utils/mitt';
import { NavigationFailure, RouteLocationNormalized } from 'vue-router';
import EventEnum from '@/dict/eventEnmu';
import { App } from 'vue';
import { Composer } from 'vue-i18n';
import { DynamicViewsModules } from '@/utils/permission';
interface Events {
  // 事件总线
  [EventEnum.START]: App;
  [EventEnum.READY]: App;
  [EventEnum.BEFORE_ROUTE_CHANGE]: {
    to: RouteLocationNormalized;
    from: RouteLocationNormalized;
  }; // 路由变更前
  [EventEnum.AFTER_ROUTE_CHANGE]: {
    to: RouteLocationNormalized;
    from: RouteLocationNormalized;
    failure: NavigationFailure | undefined;
  }; // 路由变更后
  [EventEnum.BEFORE_LOCAL_CHANGE]: {
    locale: string;
    i18n: Composer<unknown, unknown, unknown>;
  }; // 全局语言变更前
  [EventEnum.INIT_DYNAMIC_VIEWS_MODULES]: DynamicViewsModules;
}
const mitter = Mitt<Events & Omit<{ [key in EventEnum]: undefined }, keyof Events>>(); // inferred as Emitter<Events>
export { EventEnum as event, mitter };
