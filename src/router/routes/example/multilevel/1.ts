import { RouteRecordRaw } from 'vue-router';
import { LayoutPage } from '@/router/constant';
export const routes: RouteRecordRaw[] = [
  {
    path: '1',
    component: LayoutPage,
    meta: { title: '多级菜单1' },
    children: [
      {
        path: '1-1',
        component: LayoutPage,
        meta: { title: '多级菜单1-1', alwaysShow: true },
        redirect: '/example/multilevel/1/1-1/1-1-1',
        children: [
          {
            path: '1-1-1',
            component: () => import('@/views/dashboard/index.vue'),
            meta: { title: '多级菜单1-1-1' },
          },
          {
            path: '/test/componentLang',
            component: async () => await import('@/views/example/componentLang/index.vue'),
            meta: { title: '组件语言包' },
          },
        ],
      },
      {
        path: '1-2',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '多级菜单1-2' },
      },
    ],
  },
];
