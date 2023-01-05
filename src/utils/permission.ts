import { Layout, LayoutPage } from '@/router/constant';
import Page404 from '@/views/404.vue';
import { useUserStore } from '@/store';
import { RouteRecordRaw } from 'vue-router';
import { DefineComponent } from 'vue';
import log from './log';
import { mitter } from '@/event';
import EventEnum from '@/dict/eventEnmu';

/**
 * 用户是否具有权限
 * @param rules
 * @returns
 */
export function permission(rules?: string | string[]) {
  if (!rules) {
    return true;
  }
  if (typeof rules === 'string') {
    rules = [rules];
  }
  return useUserStore().rules!.some((rule) => rule === '*' || rules!.includes(rule));
}

export type DynamicViewsModules = Record<string, () => Promise<DefineComponent>>;
let dynamicViewsModules: DynamicViewsModules;
export function initDynamicViewsModules() {
  if (!dynamicViewsModules) {
    dynamicViewsModules = import.meta.glob('../views/**/*.{vue,tsx}') as Record<string, () => Promise<DefineComponent>>;
    mitter.emit(EventEnum.INIT_DYNAMIC_VIEWS_MODULES, dynamicViewsModules);
  }
}
//动态转换组件
export function transitionComponent(component: string) {
  if (component === 'Layout') {
    return Layout;
  }
  if (component === 'LayoutPage') {
    return LayoutPage;
  }
  const res =
    dynamicViewsModules['../views/' + component + '.vue'] || dynamicViewsModules['../views/' + component + '.tsx'];
  if (res) {
    return res;
  } else {
    log.warn('在src/views/下找不到`' + component + '.vue` 或 `' + component + '.tsx`, 请自行创建!');
    return Page404;
  }
}

/**
 * 过滤动态路由
 * @param routes
 * @param activeMenu
 * @returns
 */
export function filterAsyncRoutes(routes: RouteRecordRaw[], activeMenu?: string, dynamicImport?: boolean) {
  const res: RouteRecordRaw[] = [];
  routes.forEach((route) => {
    const tmp = { ...route };
    if (!route.meta || permission(route.meta.rule)) {
      if (route.meta?.hideMenu) {
        if (typeof route.meta.activeMenu === 'undefined' && activeMenu) {
          route.meta.activeMenu = activeMenu;
        }
      } else {
        activeMenu = route.meta?.activeMenu ?? route.path;
      }
      if (dynamicImport) {
        tmp.component = transitionComponent(route.component as unknown as string);
      }
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, activeMenu, dynamicImport);
      }
      res.push(tmp);
    }
  });
  return res;
}
