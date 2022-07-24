import { App } from 'vue';
import useGlobalStore from './modules/global';
import useUserStore from './modules/user';
export * from './module';
export const store = createPinia();
export async function installStore(app: App) {
    app.use(store);
    await useUserStore().init();
}