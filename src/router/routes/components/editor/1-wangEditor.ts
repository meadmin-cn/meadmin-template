import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: 'wangEditor',
    component: async () => await import('@/views/components/editor/wangEditor.vue'),
    meta: { title: 'wangEditor' },
  },
];
