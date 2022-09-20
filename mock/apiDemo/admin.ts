import { success, fail } from '../helper';

const group = [
  {
    id: 1,
    name: '超级管理员',
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
    ],
    children: [
      {
        id: 2,
        name: '一级管理员1',
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
            rules: ['example', 'permission', 'example/request'],
          },
          {
            id: 22,
            name: '二级管理员1-2',
            rules: ['example', 'componentLang'],
          },
          {
            id: 23,
            name: '二级管理员1-3',
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
                rules: ['example', 'moreMenu', 'moreMenu1', 'moreMenu1-1', 'moreMenu1-1-1'],
              },
              {
                id: 232,
                name: '三级管理员1-3-2',
                rules: ['example', 'moreMenu', 'moreMenu1', 'moreMenu1-1', 'moreMenu1-1-lang'],
              },
              {
                id: 233,
                name: '三级管理员1-3-3',
                rules: ['example', 'moreMenu', 'moreMenu1', 'moreMenu1-2'],
              },
              {
                id: 234,
                name: '三级管理员1-3-4',
                rules: ['example', 'moreMenu', 'moreMenu1', 'moreMenu1-1', 'moreMenu1-1-1', 'moreMenu1-1-lang'],
                children: [
                  {
                    id: 2341,
                    name: '四级管理员1-3-4-1',
                    rules: ['example', 'moreMenu', 'moreMenu1', 'moreMenu1-1', 'moreMenu1-1-1'],
                  },
                ],
              },
            ],
          },
          {
            id: 24,
            name: '二级管理员1-4',
            rules: ['example', 'permission', 'componentLang', 'example/request', 'pagePermission'],
          },
          {
            id: 25,
            name: '二级管理员1-5',
            rules: ['example', 'permission', 'componentLang', 'example/request', 'link', 'pagePermission'],
            children: [
              {
                id: 251,
                name: '三级管理员1-5-1',
                rules: ['example', 'permission', 'componentLang'],
              },
              {
                id: 252,
                name: '三级管理员1-5-2',
                rules: ['example', 'link', 'componentLang'],
              },
              {
                id: 253,
                name: '三级管理员1-5-3',
                rules: ['example', 'pagePermission'],
              },
            ],
          },
          {
            id: 26,
            name: '二级管理员1-6',
            rules: ['example', 'permission', 'componentLang', 'example/request'],
          },
          {
            id: 27,
            name: '二级管理员1-7',
            rules: ['example', 'example/request'],
          },
        ],
      },
      {
        id: 3,
        name: '一级管理员2',
        rules: ['component', 'meNumber', 'editor', 'wangEditor', 'table', 'vxeTable'],
        children: [
          {
            id: 31,
            name: '二级管理员2-1',
            rules: ['component', 'meNumber'],
          },
          {
            id: 32,
            name: '二级管理员2-2',
            rules: ['component', 'table'],
          },
          {
            id: 33,
            name: '二级管理员2-3',
            rules: ['component', 'vxeTable'],
          },
          {
            id: 34,
            name: '二级管理员2-4',
            rules: ['component', 'editor', 'wangEditor'],
          },
          {
            id: 35,
            name: '二级管理员2-5',
            rules: ['component', 'table', 'vxeTable'],
          },
        ],
      },
      {
        id: 4,
        name: '一级管理员3',
        rules: ['customComponent', 'roleRule', 'roleRuleIndex', 'roleRuleAdd', 'roleRuleEdit', 'roleRuleDel'],
      },
    ],
  },
];
export default [
  {
    url: '/api/admin/group',
    method: 'get',
    timeout: 500 + Math.floor(Math.random() * 1000),
    response: () => success(group),
  },
];
