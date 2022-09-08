import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: 'table',
    component: () => import('@/views/components/table.vue'),
    meta: { title: '表格' },
  },
];
