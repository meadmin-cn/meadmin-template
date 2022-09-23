import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: 'vxeTable',
    component: () => import('@/views/components/vxeTable/index.vue'),
    meta: { title: 'vxeTable' },
  },
];
