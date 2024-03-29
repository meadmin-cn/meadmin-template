import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: 'index',
    component: () => import('@/views/dashboard/dashboard.vue'),
    meta: { title: '首页', affix: true, icon: 'me-icon-dashboard' },
  },
];
