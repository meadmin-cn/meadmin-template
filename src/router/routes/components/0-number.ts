import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: 'number',
    component: () => import('@/views/components/number.vue'),
    meta: { title: '数字动画' },
  },
];
