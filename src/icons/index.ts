import * as elementPlusIconsVue from '@element-plus/icons-vue';
import path from 'path-browserify';
import { App, Component, h } from 'vue';
import { upperFirst } from 'lodash-es';

export function installIcon(app: App) {
  function componentIcon(name: string, iconComponent: Component) {
    app.component(name, {
      props: {
        size: [Number, String],
        color: String,
      },
      render() {
        let fontSize: string | undefined;
        if (this.size) {
          if (typeof this.size === 'string') {
            fontSize = this.size;
          } else if (typeof this.size === 'number') {
            fontSize = `${this.size as string}px`;
          }
        }
        return h(
          'i',
          {
            class: 'el-icon',
            style: {
              fontSize,
              color: this.color,
            },
          },
          h(iconComponent),
        );
      },
    });
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
