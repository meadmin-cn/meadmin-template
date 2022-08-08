import { installRoute } from '@/router';
import { installStore } from '@/store';
import { event, mitter } from '../index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css'
import { installIcon } from '@/icons';
import { installI18n } from '@/locales/i18n';
import { installComponent } from '@/components';
import { installDirective } from '@/directives';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

mitter.once(event.ready, async (app) => {
    app.use(ElementPlus);
    installIcon(app);
    await installStore(app);
    await installI18n(app);
    installComponent(app);
    installDirective(app);
    installRoute(app);
    window.addEventListener('resize', () => mitter.emit(event.resize));
    //进度条配置
    nProgress.configure({
        showSpinner: false
    });
});