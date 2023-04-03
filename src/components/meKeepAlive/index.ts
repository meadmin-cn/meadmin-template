import {
  ConcreteComponent,
  getCurrentInstance,
  SetupContext,
  ComponentOptions,
  VNode,
  cloneVNode,
  isVNode,
  VNodeProps,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  watch,
  RendererElement,
  RendererNode,
  setTransitionHooks,
  warn,
} from 'vue';
import { getComponentName } from './core/component';
import { invokeVNodeHook } from './core/vnode';
import { isString, isArray, invokeArrayFns } from '@vue/shared';
import { ShapeFlags } from './core/shapeFlags';
import { RendererInternals, queuePostRenderEffect, MoveType } from './core/renderer';
import { ComponentRenderContext } from './core/componentPublicInstance';
import { devtoolsComponentAdded } from './core/devtools';
import { isAsyncWrapper } from './core/apiAsyncComponent';
import { isSuspense } from './core/Suspense';
type MatchPattern = string | RegExp | Array<string | RegExp>;
export interface MeKeepAliveProps {
  include?: MatchPattern;
  exclude?: MatchPattern;
  max?: number | string;
  includeKey?: MatchPattern;
  excludeKey?: MatchPattern;
}

type CacheKey = string | number | symbol | ConcreteComponent;
type Cache = Map<CacheKey, VNode>;
type Keys = Set<CacheKey>;
export interface KeepAliveContext extends ComponentRenderContext {
  renderer: RendererInternals;
  activate: (
    vnode: VNode,
    container: RendererElement,
    anchor: RendererNode | null,
    isSVG: boolean,
    optimized: boolean,
  ) => void;
  deactivate: (vnode: VNode) => void;
}

