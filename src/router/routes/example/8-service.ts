import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: 'service',
    component: () => import('@/views/example/service/index.vue'),
    meta: { title: '函数式组件(动态组件方式生成)' },
  },
];
