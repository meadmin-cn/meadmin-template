import { useGlobalStore } from '@/store';
import { LoadingOptions } from 'element-plus';
import { throttle } from 'lodash-es';
let loadingInstance: ReturnType<typeof ElLoading.service>;
export type LoadingMode = 'auto'|'global'|'page'
class Loading {
  constructor(private execLoading: (options?: LoadingOptions) => void, private execClose: () => void) {
    this.execLoading = execLoading;
    this.execClose = execClose;
  }
  private number = 0;
  loading(options?: LoadingOptions, number = 1) {
    this.number += number;
    this.execLoading(options);
  }
  throttleClose = throttle(
    function (this: Loading) {
      if (this.number <= 0) {
        this.execClose();
        this.number = 0;
      }
    },
    220,
    { leading: false },
  );
  close(number = 1) {
    if (this.number > 0) {
      this.number -= number;
      this.throttleClose();
    }
  }
  forceClose() {
    this.number = 0;
    loadingInstance.close();
    this.throttleClose.cancel();
  }
}
export const globalLoading = new Loading(
  (options?: LoadingOptions) => (loadingInstance = ElLoading.service(options)),
  () => loadingInstance.close(),
);
export const layoutLoading = new Loading(
  (options?: LoadingOptions) => (useGlobalStore().loadingOptions = options ? reactive(options) : {}),
  () => (useGlobalStore().loadingOptions = undefined),
);
function getLoading(mode:LoadingMode) {
  if (mode === 'page' || ( mode ==='auto' && useGlobalStore().layoutLoaded)) {
    return layoutLoading;
  }
  return globalLoading;
}

export function loading(options?: LoadingOptions, number = 1, mode:LoadingMode = 'auto'): void {
  getLoading(mode).loading(options, number);
}


export function closeLoading(force = false, number = 1, mode:LoadingMode = 'auto'): void {
  if (force) {
    getLoading(mode).forceClose();
    return;
  }
  getLoading(mode).close(number);
}
