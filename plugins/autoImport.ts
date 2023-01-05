import { dirname, resolve } from 'path';
import * as fs from 'fs';
import { createPlugin } from 'vite-plugin-autogeneration-import-file';
import { fileURLToPath } from 'url';
const { autoImport, resolver: resolverFn } = createPlugin();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
function pathResolve(dir: string) {
  return resolve(__dirname, '../', dir);
}
export default () =>
  autoImport([
    // 自动生成
    {
      // svg icon type
      pattern: ['*.svg'],
      dir: pathResolve('src/icons/svg'),
      toFile: pathResolve('types/meIconComments.d.ts'),
      name: 'MeIcon_{{name}}',
      template: fs.readFileSync(pathResolve('./template/meIconComments.d.ts'), 'utf-8'),
      codeTemplates: [{ key: '//code', template: '{{name}}: Icon;\n    ' }],
    },
    {
      // pinia module
      pattern: ['**/*.{ts,js}', '*.{ts,js}'],
      dir: pathResolve('src/store/modules'),
      toFile: pathResolve('src/store/module.ts'),
      name: 'use_{{name}}_store',
    },
    {
      // auto import directives
      pattern: ['*.ts', '**/index.ts'],
      dir: pathResolve('src/directives'),
      toFile: pathResolve('types/directives.d.ts'),
      template: fs.readFileSync(pathResolve('./template/directives.d.ts'), 'utf-8'),
      codeTemplates: [
        {
          key: '//code',
          template: '{{name}}: typeof import("{{path}}")["default"];\n    ',
        },
      ],
      name: 'V_{{name}}',
    },
    {
      // auto import components
      pattern: ['*.{vue,ts}', '**/index.{vue,ts}'],
      dir: pathResolve('src/components'),
      toFile: pathResolve('types/components.d.ts'),
      template: fs.readFileSync(pathResolve('./template/components.d.ts'), 'utf-8'),
      codeTemplates: [
        {
          key: '//code',
          template: '{{name}}: typeof import("{{path}}")["default"];\n    ',
        },
        {
          key: '//typeCode',
          template: 'type {{name}}Instance = InstanceType<typeof import("{{path}}")["default"]>;\n  ',
        },
      ],
      name: '_{{name}}',
    },
  ]);

export const resolver = resolverFn;
