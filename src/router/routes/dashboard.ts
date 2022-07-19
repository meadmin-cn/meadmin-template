import { PageEnum } from "@/enums/pageEnum";
import { RouteRecordRaw } from "vue-router";
import Layout from '@/layout/index.vue';
export const routes: RouteRecordRaw[] = [
    {
        path: PageEnum.HOME,
        redirect: PageEnum.HOME+'/index',
        component: Layout,
        meta: { title: '控制台' },
        children:[
            {
                path:'index',
                component: () => import('@/views/dashboard/index.vue'),
                meta: { title: '控制台',hideMenu:true},
            }
        ]
    }
];