import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: 'searchForm',
    component: () => import('@/views/components/searchForm/searchForm.vue'),
    meta: { title: '筛选表单' },
  },
];
