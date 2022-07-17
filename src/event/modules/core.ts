import { installRoute } from '@/router';
import { installStore } from '@/store';
import { event, mitter } from '../index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css'

import { installIcon } from '@/icons';
import { installI18n } from '@/locales/I18n';
mitter.once(event.ready, async (app) => {
    app.use(ElementPlus);
    installIcon(app);
    await installStore(app);
    installRoute(app);
    await installI18n(app);
});