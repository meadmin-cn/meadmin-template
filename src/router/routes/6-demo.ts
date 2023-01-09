import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
export const routes: RouteRecordRaw[] = [
  {
    path: '/demo',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/demo/demo.vue'),
        meta: { title: '完整示例', icon: 'mel-icon-set-up' },
      },
    ],
    meta: { title: '完整示例', icon: 'mel-icon-set-up' },
  },
];
