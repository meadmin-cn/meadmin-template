import { pauseTracking, resetTracking } from '@vue/reactivity';

export function warn(msg: string, ...args: any[]) {
  pauseTracking();
  // TODO::因为拿不到stack所以只做一个简单的提示
  console.warn(`[Vue warn]: ${msg}`, ...args);
  resetTracking();
}
