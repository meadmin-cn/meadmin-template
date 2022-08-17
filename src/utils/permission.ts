import { useUserStore } from '@/store';
import { RouteRecordRaw } from 'vue-router';

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

/**
 * 过滤动态路由
 * @param routes
 * @param activeMenu
 * @returns
 */
export function filterAsyncRoutes(routes: RouteRecordRaw[], activeMenu?: string) {
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
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, activeMenu);
      }
      res.push(tmp);
    }
  });

  return res;
}
