//  mockProdServer.ts
import { createProdMockServer } from '@meadmin-cn/vite-plugin-mock/es/createProdMockServer';

export function setupProdMockServer() {
  const modules = import.meta.glob('./apiDemo/*.ts', {
    import: 'default',
    eager: true,
  });
  let moduleArr: any[] = [];
  Object.entries(modules).forEach(([key, module]: any) => {
    moduleArr = moduleArr.concat(module);
  });
  createProdMockServer([...moduleArr]);
}
