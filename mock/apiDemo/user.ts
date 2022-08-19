import { success, fail, getRequestToken, RequestParams } from '../helper';
const tokens = {
  admin: {
    token: 'adminToken',
  },
  editor: {
    token: 'editorToken',
  },
  viewer: {
    token: 'viewerToken',
  },
} as Record<string, { token: string }>;
const users = {
  adminToken: {
    rules: ['*'],
    introduction: '我是一个管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '超级管理员',
    username: 'admin',
  },
  editorToken: {
    rules: ['edit', 'show'],
    introduction: '我是一个编辑者',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '编辑员工',
    username: 'editor',
  },
  viewerToken: {
    rules: ['show'],
    introduction: '我是一个查询者',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '查看员工',
    username: 'viewer',
  },
} as Record<string, any>;
export default [
  {
    url: '/api/user/login', // 登录
    method: 'post',
    response: (req: { body: { username: string } }) => {
      const { username } = req.body;
      const token = tokens[username];
      // mock error
      if (!token) {
        return fail('用户名错误,示例用户名为:' + Object.keys(tokens).join('、'));
      }
      return success(token, '登录成功');
    },
  },
  {
    url: '/api/user/info', // 获取用户信息
    method: 'get',
    response: (req: RequestParams) => {
      const token = getRequestToken(req);
      if (!token) {
        return fail('请先登录', '401');
      }
      if (!Object.hasOwn(users, token)) {
        return fail('登录信息已失效,请重新登录', '401');
      }
      return success(users[token]);
    },
  },
];
