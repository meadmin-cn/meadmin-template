import { createApp } from 'vue'
import App from './App.vue'
import { event, mitter } from './event';
import sidebarItem from '@/layout/components/sidebar/components/sidebarItem.vue';
import KeepAlive from './components/KeepAlive';
import clickOutside from "@/directive/clickOutside";
export const app = createApp(App);
export async function bootscrapt() {
    await Promise.allSettled(mitter.emit(event.ready, app));
    app.component('sidebarItem',sidebarItem);
    app.component('KeepAlive',KeepAlive);
    app.directive('ClickOutside',clickOutside)
    app.mount('#app');
}