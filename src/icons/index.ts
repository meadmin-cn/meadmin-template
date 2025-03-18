import * as elementPlusIconsVue from '@element-plus/icons-vue';
import path from 'path-browserify';
import { App, Component, h } from 'vue';
import { upperFirst } from 'lodash-es';

export function installIcon(app: App) {
  function componentIcon(name: string, iconComponent: Component) {
    app.component(name, defineComponent({
      props: {
        size: [Number, String],
        color: String,
      },
      setup(props) {
        let fontSize: string | undefined;
        if (props.size) {
          if (typeof props.size === 'string') {
            fontSize = props.size;
          } else if (typeof props.size === 'number') {
            fontSize = `${props.size}px`;
          }
        }
        return ()=>h(
          'i',
          {
            class: 'el-icon',
            style: {
              fontSize,
              color: props.color,
            },
          },
          h(iconComponent),
        );
      },
    }));
  }
  // 注册element icons
  for (const [key, component] of Object.entries(elementPlusIconsVue)) {
    componentIcon(`MelIcon${key}`, component);
  }
  // 注册自定义的svg icons
  const svgModules = import.meta.glob('./svg/*.svg', {
    import: 'default',
    eager: true,
  });
  for (const [key, component] of Object.entries(<Record<string, Component>>svgModules)) {
    componentIcon('MeIcon' + upperFirst(path.parse(key).name), component);
  }
}
