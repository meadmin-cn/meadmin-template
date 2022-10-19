import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: 'https://github.com/meadmin-cn/meadmin-template',
    component: () => import('@/views/404.vue'),
    meta: { title: '外链', isLink: true },
  },
];
