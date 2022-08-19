import { RouteRecordRaw, RouterView } from 'vue-router';
import LayoutPage from '@/layout/components/page.vue';
import { concatObjectValue } from '@/utils/helper';
export const routes: RouteRecordRaw[] = [
  {
    path: 'multilevel',
    component: LayoutPage,
    meta: { title: '多级菜单' },
    children: concatObjectValue<RouteRecordRaw>(
      import.meta.glob('./multilevel/*.ts', { eager: true, import: 'routes' }),
    ),
  },
];
