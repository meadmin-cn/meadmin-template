import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { concatObjectValue } from '@/utils/helper';
export const routes: RouteRecordRaw[] = [
  {
    path: '/components',
    component: Layout,
    children: concatObjectValue<RouteRecordRaw>(
      import.meta.glob('./components/*.ts', { eager: true, import: 'routes' }),
    ),
    meta: { title: '组件', icon: 'mel-icon-files' },
  },
];
