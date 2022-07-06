import { installRoute } from '@/router';
import { installStore } from '@/store';
import { event, mitter } from '../index';
console.log(1);
mitter.once(event.ready, (app) => {
    installStore(app);
    installRoute(app);
});