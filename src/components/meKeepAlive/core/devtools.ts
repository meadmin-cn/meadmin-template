import { ComponentInternalInstance, devtools } from 'vue';
const enum DevtoolsHooks {
  APP_INIT = 'app:init',
  APP_UNMOUNT = 'app:unmount',
  COMPONENT_UPDATED = 'component:updated',
  COMPONENT_ADDED = 'component:added',
  COMPONENT_REMOVED = 'component:removed',
  COMPONENT_EMIT = 'component:emit',
  PERFORMANCE_START = 'perf:start',
  PERFORMANCE_END = 'perf:end',
}
export const devtoolsComponentAdded = /* #__PURE__ */ createDevtoolsComponentHook(DevtoolsHooks.COMPONENT_ADDED);

function createDevtoolsComponentHook(hook: DevtoolsHooks) {
  return (component: ComponentInternalInstance) => {
    emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
  };
}

function emit(event: string, ...args: any[]) {
  // if (devtools) {
  //   return devtools.emit(event, ...args)
  // } else if (!devtoolsNotInstalled) {
  //   buffer.push({ event, args })
  // }
  // TODO::因为拿不到devtoolsNotInstalled和buffer这里只在devtools Installed 成功后处理
  if (devtools) {
    return devtools.emit(event, ...args);
  }
  // TODO::因为拿不到devtoolsNotInstalled和buffer这里做特别处理
  // const doEmit = (event: string,frequency:number,...args: any[])=>{
  //   if (devtools) {
  //     return devtools.emit(event, ...args)
  //   }
  //   if(frequency > 3){
  //     return console.warn('devtools is Not installed');
  //   }
  //   setTimeout(() => {
  //     doEmit(event,frequency++,...args);
  //   }, 1000);
  // }
  // doEmit(event,1,args);
}
