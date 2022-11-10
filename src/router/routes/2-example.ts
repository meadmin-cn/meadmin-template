import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { concatObjectValue } from '@/utils/helper';
export const routes: RouteRecordRaw[] = [
  {
    path: '/example',
    component: Layout,
    children: concatObjectValue<RouteRecordRaw>(import.meta.glob('./example/*.ts', { eager: true, import: 'routes' })),
    meta: { title: '示例', icon: 'mel-icon-promotion' },
  },
];
