import { installRoute } from '@/router';
import { installStore } from '@/store';
import { event, mitter } from '../index';
import ElementPlus from 'element-plus';
mitter.once(event.ready, async(app) => {
    app.use(ElementPlus)
    await installStore(app);
    installRoute(app);
});