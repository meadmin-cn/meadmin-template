import { forOwn } from 'lodash-es';
const modules = import.meta.glob('./*.json', { eager: true, import: 'default' });
const langs = {} as Record<string, string>;
forOwn(modules, (value) => {
  Object.assign(langs, value);
});
export default langs;
