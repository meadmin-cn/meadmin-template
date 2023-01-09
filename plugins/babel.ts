import { babel } from '@rollup/plugin-babel';
import { createRequire } from 'node:module';
export default () =>
  babel({
    babelrc: false,
    extensions: ['.ts', '.tsx'],
    plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
    presets: [
      [
        '@babel/preset-env',
        {
          targets: ['chrome 87', 'safari 13', 'firefox 78', 'edge 88'],
          useBuiltIns: 'usage',
          bugfixes: true,
          loose: false,
          modules: false,
          corejs: createRequire(import.meta.url)('core-js/package.json').version,
          shippedProposals: true,
          ignoreBrowserslistConfig: true,
        },
      ],
    ],
    exclude: 'node_modules/**',
    babelHelpers: 'runtime',
  });
