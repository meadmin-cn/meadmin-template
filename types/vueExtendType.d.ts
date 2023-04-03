import { MessageImport } from '@/locales/I18n';
declare module 'vue' {
  /* eslint-disable */
  type LifecycleHook<TFn = Function> = TFn[] | null;
  export declare interface ComponentOptionsBase {
    langImport?: MessageImport;
  }
  export interface ComponentInternalInstance {
    ctx: Record<string, unknown>;
    /**
     * suspense related
     * @internal
     */
    suspense: SuspenseBoundary | null;
    /**
     * @internal
     */
    da: LifecycleHook;
    /**
     * @internal
     */
    a: LifecycleHook;
  }
  export interface VNode<HostNode = RendererNode, HostElement = RendererElement, ExtraProps = { [key: string]: any }> {
    /**
     * SFC only. This is assigned to:
     * - Slot fragment vnodes with :slotted SFC styles.
     * - Component vnodes (during patch/hydration) so that its root node can
     *   inherit the component's slotScopeIds
     * @internal
     */
    slotScopeIds: string[] | null;
    /**
     * @internal
     */
    ssContent: VNode | null;
  }
  /* eslint-disable */
  interface ComponentCustomProperties {
    $permission: (key: string | string[]) => boolean;
  }
}
export {};
