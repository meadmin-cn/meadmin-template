import { createApp } from 'vue';
import '@/event/module';
import App from './App.vue';
import { event, mitter } from './event';
export const app = createApp(App);
export async function bootscrapt() {
  app.config.globalProperties.$start = true;
  await Promise.allSettled(mitter.emit(event.START, app));
  mitter.emit(event.READY, app);
  //忽略resolveComponent can only be used in render() or setup().的警告
  app.config.warnHandler = (msg, instance, trace) => {
    if (msg !== 'resolveComponent can only be used in render() or setup().') {
      console.warn(`[Vue warn]: ${msg}`, instance, trace);
    }
  };
  app.mount('#app');
}
