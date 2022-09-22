import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';
export const routes: RouteRecordRaw[] = [
  {
    path: '/rolePermissions',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/rolePermissions/rolePermissions.vue'),
        meta: { title: '角色权限', icon: 'mel-icon-set-up' },
      },
    ],
    meta: { title: '角色权限', icon: 'mel-icon-set-up' },
  },
];
