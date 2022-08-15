import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { PageEnum } from '@/enums/pageEnum';
import { App } from 'vue';
import { setupRouterGuard } from './guard';
import { concatObjectValue } from '@/utils/helper';
import Layout from '@/layout/index.vue';
export const asyncRoutes = concatObjectValue<RouteRecordRaw>(
  import.meta.glob('./routes/*.ts', { eager: true, import: 'routes' })
);
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: PageEnum.HOME,
    meta: {
      hideMenu: true,
      title: '首页'
    }
  },
  {
    path: PageEnum.LOGIN,
    component: async () => await import('@/views/login/index.vue'),
    meta: {
      hideMenu: true,
      title: '登录'
    }
  },
  {
    path: '/redirect',
    component: Layout,
    children: [
      {
        name: 'redirect',
        path: '/redirect/:path(.*)',
        component: async () => await import('@/views/redirect.vue')
      }
    ],
    meta: {
      hideMenu: true,
      title: ''
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: async () => await import('@/views/404.vue'),
    meta: { hideMenu: true, title: '404' }
  }
];
export const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
});

/**
 *
 * @param app
 * @param addRoutes
 */
export function installRoute(app: App) {
  setupRouterGuard(router);
  app.use(router);
}
