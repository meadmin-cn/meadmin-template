import { createApp } from 'vue';
import App from './App.vue';
import { event, mitter } from './event';
import layoutMenuItem from '@/layout/components/menu/components/menuItem.vue';
export const app = createApp(App);
export async function bootscrapt() {
  app.component('LayoutMenuItem', layoutMenuItem);
  await Promise.allSettled(mitter.emit(event.START, app));
  mitter.emit(event.READY, app);
  app.mount('#app');
}
