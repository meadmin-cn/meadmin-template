import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: 'componentLang',
    component: () => import('@/views/example/componentLang/index.vue'),
    meta: { title: '组件语言包' },
  },
];
