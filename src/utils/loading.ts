import { ElLoading } from 'element-plus';
import { throttle } from 'lodash-es';

let number = 0;
let loadingInstance: ReturnType<typeof ElLoading.service>;

//全局加载
export function loading(options?: Parameters<typeof ElLoading.service>[0]): void {
    number++;
    loadingInstance = ElLoading.service(options);
}

//关闭操作
const close = throttle(() => {
    if (number <= 0) {
        loadingInstance.close();
        number = 0;
    }
}, 220, { leading:false });//220毫秒后关闭防闪烁

//关闭加载会判断已展示加载次数 当全部关闭后执行关闭操作
export function closeLoading(force: boolean = false): void {
    if (number <= 0) {
        return;
    }
    if (force) {
        loadingInstance.close();
        number = 0;
        close.cancel();
        return;
    }
    number--;
    close();
}