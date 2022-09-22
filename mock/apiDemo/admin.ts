import { success, fail } from '../helper';

let id = 10000;
const group = [
  {
    id: 1,
    name: '超级管理员',
    status: 1,
    parentId: 0,
    rules: [
      'example',
      'permission',
      'componentLang',
      'example/request',
      'link',
      'pagePermission',
      'moreMenu',
      'moreMenu1',
      'moreMenu1-1',
      'moreMenu1-1-1',
      'moreMenu1-1-lang',
      'moreMenu1-2',
      'component',
      'meNumber',
      'editor',
      'wangEditor',
      'table',
      'vxeTable',
      'customComponent',
      'roleRule',
      'roleRuleIndex',
      'roleRuleAdd',
      'roleRuleEdit',
      'roleRuleDel',
    ],
    children: [
      {
        id: 2,
        name: '一级管理员1',
        status: 1,
        parentId: 1,
        rules: [
          'example',
          'permission',
          'componentLang',
          'example/request',
          'link',
          'pagePermission',
          'moreMenu',
          'moreMenu1',
          'moreMenu1-1',
          'moreMenu1-1-1',
          'moreMenu1-1-lang',
          'moreMenu1-2',
        ],
        children: [
          {
            id: 21,
            name: '二级管理员1-1',
            parentId: 2,
            status: 1,
            rules: ['example', 'permission', 'example/request'],
          },
          {
            id: 22,
            name: '二级管理员1-2',
            parentId: 2,
            status: 1,
            rules: ['example', 'componentLang'],
          },
          {
            id: 23,
            name: '二级管理员1-3',
            parentId: 2,
            status: 0,
            rules: [
              'example',
              'moreMenu',
              'moreMenu1',
              'moreMenu1-1',
              'moreMenu1-1-1',
              'moreMenu1-1-lang',
              'moreMenu1-2',
            ],
            children: [
              {
                id: 231,
                name: '三级管理员1-3-1',
                parentId: 23,
                status: 1,
                rules: ['example', 'moreMenu', 'moreMenu1', 'moreMenu1-1', 'moreMenu1-1-1'],
              },
              {
                id: 232,
                name: '三级管理员1-3-2',
                parentId: 23,
                status: 1,
                rules: ['example', 'moreMenu', 'moreMenu1', 'moreMenu1-1', 'moreMenu1-1-lang'],
              },
              {
                id: 233,
                name: '三级管理员1-3-3',
                parentId: 23,
                status: 1,
                rules: ['example', 'moreMenu', 'moreMenu1', 'moreMenu1-2'],
              },
              {
                id: 234,
                name: '三级管理员1-3-4',
                parentId: 23,
                status: 1,
                rules: ['example', 'moreMenu', 'moreMenu1', 'moreMenu1-1', 'moreMenu1-1-1', 'moreMenu1-1-lang'],
                children: [
                  {
                    id: 2341,
                    name: '四级管理员1-3-4-1',
                    parentId: 234,
                    status: 1,
                    rules: ['example', 'moreMenu', 'moreMenu1', 'moreMenu1-1', 'moreMenu1-1-1'],
                  },
                ],
              },
            ],
          },
          {
            id: 24,
            name: '二级管理员1-4',
            parentId: 2,
            status: 1,
            rules: ['example', 'permission', 'componentLang', 'example/request', 'pagePermission'],
          },
          {
            id: 25,
            name: '二级管理员1-5',
            parentId: 2,
            status: 1,
            rules: ['example', 'permission', 'componentLang', 'example/request', 'link', 'pagePermission'],
            children: [
              {
                id: 251,
                name: '三级管理员1-5-1',
                parentId: 25,
                status: 1,
                rules: ['example', 'permission', 'componentLang'],
              },
              {
                id: 252,
                name: '三级管理员1-5-2',
                parentId: 25,
                status: 1,
                rules: ['example', 'link', 'componentLang'],
              },
              {
                id: 253,
                name: '三级管理员1-5-3',
                parentId: 25,
                status: 1,
                rules: ['example', 'pagePermission'],
              },
            ],
          },
          {
            id: 26,
            name: '二级管理员1-6',
            parentId: 2,
            status: 0,
            rules: ['example', 'permission', 'componentLang', 'example/request'],
          },
          {
            id: 27,
            name: '二级管理员1-7',
            parentId: 2,
            status: 1,
            rules: ['example', 'example/request'],
          },
        ],
      },
      {
        id: 3,
        parentId: 1,
        name: '一级管理员2',
        status: 1,
        rules: ['component', 'meNumber', 'editor', 'wangEditor', 'table', 'vxeTable'],
        children: [
          {
            id: 31,
            parentId: 3,
            name: '二级管理员2-1',
            status: 1,
            rules: ['component', 'meNumber'],
          },
          {
            id: 32,
            parentId: 3,
            name: '二级管理员2-2',
            status: 1,
            rules: ['component', 'table'],
          },
          {
            id: 33,
            parentId: 3,
            name: '二级管理员2-3',
            status: 1,
            rules: ['component', 'vxeTable'],
          },
          {
            id: 34,
            parentId: 3,
            name: '二级管理员2-4',
            status: 1,
            rules: ['component', 'editor', 'wangEditor'],
          },
          {
            id: 35,
            parentId: 3,
            name: '二级管理员2-5',
            status: 1,
            rules: ['component', 'table', 'vxeTable'],
          },
        ],
      },
      {
        id: 4,
        parentId: 1,
        name: '一级管理员3',
        status: 1,
        rules: ['customComponent', 'roleRule', 'roleRuleIndex', 'roleRuleAdd', 'roleRuleEdit', 'roleRuleDel'],
      },
    ],
  },
];
function getGroupItem(id: number, groupList?: typeof group) {
  if (!groupList) {
    return;
  }
  for (const key in groupList) {
    if (groupList[key].id === id) {
      return groupList[key];
    }
    const item = getGroupItem(id, groupList[key].children as any) as typeof group[number];
    if (item) {
      return item;
    }
  }
}
export default [
  {
    url: '/api/admin/group/index',
    method: 'get',
    timeout: 500 + Math.floor(Math.random() * 1000),
    response: () => success(group),
  },
  {
    url: '/api/admin/group/add',
    method: 'post',
    timeout: 500 + Math.floor(Math.random() * 1000),
    response: (req: any) => {
      const info = req.body;
      delete info._X_ROW_KEY;
      info.id = id++;
      let item = group as any;
      if (info.parentId) {
        item = getGroupItem(info.parentId, group);
        if (!item) {
          return fail('错误的父级');
        }
        if (!item.children) {
          item.children = [];
        }
        item = item.children;
      }
      item.push({ ...info });
      return success('操作成功');
    },
  },
  {
    url: /\/api\/admin\/group\/[0-9]+/,
    method: 'post',
    timeout: 500 + Math.floor(Math.random() * 1000),
    response: (req: any) => {
      const info = req.body;
      delete info._X_ROW_KEY;
      const item = getGroupItem(+req.url.replace('/api/admin/group/', ''), group);
      if (!item) {
        return fail('错误的id');
      }
      Object.assign(item, info);
      return success('操作成功');
    },
  },
  {
    url: /\/api\/admin\/group\/[0-9]+/,
    method: 'DELETE',
    timeout: 500 + Math.floor(Math.random() * 1000),
    response: (req: any) => {
      const id = +req.url.replace('/api/admin/group/', '');
      const item = getGroupItem(id, group);
      if (!item) {
        return fail('错误的id');
      }
      let parent = group;
      if (item.parentId) {
        parent = getGroupItem(item.parentId, group)?.children as any;
      }
      parent.splice(
        parent.findIndex((item) => item.id === id),
        1,
      );
      return success('操作成功');
    },
  },
];
