import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { PageEnum } from '@/enums/pageEnum';
import { App } from "vue";
const baseRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: PageEnum.HOME
    },
    {
        path: PageEnum.LOGIN,
        component: () => import('@/views/Login.vue'),
        meta: { title: '登录', noBack: true }
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/404.vue'),
        meta: { title: '404' }
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes: baseRoutes
});


export function installRoute(app: App) {
    app.use(router);
    setupRouterGuard(router);
}