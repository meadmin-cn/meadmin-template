import { createApp } from 'vue';
import '@/event/module';
import App from './App.vue';
import { event, mitter } from './event';
import layoutMenuItem from '@/layout/components/menu/components/menuItem.vue';
export const app = createApp(App);
export async function bootscrapt() {
  app.config.globalProperties.$start = true;
  await Promise.allSettled(mitter.emit(event.START, app));
  app.component('LayoutMenuItem', layoutMenuItem);
  mitter.emit(event.READY, app);
  app.mount('#app');
}
