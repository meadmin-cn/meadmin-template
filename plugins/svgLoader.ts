import svgLoader from 'vite-svg-loader';
export default () =>
  svgLoader({
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false, // 禁用插件
            },
          },
        },
        {
          name: 'removeAttrs',
          params: {
            attrs: '(width|height|fill)', // 清除svg属性
          },
        },
      ],
    },
  });
