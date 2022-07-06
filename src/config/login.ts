export default { //登录配置
    token_expires: 7,//token 过期时间
    token_domain: typeof window === 'undefined' ? '' : window.location.hostname,//token 存储cookie域名
}