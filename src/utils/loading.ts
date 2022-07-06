import { ElLoading } from 'element-plus';
import {ToastOptions} from "vant/lib/toast/types";
import throttle from './throttle';
let number = 0;
export function loading(options: string | ToastOptions = '' ){
    number++;
    if(typeof options =='string'){
        options = {message:options};
    }
    Toast.loading(Object.assign({
        forbidClick: true,
        duration:0,
        overlay:true
    },options))
}
const close = throttle(()=>{
    if(number<=0){
        Toast.clear();
        number = 0;
    }
},220);//220毫秒后关闭防闪烁

export function closeLoading(force:boolean = false):void{
    if(number <=0){
        return;
    }
    if(force){
        Toast.clear();
        number = 0;
        close.clear();
        return;
    }
    number--;
    close();
}