const KeepAliveImpl: ComponentOptions = {
  name: `MeKeepAlive`,

  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: true,

  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number],
    includeKey: [String, RegExp, Array],
    excludeKey: [String, RegExp, Array],
  },

  setup(props: MeKeepAliveProps, { slots }: SetupContext) {
    const instance = getCurrentInstance()!;
    // KeepAlive communicates with the instantiated renderer via the
    // ctx where the renderer passes in its internals,
    // and the KeepAlive instance exposes activate/deactivate implementations.
    // The whole point of this is to avoid importing KeepAlive directly in the
    // renderer to facilitate tree-shaking.
    const sharedContext = instance.ctx as KeepAliveContext;

    // if the internal renderer is not registered, it indicates that this is server-side rendering,
    // for KeepAlive, we just need to render its children
    if (__SSR__ && !sharedContext.renderer) {
      return () => {
        const children = slots.default && slots.default();
        return children && children.length === 1 ? children[0] : children;
      };
    }

    const cache: Cache = new Map();
    const keys: Keys = new Set();
    let current: VNode | null = null;

    if (__DEV__ || __FEATURE_PROD_DEVTOOLS__) {
      (instance as any).__v_cache = cache;
    }

    const parentSuspense = instance.suspense;

    const {
      renderer: {
        p: patch,
        m: move,
        um: _unmount,
        o: { createElement },
      },
    } = sharedContext;
    const storageContainer = createElement('div');

    sharedContext.activate = (vnode, container, anchor, isSVG, optimized) => {
      const instance = vnode.component!;
      move(vnode, container, anchor, MoveType.ENTER, parentSuspense);
      // in case props have changed
      patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
      queuePostRenderEffect(() => {
        instance.isDeactivated = false;
        if (instance.a) {
          invokeArrayFns(instance.a);
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance.parent, vnode);
        }
      }, parentSuspense);

      if (__DEV__ || __FEATURE_PROD_DEVTOOLS__) {
        // Update components tree
        devtoolsComponentAdded(instance);
      }
    };

    sharedContext.deactivate = (vnode: VNode) => {
      const instance = vnode.component!;
      move(vnode, storageContainer, null, MoveType.LEAVE, parentSuspense);
      queuePostRenderEffect(() => {
        if (instance.da) {
          invokeArrayFns(instance.da);
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance.parent, vnode);
        }
        instance.isDeactivated = true;
      }, parentSuspense);

      if (__DEV__ || __FEATURE_PROD_DEVTOOLS__) {
        // Update components tree
        devtoolsComponentAdded(instance);
      }
    };

    function unmount(vnode: VNode) {
      // reset the shapeFlag so it can be properly unmounted
      resetShapeFlag(vnode);
      _unmount(vnode, instance, parentSuspense, true);
    }

    function pruneCache(filter?: (name: string) => boolean) {
      cache.forEach((vnode, key) => {
        const name = getComponentName(vnode.type as ConcreteComponent);
        if (name && (!filter || !filter(name))) {
          pruneCacheEntry(key);
        }
      });
    }

    function pruneCacheByKey(filter?: (key: CacheKey) => boolean) {
      cache.forEach((vnode, key) => {
        if (!filter || !filter(key)) {
          pruneCacheEntry(key);
        }
      });
    }

    function pruneCacheEntry(key: CacheKey) {
      const cached = cache.get(key) as VNode;
      if (!current || cached.type !== current.type) {
        unmount(cached);
      } else if (current) {
        // current active instance should no longer be kept-alive.
        // we can't unmount it now but it might be later, so reset its flag now.
        resetShapeFlag(current);
      }
      cache.delete(key);
      keys.delete(key);
    }

    // prune cache on include/exclude prop change
    watch(
      () => [props.include, props.exclude],
      ([include, exclude]) => {
        include && pruneCache((name) => matches(include, name));
        exclude && pruneCache((name) => !matches(exclude, name));
      },
      // prune post-render after `current` has been updated
      { flush: 'post', deep: true },
    );
    // prune cache on includeKey/excludeKey prop change
    watch(
      () => [props.includeKey, props.excludeKey],
      ([includeKey, excludeKey]) => {
        includeKey && pruneCacheByKey((key) => typeof key === 'string' && matches(includeKey, key));
        excludeKey &&
          pruneCacheByKey((key) => {
            return typeof key !== 'string' || !matches(excludeKey, key);
          });
      },
      // prune post-render after `current` has been updated
      { flush: 'post', deep: true },
    );

    // cache sub tree after render
    let pendingCacheKey: CacheKey | null = null;
    const cacheSubtree = () => {
      // fix #1621, the pendingCacheKey could be 0
      if (pendingCacheKey != null) {
        cache.set(pendingCacheKey, getInnerChild(instance.subTree));
      }
    };
    onMounted(cacheSubtree);
    onUpdated(cacheSubtree);

    onBeforeUnmount(() => {
      cache.forEach((cached) => {
        const { subTree, suspense } = instance;
        const vnode = getInnerChild(subTree);
        if (cached.type === vnode.type) {
          // current instance will be unmounted as part of keep-alive's unmount
          resetShapeFlag(vnode);
          // but invoke its deactivated hook here
          const da = vnode.component!.da;
          da && queuePostRenderEffect(da, suspense);
          return;
        }
        unmount(cached);
      });
    });

    return () => {
      pendingCacheKey = null;
      if (!slots.default) {
        return null;
      }
      const children = slots.default();
      const rawVNode = children[0];
      if (children.length > 1) {
        if (__DEV__) {
          warn(`KeepAlive should contain exactly one component child.`, current);
        }
        current = null;
        return children;
      } else if (
        !isVNode(rawVNode) ||
        (!(rawVNode.shapeFlag & ShapeFlags.STATEFUL_COMPONENT) && !(rawVNode.shapeFlag & ShapeFlags.SUSPENSE))
      ) {
        current = null;
        return rawVNode;
      }

      let vnode = getInnerChild(rawVNode);
      const comp = vnode.type as ConcreteComponent;

      // for async components, name check should be based in its loaded
      // inner component if available
      const name = getComponentName(
        isAsyncWrapper(vnode) ? (vnode.type as ComponentOptions).__asyncResolved || {} : comp,
      );
      const key = vnode.key == null ? comp : vnode.key;
      const { include, exclude, includeKey, excludeKey, max } = props;
      if (
        (include && (!name || !matches(include, name))) ||
        (exclude && name && matches(exclude, name)) ||
        (includeKey && (typeof key !== 'string' || !matches(includeKey, key))) ||
        (excludeKey && typeof key === 'string' && matches(excludeKey, key))
      ) {
        current = vnode;
        return rawVNode;
      }
      const cachedVNode = cache.get(key);

      // clone vnode if it's reused because we are going to mutate it
      if (vnode.el) {
        vnode = cloneVNode(vnode);
        if (rawVNode.shapeFlag & ShapeFlags.SUSPENSE) {
          rawVNode.ssContent = vnode;
        }
      }
      // #1513 it's possible for the returned vnode to be cloned due to attr
      // fallthrough or scopeId, so the vnode here may not be the final vnode
      // that is mounted. Instead of caching it directly, we store the pending
      // key and cache `instance.subTree` (the normalized vnode) in
      // beforeMount/beforeUpdate hooks.
      pendingCacheKey = key;

      if (cachedVNode) {
        // copy over mounted state
        vnode.el = cachedVNode.el;
        vnode.component = cachedVNode.component;
        if (vnode.transition) {
          // recursively update transition hooks on subTree
          setTransitionHooks(vnode, vnode.transition);
        }
        // avoid vnode being mounted as fresh
        vnode.shapeFlag |= ShapeFlags.COMPONENT_KEPT_ALIVE;
        // make this key the freshest
        keys.delete(key);
        keys.add(key);
      } else {
        keys.add(key);
        // prune oldest entry
        if (max && keys.size > parseInt(max as string, 10)) {
          pruneCacheEntry(keys.values().next().value);
        }
      }
      // avoid vnode being unmounted
      vnode.shapeFlag |= ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE;

      current = vnode;
      return isSuspense(rawVNode.type) ? rawVNode : vnode;
    };
  },
};

if (__COMPAT__) {
  KeepAliveImpl.__isBuildIn = true;
}

// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
export default KeepAliveImpl as any as {
  __isKeepAlive: true;
  new (): {
    $props: VNodeProps & MeKeepAliveProps;
  };
};

function matches(pattern: MatchPattern, name: string): boolean {
  if (isArray(pattern)) {
    return pattern.some((p: string | RegExp) => matches(p, name));
  } else if (isString(pattern)) {
    return pattern.split(',').includes(name);
  } else if (pattern.test) {
    return pattern.test(name);
  }
  /* istanbul ignore next */
  return false;
}

function resetShapeFlag(vnode: VNode) {
  let shapeFlag = vnode.shapeFlag;
  if (shapeFlag & ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE) {
    shapeFlag -= ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE;
  }
  if (shapeFlag & ShapeFlags.COMPONENT_KEPT_ALIVE) {
    shapeFlag -= ShapeFlags.COMPONENT_KEPT_ALIVE;
  }
  vnode.shapeFlag = shapeFlag;
}

function getInnerChild(vnode: VNode) {
  return vnode.shapeFlag & ShapeFlags.SUSPENSE ? vnode.ssContent! : vnode;
}
