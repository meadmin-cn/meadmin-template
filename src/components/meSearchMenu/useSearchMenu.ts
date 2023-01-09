import { useGlobalStore, useRouteStore } from '@/store';
import { RouteRecordRaw } from 'vue-router';
import { resolvePath, jump } from '@/router';

import { debounce } from 'lodash-es';
const menuList = [] as { path: string; isLink?: boolean; title: string[] }[];

const createMenuList = (routes: RouteRecordRaw[], baseTitle: string[] = [], basePath = '') => {
  routes.forEach((item) => {
    if (item.meta?.title) {
      const path = resolvePath(item.path, basePath);
      const title = [...baseTitle, item.meta.title];
      if (!item.meta.hideMenu && (item.redirect || !item.children?.length)) {
        menuList.push({
          path,
          title,
          isLink: item.meta.isLink,
        });
      }
      if (item.children) {
        createMenuList(item.children, title, path);
      }
    }
  });
};

export const useSearchMenu = (debounceTime = 500) => {
  const { i18n } = useGlobalStore();
  const { routes } = useRouteStore();
  !menuList.length && createMenuList(routes);
  const filteredMenu = ref<{ path: string; meta: { isLink?: boolean; title: string } }[]>([]);
  const activeIndex = ref(0);
  const search = debounce((searchText: string) => {
    filteredMenu.value = [];
    activeIndex.value = 0;
    searchText &&
      menuList.forEach((item) => {
        const title = item.title.map((v) => i18n.t(v)).join(' > ');
        if (title.search(searchText) > -1) {
          filteredMenu.value.push({
            path: item.path,
            meta: {
              title,
              isLink: item.isLink,
            },
          });
        }
        return filteredMenu.value;
      });
  }, debounceTime);

  // Arrow key up
  function handleUp() {
    if (!filteredMenu.value.length) return false;
    activeIndex.value--;
    if (activeIndex.value < 0) {
      activeIndex.value = filteredMenu.value.length - 1;
    }
    return true;
  }

  // Arrow key down
  function handleDown() {
    if (!filteredMenu.value.length) return false;
    activeIndex.value++;
    if (activeIndex.value > filteredMenu.value.length - 1) {
      activeIndex.value = 0;
    }
    return true;
  }

  // enter keyboard event
  async function handleEnter() {
    if (!filteredMenu.value[activeIndex.value]) return false;
    jump(filteredMenu.value[activeIndex.value]);
    return true;
  }

  return {
    search,
    filteredMenu,
    activeIndex,
    handleUp,
    handleDown,
    handleEnter,
  };
};
