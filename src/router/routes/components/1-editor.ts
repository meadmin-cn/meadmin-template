import { RouteRecordRaw } from 'vue-router';
import { LayoutPage } from '@/router/constant';
import { concatObjectValue } from '@/utils/helper';
export const routes: RouteRecordRaw[] = [
  {
    path: 'editor',
    component: LayoutPage,
    children: concatObjectValue<RouteRecordRaw>(import.meta.glob('./editor/*.ts', { eager: true, import: 'routes' })),
    meta: { title: '编辑器', alwaysShow: true },
  },
];
