import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: 'modelObject',
    component: () => import('@/views/example/modelObject/index.vue'),
    meta: { title: 'v-model对象映射示例' },
  },
];
