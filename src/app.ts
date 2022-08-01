import { createApp } from 'vue'
import App from './App.vue'
import { event, mitter } from './event';
import sidebarItem from '@/layout/components/sidebar/components/sidebarItem.vue';
export const app = createApp(App);
export async function bootscrapt() {
    await Promise.allSettled(mitter.emit(event.ready, app));
    app.component('sidebarItem',sidebarItem);
    app.mount('#app');
}