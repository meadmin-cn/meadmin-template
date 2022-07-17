import { createApp } from 'vue'
import App from './app.vue'
import { event, mitter } from './event';
import '@/event/module';
import '@/styles/common.scss';
const app = createApp(App);
async function bootscrapt() {
    await Promise.allSettled(mitter.emit(event.ready, app));
    app.mount('#app');
}
bootscrapt();