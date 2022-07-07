/**
 * 事件总线
 */
import Mitt from '@/utils/mitt';
import { RouteLocationNormalized } from "vue-router";
import event from '@/enums/event';
import { App } from "vue";
type Events = {
    [event.ready]: App
    [event.routeChange]: RouteLocationNormalized[] | undefined[],
    [event.routeChangeOver]: void,
    [event.login]: void,
    [event.logout]: void
};
const mitter = Mitt<Events>(); // inferred as Emitter<Events>
export { event, mitter }