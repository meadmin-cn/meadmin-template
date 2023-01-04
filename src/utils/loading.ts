import { LoadingOptions } from 'element-plus';
import { throttle } from 'lodash-es';
const loadingInstance: Record<string, ReturnType<typeof ElLoading.service>> = {};
class Loading {
  constructor(private execLoading: (options?: LoadingOptions) => void, private execClose: () => void) {
    this.execLoading = execLoading;
    this.execClose = execClose;
  }
  public number = 0;
  public loading(options?: LoadingOptions, number = 1) {
    this.number += number;
    this.execLoading(options);
  }
  public throttleClose = throttle(
    function (this: Loading) {
      if (this.number <= 0) {
        this.execClose();
        this.number = 0;
      }
    },
    220,
    { leading: false },
  );
  public close(number = 1) {
    if (this.number > 0) {
      this.number -= Math.min(this.number, number);
      this.throttleClose();
    } else {
      this.forceClose();
    }
  }
  public forceClose() {
    this.number = 0;
    this.execClose();
    this.throttleClose.cancel();
  }
}

export const loadingObject = {
  global: new Loading(
    (options?: LoadingOptions) => (loadingInstance.global = ElLoading.service(options)),
    () => loadingInstance.global?.close(),
  ),
  layout: new Loading(
    (options?: LoadingOptions) =>
      (loadingInstance.layout = ElLoading.service(Object.assign({ target: '#me-main' }, options))),
    () => loadingInstance.layout?.close(),
  ),
};

export function loading(options?: LoadingOptions, number = 1, mode: keyof typeof loadingObject = 'global') {
  const loading = loadingObject[mode];
  loading.loading(options, number);
  return loading;
}

export function closeLoading(force = false, number = 1, mode: keyof typeof loadingObject = 'global'): void {
  const loading = loadingObject[mode];
  if (force) {
    loading.forceClose();
    return;
  }
  loading.close(number);
}
