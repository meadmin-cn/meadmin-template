import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: 'imageViewer',
    component: () => import('@/views/components/imageViewer.vue'),
    meta: { title: '图片预览' },
  },
];
