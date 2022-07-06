import { App } from 'vue';
import userStore from './modules/user';
export * from './module';
export const store = createPinia();
export function installStore(app: App) {
    app.use(store);
    userStore().initState();
}