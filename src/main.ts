import { createApp } from 'vue'
import App from './app.vue'
import { event, mitter } from './event';
import '@/event/module';
import '@/styles/common.scss';
async function bootscrapt() {
    const app = createApp(App);
    await mitter.emit(event.ready, app);
    app.mount('#app');
}
bootscrapt();