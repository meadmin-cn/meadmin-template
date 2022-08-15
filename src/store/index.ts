import { App } from 'vue';
import { useUserStore } from './module';
export * from './module';
export const store = createPinia();
export async function installStore(app: App) {
  app.use(store);
  await useUserStore().init();
}
