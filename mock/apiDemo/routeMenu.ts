import { success, fail } from '../helper';

const menu = [
  {
    path: '/index',
    redirect: '/index/index',
    component: 'Layout',
    children: [
      {
        path: 'index',
        component: 'dashboard/index',
        meta: {
          title: '首页',
          affix: true,
          icon: 'me-icon-dashboard',
        },
      },
    ],
    meta: {
      title: '',
    },
  },
  {
    path: '/example',
    component: 'Layout',
    children: [
      {
        path: 'permission',
        component: 'example/permission',
        meta: {
          title: '权限',
        },
      },
      {
        path: 'componentLang',
        component: 'example/componentLang/index',
        meta: {
          title: '组件语言包',
        },
      },
      {
        path: 'request',
        component: 'example/request',
        meta: {
          title: '请求示例',
        },
      },
      {
        path: 'https://github.com/meadmin-cn/meadmin-template',
        component: '404',
        meta: {
          title: '外链',
          isLink: true,
        },
      },
      {
        path: 'pagePermission',
        component: 'example/pagePermission',
        meta: {
          title: '页面权限',
          rule: ['edit'],
        },
      },
      {
        path: 'multilevel',
        component: 'LayoutPage',
        meta: {
          title: '多级菜单',
        },
        children: [
          {
            path: '1',
            component: 'LayoutPage',
            meta: {
              title: '多级菜单1',
            },
            children: [
              {
                path: '1-1',
                component: 'LayoutPage',
                meta: {
                  title: '多级菜单1-1',
                  alwaysShow: true,
                },
                redirect: '/example/multilevel/1/1-1/1-1-1',
                children: [
                  {
                    path: '1-1-1',
                    component: 'dashboard/index',
                    meta: {
                      title: '多级菜单1-1-1',
                    },
                  },
                  {
                    path: '/test/componentLang',
                    component: 'example/componentLang/index',
                    meta: {
                      title: '组件语言包',
                    },
                  },
                ],
              },
              {
                path: '1-2',
                component: 'dashboard/index',
                meta: {
                  title: '多级菜单1-2',
                },
              },
            ],
          },
        ],
      },
    ],
    meta: {
      title: '示例',
      icon: 'mel-icon-promotion',
    },
  },
];
export default [
  {
    url: '/api/menu/list', //
    method: 'get',
    response() {
      return success(menu, '菜单获取成功');
    },
  },
];
