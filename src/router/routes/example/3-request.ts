import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: 'request',
    component: () => import('@/views/example/request.vue'),
    meta: { title: '请求示例' },
  },
];
