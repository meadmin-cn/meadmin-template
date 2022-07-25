import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
    {
        path:'index1',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '测试菜单1'},
    },
    {
        path:'index2',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '测试菜单2',icon:"el-icon-setting"},
    },
    {
        path:'index3',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '测试菜单3'},
    },
    {
        path:'index4',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '测试菜单4'},
    },
    {
        path:'index5',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '测试菜单5'},
    },
    {
        path:'index6',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '测试菜单6'},
    }
];