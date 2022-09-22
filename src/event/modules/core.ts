import { installRoute } from '@/router';
import { installStore } from '@/store';
import { event, mitter } from '../index';
import { installIcon } from '@/icons';
import { installI18n } from '@/locales/i18n';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { permission } from '@/utils/permission';
import { settingKey, settingConfig } from '@/config';
mitter.once(event.START, async (app) => {
  if (localStorage.getItem(`${settingKey}-version`) !== settingConfig.version) {
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem(`${settingKey}-version`, settingConfig.version);
  }
  installIcon(app);
  await installStore(app);
  await installI18n(app);
  installRoute(app);
  window.addEventListener('resize', () => mitter.emit(event.RESIZE));
  app.config.globalProperties.$permission = permission;
  // 进度条配置
  nProgress.configure({
    showSpinner: false,
  });
});
