import { filterAsyncRoutes } from '@/utils/permison';
import useUserStore from './user';
import { constantRoutes , asyncRoutes } from '@/router';
import { RouteRecordRaw } from 'vue-router';

export default defineStore('route',{
    state: ()=>({
        addRoutes:[] as RouteRecordRaw[]
    }),
    getters:{
        routes:(state)=>constantRoutes.concat(state.addRoutes)
    },
    actions:{
        generateRoutes(){
            if(useUserStore().rules){
               this.addRoutes =  markRaw(filterAsyncRoutes(asyncRoutes));
            }
            return this.addRoutes;   
        }
    }
});