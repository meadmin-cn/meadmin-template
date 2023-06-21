import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { concatObjectValue } from '@/utils/helper';
export const routes: RouteRecordRaw[] = [
  {
    path: 'multilevel',
    component: Layout,
    meta: { title: '多级菜单' },
    children: concatObjectValue<RouteRecordRaw>(
      import.meta.glob('./multilevel/*.ts', { eager: true, import: 'routes' }),
    ),
  },
];
