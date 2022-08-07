import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
    {
        path: 'index',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '控制台', hideMenu: true, affix: true },
    }
];