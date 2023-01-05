import { viteMockServe } from '@meadmin-cn/vite-plugin-mock';
import { ConfigEnv } from 'vite';
export default ({ command }: ConfigEnv) =>
  viteMockServe({
    mockPath: 'mock/apiDemo',
    localEnabled: command === 'serve',
    prodEnabled: command !== 'serve',
    //  这样可以控制关闭mock的时候不让mock打包到最终代码内
    injectCode: `
    import { setupProdMockServer } from '../mock/index';
    setupProdMockServer();
    `,
  });
