export default {
  tokenName: 'auth-token', // cookie中存储的token key
  tokenExpires: 7, // token 过期时间
  tokenDomain: typeof window === 'undefined' ? '' : window.location.hostname, // token 存储cookie域名
};
