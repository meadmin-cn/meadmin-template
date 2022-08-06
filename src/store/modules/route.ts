import { filterAsyncRoutes } from '@/utils/permison';
import useUserStore from './user';
import { constantRoutes , asyncRoutes } from '@/router';
import { RouteRecordRaw } from 'vue-router';

export default defineStore('route',{
    state: ()=>({
        addRoutes:[] as RouteRecordRaw[],
    noCacheFullPath:[/redirect\/.*/] as Array<string|RegExp>
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
        },
        setNoCache(fullPath:string){
            if(!this.noCacheFullPath.includes(fullPath)){
                this.noCacheFullPath.push(fullPath)
            }
        },
        removeNoCache(fullPath:string){
            const index = this.noCacheFullPath.indexOf(fullPath);
            if(index > -1){
                this.noCacheFullPath.splice(index,1)
            }
        }
    }
});