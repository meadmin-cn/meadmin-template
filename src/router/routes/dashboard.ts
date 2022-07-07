import { PageEnum } from "@/enums/pageEnum";
import { RouteRecordRaw } from "vue-router"
export const routes:RouteRecordRaw[] = [
    {
        path:PageEnum.HOME,
        component:()=>import('@/views/dashboard/index.vue'),
        meta:{title:'控制台'}
    }
];