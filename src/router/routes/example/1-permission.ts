import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: 'permission',
    component: async () => await import('@/views/example/permission.vue'),
    meta: { title: '权限' }
  }
];
