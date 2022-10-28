import request from '@/utils/request';
import { RouteRecordRaw } from 'vue-router';

const enum Api {
  MENU = '/api/menu/list',
}

export function menuApi(returnAxios = true) {
  return request<RouteRecordRaw[], [], typeof returnAxios>(
    () => ({
      url: Api.MENU,
      method: 'get',
    }),
    {},
    returnAxios,
  );
}
