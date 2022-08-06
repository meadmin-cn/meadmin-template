import { ComponentInternalInstance, devtools } from "vue"
const enum DevtoolsHooks {
    APP_INIT = 'app:init',
    APP_UNMOUNT = 'app:unmount',
    COMPONENT_UPDATED = 'component:updated',
    COMPONENT_ADDED = 'component:added',
    COMPONENT_REMOVED = 'component:removed',
    COMPONENT_EMIT = 'component:emit',
    PERFORMANCE_START = 'perf:start',
    PERFORMANCE_END = 'perf:end'
  }
export const devtoolsComponentAdded = /*#__PURE__*/ createDevtoolsComponentHook(
    DevtoolsHooks.COMPONENT_ADDED
  )

  function createDevtoolsComponentHook(hook: DevtoolsHooks) {
    return (component: ComponentInternalInstance) => {
      emit(
        hook,
        component.appContext.app,
        component.uid,
        component.parent ? component.parent.uid : undefined,
        component
      )
    }
  }

  function emit(event: string, ...args: any[]) {
    if (devtools) {
      devtools.emit(event, ...args)
    } 
    //TODO::因为拿不到devtoolsNotInstalled和buffer这里做特别处理
    // else if (!devtoolsNotInstalled) {
    //   buffer.push({ event, args })
    // }
  }