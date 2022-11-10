import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
export const routes: RouteRecordRaw[] = [
  {
    path: '/customForm',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/customForm.vue'),
        meta: { title: '自定义表单', icon: 'mel-icon-set-up' },
      },
    ],
    meta: { title: '自定义表单', icon: 'mel-icon-set-up' },
  },
];
