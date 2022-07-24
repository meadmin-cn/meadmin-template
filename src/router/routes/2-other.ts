import { PageEnum } from "@/enums/pageEnum";
import { RouteRecordRaw } from "vue-router";
import Layout from '@/layout/index.vue';
import { concatObjectValue } from "@/utils/helper";
export const routes: RouteRecordRaw[] = [
    {
        path: '/other',
        redirect: '/other/index',
        component: Layout,
        children:concatObjectValue<RouteRecordRaw>(import.meta.glob('./other/*.ts', { eager: true,import:'routes' })),
        meta:{title:'其他'}
    }
];