import request from '@/utils/request';

const enum Api {
  LIST = '/api/menu/index',
}

// 菜单列表
interface MenuItem {
  id: number;
  name: string; //名称
  rule: string; //规则
  sort: number; //排序
  status: 0 | 1; //状态0停用1启用
  type: 1 | 2; //1菜单2按钮
}

export type MenuListResult = (MenuItem & {
  children: MenuItem[];
})[];

export function menuListApi() {
  return request<MenuListResult>(
    () => ({
      url: Api.LIST,
      method: 'get',
    }),
    { noLoading: true },
  );
}
