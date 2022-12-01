import { request, RequestOptions } from '@/utils/request';
import { RouteRecordRaw } from 'vue-router';

const enum Api {
  MENU = 'menu/list',
}

export function menuApi<T extends boolean = true>(
  options: RequestOptions<RouteRecordRaw[], []> = {},
  returnAxios: T = true as T,
) {
  return request(
    () => ({
      url: Api.MENU,
      method: 'get',
    }),
    options,
    returnAxios,
  );
}
