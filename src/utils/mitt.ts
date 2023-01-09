// 根据开源项目mitt自定义更改
import { onUnmounted } from 'vue';
import EventEnum from '@/dict/eventEnmu';
type EventType = EventEnum;

// An event handler can take an optional event argument
// and should not return a value
export type Handler<T = unknown> = (event: T) => void | Promise<void>;
export type WildcardHandler<T = Record<string, unknown>> = (type: keyof T, event: T[keyof T]) => void;

// An array of all currently registered event handlers for a type
export type EventHandlerList<T = unknown> = Array<Handler<T>>;
export type WildCardEventHandlerList<T = Record<string, unknown>> = Array<WildcardHandler<T>>;

// A map of event types and their corresponding event handlers.
export type EventHandlerMap<Events extends Record<EventType, unknown>> = Map<
  keyof Events | '*',
  EventHandlerList<Events[keyof Events]> | WildCardEventHandlerList<Events>
>;

export interface Mitter<Events extends Record<EventType, unknown>> {
  all: EventHandlerMap<Events>;

  once: (<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>, needUnmounted?: boolean) => void) &
    ((type: '*', handler: WildcardHandler<Events>, needUnmounted?: boolean) => void);

  on: (<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>, needUnmounted?: boolean) => void) &
    ((type: '*', handler: WildcardHandler<Events>, needUnmounted?: boolean) => void);

  off: (<Key extends keyof Events>(type: Key, handler?: Handler<Events[Key]>) => void) &
    ((type: '*', handler: WildcardHandler<Events>) => void);

  emit: (<Key extends keyof Events>(type: Key, event: Events[Key]) => any[]) &
    (<Key extends keyof Events>(type: undefined extends Events[Key] ? Key : never) => any[]);
}

/**
 * Mitt: Tiny (~200b) functional event emitter / pubsub.
 * @name Mitter
 * @returns {Mitt}
 */
export default function mitter<Events extends Record<EventType, unknown>>(
  all?: EventHandlerMap<Events>,
  once?: Set<Handler<Events[keyof Events]> | WildcardHandler<Events>>,
) {
  type GenericEventHandler = Handler<Events[keyof Events]> | WildcardHandler<Events>;
  all = all ?? new Map();
  once = once ?? new Set();

  return {
    /**
     * A Map of event names to registered handler functions.
     */
    all,

    /**
     * Register an once event handler for the given type.
     * @param {string|symbol} type Type of event to listen for, or `'*'` for all events
     * @param {Function} handler Function to call in response to given event
     * @param needUnmounted 是否需要在Unmounted时移除监听
     * @memberOf mitt
     */
    once<Key extends keyof Events>(type: Key, handler: GenericEventHandler, needUnmounted = false) {
      const handlers: GenericEventHandler[] | undefined = all!.get(type);
      if (handlers) {
        handlers.push(handler);
      } else {
        all!.set(type, [handler] as EventHandlerList<Events[keyof Events]>);
        once!.add(handler as Handler<Events[keyof Events]>);
      }
      needUnmounted &&
        onUnmounted(() => {
          this.off<Key>(type, handler as any);
        });
    },

    /**
     * Register an event handler for the given type.
     * @param {string|symbol} type Type of event to listen for, or `'*'` for all events
     * @param {Function} handler Function to call in response to given event
     * @param needUnmounted 是否需要在Unmounted时移除监听
     * @memberOf mitt
     */
    on<Key extends keyof Events>(type: Key, handler: GenericEventHandler, needUnmounted = false) {
      const handlers: GenericEventHandler[] | undefined = all!.get(type);
      if (handlers) {
        handlers.push(handler);
      } else {
        all!.set(type, [handler] as EventHandlerList<Events[keyof Events]>);
      }
      needUnmounted &&
        onUnmounted(() => {
          this.off<Key>(type, handler as any);
        });
    },

    /**
     * Remove an event handler for the given type.
     * If `handler` is omitted, all handlers of the given type are removed.
     * @param {string|symbol} type Type of event to unregister `handler` from (`'*'` to remove a wildcard handler)
     * @param {Function} [handler] Handler function to remove
     * @memberOf mitt
     */
    off<Key extends keyof Events>(type: Key, handler?: GenericEventHandler) {
      const handlers: GenericEventHandler[] | undefined = all!.get(type);
      if (handlers) {
        if (handler) {
          handlers.splice(handlers.indexOf(handler) >>> 0, 1);
          once!.delete(handler);
        } else {
          all!.set(type, []);
        }
      }
    },

    /**
     * Invoke all handlers for the given type.(会顺序执行)
     * If present, `'*'` handlers are invoked after type-matched handlers.
     *
     * Note: Manually firing '*' handlers is not supported.
     *
     * @param {string|symbol} type The event type to invoke
     * @param {Any} [evt] Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit<Key extends keyof Events>(type: Key, evt: Events[Key]) {
      let handlers = all!.get(type);
      const result = [];
      if (handlers) {
        handlers = (handlers as EventHandlerList<Events[keyof Events]>).slice();
        for (const handler of handlers) {
          result.push(handler(evt));
          if (once!.has(handler)) {
            this.off(type, handler);
          }
        }
      }

      handlers = all!.get('*');
      if (handlers) {
        handlers = (handlers as WildCardEventHandlerList<Events>).slice();
        for (const handler of handlers) {
          result.push(handler(type, evt));
        }
        once!.clear();
      }
      return result;
    },
  } as Mitter<Events>;
}
