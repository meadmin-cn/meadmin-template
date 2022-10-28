import { useGlobalStore } from '@/store';
import { LoadingOptions } from 'element-plus';
import { throttle } from 'lodash-es';
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

export const loadingObject = {
  global: new Loading(
    (options?: LoadingOptions) => (loadingInstance = ElLoading.service(options)),
    () => loadingInstance.close(),
  ),
  layout:new Loading(
    (options?: LoadingOptions) => (useGlobalStore().loadingOptions = options ? reactive(options) : {}),
    () => (useGlobalStore().loadingOptions = undefined),
  ),
}

export function loading(options?: LoadingOptions, number = 1, mode:keyof typeof loadingObject = 'global') {
  const loading = loadingObject[mode]
  loading.loading(options, number);
  return loading;
}

export function closeLoading(force = false, number = 1, mode:keyof typeof loadingObject = 'global'): void {
  const loading = loadingObject[mode]
  if (force) {
    loading.forceClose();
    return;
  }
  loading.close(number);
}
