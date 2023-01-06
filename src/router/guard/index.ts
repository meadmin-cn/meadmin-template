import type { NavigationFailure, Router } from 'vue-router';
import { PageEnum } from '@/dict/pageEnum';
import { useUserStore } from '@/store';
import { event, mitter } from '@/event';
import { remove, start } from '@/utils/nProgress';
import { closeLoading, loading } from '@/utils/loading';
// Don't change the order of creation
export function setupRouterGuard(router: Router) {
  createPermissionGuard(router);
  createProgressGuard(router);
  triggerRouteChange(router);
}

/**
 * 处理页面权限验证
 * @param router
 */
function createPermissionGuard(router: Router) {
  const userStore = useUserStore();
  router.beforeEach(async (to) => {
    if (to.path !== PageEnum.LOGIN && !userStore.token) {
      await router.replace({ path: PageEnum.LOGIN, query: { redirect: to.fullPath } });
      return false;
    } else if (to.path === PageEnum.LOGIN && userStore.token) {
      await router.replace(PageEnum.HOME);
      return false;
    }
  });
}

// 处理页面加载进度条和loading
function createProgressGuard(router: Router) {
  router.beforeEach(async (to, from) => {
    remove();
    start(to.matched.length);
    closeLoading(true, from.matched.length, 'layout');
    loading({}, to.matched.length, 'layout');
    return true;
  });
}

// 通知路由变化需要放在最后调用
function triggerRouteChange(router: Router) {
  router.beforeEach(async (to, from) => {
    // 通知路由变化开始
    mitter.emit(event.BEFORE_ROUTE_CHANGE, { to, from });
    return true;
  });
  router.afterEach((to, from, failure) => {
    mitter.emit(event.AFTER_ROUTE_CHANGE, { to, from, failure: failure as NavigationFailure | undefined });
  }); // 通知路由变化完成
}
