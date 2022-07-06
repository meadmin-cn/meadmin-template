import { createApp } from 'vue'
import App from './App.vue'
import { event, mitter } from './event';
async function bootscrapt() {
    const app = createApp(App);
    await mitter.emit(event.ready, app);
    app.mount('#app');
}
bootscrapt();