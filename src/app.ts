import { createApp } from 'vue';
import App from './App.vue';
import { event, mitter } from './event';
import layoutMenuItem from '@/layout/components/menu/components/menuItem.vue';
import KeepAlive from '@/components/meKeepAlive';
export const app = createApp(App);
export async function bootscrapt() {
  app.component('LayoutMenuItem', layoutMenuItem);
  app.component('KeepAlive', KeepAlive);
  await Promise.allSettled(mitter.emit(event.START, app));
  mitter.emit(event.READY, app);
  app.mount('#app');
}
