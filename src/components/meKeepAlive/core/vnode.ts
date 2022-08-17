import { ComponentInternalInstance, VNode, callWithAsyncErrorHandling } from 'vue';
import { ErrorCodes } from './errorHandling';
type VNodeMountHook = (vnode: VNode) => void;
type VNodeUpdateHook = (vnode: VNode, oldVNode: VNode) => void;
export type VNodeHook = VNodeMountHook | VNodeUpdateHook | VNodeMountHook[] | VNodeUpdateHook[];

export function invokeVNodeHook(
  hook: VNodeHook,
  instance: ComponentInternalInstance | null,
  vnode: VNode,
  prevVNode: VNode | null = null,
) {
  callWithAsyncErrorHandling(hook, instance, <any>ErrorCodes.VNODE_HOOK, [vnode, prevVNode]);
}
