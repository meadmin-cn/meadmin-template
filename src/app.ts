import { createApp } from 'vue';
import '@/event/module';
import App from './App.vue';
import { event, mitter } from './event';
import layoutMenuItem from '@/layout/components/menu/components/menuItem.vue';
export const app = createApp(App);
export async function bootscrapt() {
<<<<<<< HEAD
  app.config.globalProperties.$start = true;
=======
  app.config.globalProperties.start = true;
>>>>>>> cb1a17b (feat: 加上app create start 表示以便判断是否是热更新引用拿到)
  app.component('LayoutMenuItem', layoutMenuItem);
  await Promise.allSettled(mitter.emit(event.START, app));
  mitter.emit(event.READY, app);
  //忽略resolveComponent can only be used in render() or setup().的警告
  app.config.warnHandler = (msg, instance, trace) => {
    if(msg!=='resolveComponent can only be used in render() or setup().'){
      console.warn(`[Vue warn]: ${msg}`,instance,trace)
    }
  }
  app.mount('#app');
}
