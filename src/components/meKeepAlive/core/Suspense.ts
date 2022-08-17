import { queuePostFlushCb, SuspenseBoundary } from 'vue';
import { isArray } from '@vue/shared';
export function queueEffectWithSuspense(fn: Function | Function[], suspense: SuspenseBoundary | null): void {
  if (suspense && suspense.pendingBranch) {
    if (isArray(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}

export const isSuspense = (type: any): boolean => type.__isSuspense;
