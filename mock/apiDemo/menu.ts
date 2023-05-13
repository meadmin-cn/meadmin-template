import { success, fail } from '../helper';
let id = 100000;
const menu = [
  {
    id: 1,
    name: '示例',
    rule: 'example',
    type: 1,
    sort: 1,
    status: 1,
    parentId: 0,
    children: [
      {
        id: 11,
        parentId: 1,
        name: '权限',
        rule: 'permission',
        type: 1,
        sort: 1,
        status: 1,
      },
      {
        id: 12,
        parentId: 1,
        name: '组件语言包',
        rule: 'componentLang',
        type: 1,
        sort: 2,
        status: 1,
      },
      {
        id: 13,
        parentId: 1,
        name: '请求示例',
        rule: 'example/request',
        type: 1,
        sort: 3,
        status: 1,
      },
      {
        id: 14,
        parentId: 1,
        name: '外链',
        rule: 'link',
        type: 1,
        sort: 4,
        status: 1,
      },
      {
        id: 15,
        parentId: 1,
        name: '页面权限',
        rule: 'pagePermission',
        type: 1,
        sort: 5,
        status: 1,
      },
      {
        id: 16,
        parentId: 1,
        name: '多级菜单',
        rule: 'moreMenu',
        type: 1,
        sort: 6,
        status: 1,
        children: [
          {
            id: 161,
            parentId: 16,
            name: '多级菜单1',
            rule: 'moreMenu1',
            type: 1,
            sort: 1,
            status: 1,
            children: [
              {
                id: 1611,
                parentId: 161,
                name: '多级菜单1-1',
                rule: 'moreMenu1-1',
                type: 1,
                sort: 1,
                status: 1,
                children: [
                  {
                    id: 16111,
                    parentId: 1611,
                    name: '多级菜单1-1-1',
                    rule: 'moreMenu1-1-1',
                    type: 1,
                    sort: 1,
                    status: 1,
                  },
                  {
                    id: 16112,
                    parentId: 1611,
                    name: '组件语言包',
                    rule: 'moreMenu1-1-lang',
                    type: 1,
                    sort: 1,
                    status: 1,
                  },
                ],
              },
              {
                id: 1612,
                parentId: 161,
                name: '多级菜单1-2',
                rule: 'moreMenu1-2',
                type: 1,
                sort: 1,
                status: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    parentId: 0,
    name: '组件',
    sort: 2,
    status: 1,
    rule: 'component',
    type: 1,
    children: [
      {
        id: 21,
        parentId: 2,
        name: '数字动画',
        rule: 'meNumber',
        type: 1,
        sort: 1,
        status: 1,
      },
      {
        id: 22,
        parentId: 2,
        name: '编辑器',
        sort: 2,
        rule: 'editor',
        type: 1,
        status: 1,
        children: [
          {
            id: 221,
            parentId: 22,
            name: 'WangEditor',
            rule: 'wangEditor',
            type: 1,
            sort: 1,
            status: 1,
          },
        ],
      },
      {
        id: 23,
        parentId: 2,
        name: '表格',
        sort: 3,
        rule: 'table',
        type: 1,
        status: 1,
      },
      {
        id: 24,
        parentId: 2,
        name: 'vxeTable',
        sort: 4,
        rule: 'vxeTable',
        type: 1,
        status: 1,
      },
    ],
  },
  {
    id: 3,
    parentId: 0,
    name: '自定义组件',
    sort: 3,
    status: 1,
    rule: 'customComponent',
    type: 1,
  },
  {
    id: 4,
    parentId: 0,
    name: '角色权限',
    sort: 3,
    status: 1,
    rule: 'roleRule',
    type: 1,
    children: [
      {
        id: 41,
        parentId: 4,
        name: '查看',
        sort: 3,
        status: 1,
        rule: 'roleRuleIndex',
        type: 2,
      },
      {
        id: 42,
        parentId: 4,
        name: '新增',
        sort: 3,
        status: 1,
        rule: 'roleRuleAdd',
        type: 3,
      },
      {
        id: 43,
        parentId: 4,
        name: '编辑',
        sort: 3,
        status: 1,
        rule: 'roleRuleEdit',
        type: 3,
      },
      {
        id: 44,
        parentId: 4,
        name: '删除',
        sort: 3,
        status: 1,
        rule: 'roleRuleDel',
        type: 3,
      },
    ],
  },
];
function getMenuItem(id: number, menuList?: typeof menu) {
  if (!menuList) {
    return;
  }
  for (const key in menuList) {
    if (menuList[key].id === id) {
      return menuList[key];
    }
    const item = getMenuItem(id, menuList[key].children as any) as typeof menu[number];
    if (item) {
      return item;
    }
  }
}
function delMenu(id: number) {
  const item = getMenuItem(id, menu);
  if (!item) {
    throw new Error('错误的id');
  }
  let parent = menu;
  if (item.parentId) {
    parent = getMenuItem(item.parentId, menu)?.children as any;
  }
  parent.splice(
    parent.findIndex((item) => item.id === id),
    1,
  );
  return item;
}
function addMenu(info: any) {
  let item = menu as any;
  if (info.parentId) {
    item = getMenuItem(info.parentId, menu);
    if (!item) {
      throw new Error('错误的父级');
    }
    if (!item.children) {
      item.children = [];
    }
    item = item.children;
  }
  item.push({ ...info });
  return true;
}
export default [
  {
    url: '/api/menu/index',
    method: 'get',
    timeout: 500 + Math.floor(Math.random() * 1000),
    response: () => success(menu),
  },
  {
    url: '/api/admin/menu/add',
    method: 'post',
    timeout: 500 + Math.floor(Math.random() * 1000),
    response: (req: any) => {
      try {
        const info = req.body;
        delete info._X_ROW_KEY;
        info.id = id++;
        addMenu(info);
        return success('操作成功');
      } catch (e) {
        return fail('' + e);
      }
    },
  },
  {
    url: /\/api\/admin\/menu\/[0-9]+/,
    method: 'post',
    timeout: 500 + Math.floor(Math.random() * 1000),
    response: (req: any) => {
      const id = +req.url.replace('/api/admin/menu/', '');
      const info = req.body;
      delete info._X_ROW_KEY;
      const item = getMenuItem(id, menu);
      if (!item) {
        return fail('错误的id');
      }
      if (item?.parentId === info.parentId) {
        Object.assign(item, info);
        return success('操作成功');
      }
      try {
        const item = delMenu(id);
        Object.assign(item, info);
        addMenu(item);
        return success('操作成功');
      } catch (e) {
        return fail('' + e);
      }
    },
  },
  {
    url: /\/api\/admin\/menu\/[0-9]+/,
    method: 'DELETE',
    timeout: 500 + Math.floor(Math.random() * 1000),
    response: (req: any) => {
      const id = +req.url.replace('/api/admin/menu/', '');
      try {
        delMenu(id);
        return success('操作成功');
      } catch (e) {
        return fail('' + e);
      }
    },
  },
];
