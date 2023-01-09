import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: 'dialog',
    component: () => import('@/views/components/dialog.vue'),
    meta: { title: '弹窗' },
  },
];
