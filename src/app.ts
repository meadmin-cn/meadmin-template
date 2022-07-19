import { createApp } from 'vue'
import App from './app.vue'
import { event, mitter } from './event';
export const app = createApp(App);
export async function bootscrapt() {
    await Promise.allSettled(mitter.emit(event.ready, app));
    app.mount('#app');
}