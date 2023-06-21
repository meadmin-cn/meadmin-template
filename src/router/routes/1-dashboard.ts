import { PageEnum } from '@/dict/pageEnum';
import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { concatObjectValue } from '@/utils/helper';
export const routes: RouteRecordRaw[] = [
  {
    path: PageEnum.HOME,
    redirect: PageEnum.HOME + '/index1',
    component: Layout,
    children: [
      {
        path: 'index1',
        redirect: PageEnum.HOME + '/index1/index',
        component: Layout,
        children: concatObjectValue<RouteRecordRaw>(
          import.meta.glob('./dashboard/*.ts', { eager: true, import: 'routes' }),
        ),
        meta: { title: '首页2' },
      },
    ],
    meta: { title: '首页1' },
  },
];
