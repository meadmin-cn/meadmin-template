import { success, fail, getRequestToken } from "../helper"
const tokens = {
    admin: {
        token: 'admin-token'
    },
    editor: {
        token: 'editor-token'
    },
    viewer: {
        token: 'viewer-token'
    }
}
const users = {
    'admin-token': {
        rules: ['*'],
        introduction: '我是一个管理员',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: '超级管理员',
        username:'admin',
    },
    'editor-token': {
        rules: ['edit', 'list'],
        introduction: '我是一个编辑者',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: '编辑员工',
        username:'editor',
    },
    'viewer': {
        rules: ['list'],
        introduction: '我是一个查询者',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: '查看员工',
        username:'viewer',
    }
}
export default [
    {
        url: '/api/user/login', //登录
        method: 'post',
        response: (req) => {
            console.log(req);
            const { username } = req.body
            const token = tokens[username]
            // mock error
            if (!token) {
                return fail('用户名错误,示例用户名为:' + Object.keys(tokens).join('、'))
            }
            return success(token, '登录成功');
        }
    },
    {
        url: '/api/user/info', //获取用户信息
        method: 'get',
        response: (req) => {
            const token = getRequestToken(req);
            if (!token) {
                return fail('请先登录', '401')
            }
            if (!users[token]) {
                return fail('登录信息已失效,请重新登录', '401')
            }
            return success(users[token]);
        }
    }
]