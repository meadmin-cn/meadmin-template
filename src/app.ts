import { createApp } from 'vue'
import App from './App.vue'
import { event, mitter } from './event';
import sidebarItem from '@/layout/components/sidebar/components/sidebarItem.vue';
import meKeepAlive from '@/components/meKeepAlive';
import clickOutside from "@/directive/clickOutside";
export const app = createApp(App);
export async function bootscrapt() {
    app.component('sidebarItem', sidebarItem);
    app.component('meKeepAlive', meKeepAlive);
    app.directive('ClickOutside', clickOutside)
    await Promise.allSettled(mitter.emit(event.ready, app));
    app.mount('#app');
}