import { installRoute } from '@/router';
import { installStore } from '@/store';
import { event, mitter } from '../index';
import ElementPlus from 'element-plus';
import { installIcon } from '@/icons';
mitter.once(event.ready, async(app) => {
    app.use(ElementPlus);
    installIcon(app);
    await installStore(app);
    installRoute(app);
});