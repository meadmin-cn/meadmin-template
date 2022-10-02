import { useGlobalStore } from '@/store';
import { LoadingOptions } from 'element-plus';
import { throttle, transform } from 'lodash-es';
let loadingInstance: ReturnType<typeof ElLoading.service>;
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
const globalLoading = new Loading(
  (options?: LoadingOptions) => (loadingInstance = ElLoading.service(options)),
  () => loadingInstance.close(),
);
const layoutLoading = new Loading(
  (options?: LoadingOptions) => (useGlobalStore().loadingOptions = options ? reactive(options) : {}),
  () => (useGlobalStore().loadingOptions = undefined),
);
function getLoading(forceGlobal = false) {
  if (!forceGlobal && useGlobalStore().layoutLoaded) {
    return layoutLoading;
  }
  return globalLoading;
}

export function loading(options?: LoadingOptions, number = 1, forceGlobal = false): void {
  getLoading(forceGlobal).loading(options, number);
}

export function closeLoading(force = false, number = 1, forceGlobal = false): void {
  if (force) {
    getLoading(forceGlobal).forceClose();
    return;
  }
  getLoading(forceGlobal).close(number);
}
