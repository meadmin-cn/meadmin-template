import { createApp } from 'vue';
import App from './App.vue';
import { event, mitter } from './event';
import layoutMenuItem from '@/layout/components/menu/components/menuItem.vue';
export const app = createApp(App);
export async function bootscrapt() {
  app.component('layoutMenuItem', layoutMenuItem);
  await Promise.allSettled(mitter.emit(event.start, app));
  mitter.emit(event.ready, app);
  app.mount('#app');
}
