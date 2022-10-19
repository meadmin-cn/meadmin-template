import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: 'permission',
    component: () => import('@/views/example/permission.vue'),
    meta: { title: '权限' },
  },
];
