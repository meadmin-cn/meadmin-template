import request from '@/utils/request';

const enum Api {
  LIST = 'menu/index',
  ADD = 'admin/menu/add',
  EDIT = 'admin/menu/{id}',
  DEL = 'admin/menu/{id}',
}

// 菜单列表
export class MenuInfo {
  id?: number;
  parentId?: number; //父级id
  name = ''; //名称
  rule = ''; //规则
  sort = 0; //排序
  status = 1 as 0 | 1; //状态0停用1启用
  type = 1 as 1 | 2 | 3; //1菜单2页面3按钮
}

export function addMenuApi() {
  return request<number, [MenuInfo]>(
    (info) => ({
      url: Api.ADD,
      method: 'POST',
      data: info,
    }),
    { success: true },
  );
}

export function editMenuApi() {
  return request<number, [number, Partial<MenuInfo>]>(
    (id, info) => ({
      url: Api.EDIT.replace('{id}', id + ''),
      method: 'POST',
      data: info,
    }),
    { success: true },
  );
}

export function delMenuApi() {
  return request<number, [number]>(
    (id) => ({
      url: Api.DEL.replace('{id}', id + ''),
      method: 'DELETE',
    }),
    { success: true },
  );
}

export type MenuListResult = (Required<MenuInfo> & {
  children: MenuListResult;
})[];

export function menuListApi() {
  return request<MenuListResult>(
    () => ({
      url: Api.LIST,
      method: 'get',
    }),
    { noLoading: true, cacheKey: 'menuList', cacheTime: 5 * 60 * 1000 },
  );
}
