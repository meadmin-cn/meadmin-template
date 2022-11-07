import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';
export const routes: RouteRecordRaw[] = [
  {
    path: '/page404',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/404.vue'),
        meta: { title: '404页面', icon: 'mel-icon-set-up' },
      },
    ],
    meta: { title: '404页面', icon: 'mel-icon-set-up' },
  },
];