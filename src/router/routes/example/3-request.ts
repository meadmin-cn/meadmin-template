import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: 'request',
    component: async () => await import('@/views/example/request.vue'),
    meta: { title: '请求示例' },
  },
];
