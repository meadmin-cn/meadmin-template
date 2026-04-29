import type { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: 'selectIcon',
    component: () => import('@/views/components/selectIcon.vue'),
    meta: { title: '图标选择' },
  },
];
