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
        auths: ['*'],
        introduction: '我是一个管理员',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: '超级管理员'
    },
    'editor-token': {
        auths: ['edit', 'list'],
        introduction: '我是一个编辑者',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: '编辑员工'
    },
    'viewer': {
        auths: ['list'],
        introduction: '我是一个查询者',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: '查看员工'
    }
}
export default [
    {
        url: '/api/user/login', //登录
        type: 'post',
        response: (config) => {
            const { username } = JSON.parse(config.body)
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
        type: 'get',
        response: (config) => {
            const token = getRequestToken(config);
            if (!token) {
                return fail('请先登录', '401')
            }
            if (!users[token]) {
                fail('登录信息已失效,请重新登录', '401')
            }
            return success(users[token]);
        }
    }
]