import { PageEnum } from '@/enums/pageEnum';
import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';
import { concatObjectValue } from '@/utils/helper';
export const routes: RouteRecordRaw[] = [
  {
    path: PageEnum.HOME,
    redirect: PageEnum.HOME + '/index',
    component: Layout,
    children: concatObjectValue<RouteRecordRaw>(
      import.meta.glob('./dashboard/*.ts', { eager: true, import: 'routes' })
    ),
    meta: { title: '' }
  }
];
