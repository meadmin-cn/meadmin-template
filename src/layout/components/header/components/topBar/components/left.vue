<template>
  <el-space class="left">
    <div></div>
    <Expand></Expand>
    <el-scrollbar
      v-if="!globalStore.isMobile && themeConfig.breadcrumb"
      :min-size="10"
      wrap-style="display:flex;align-items:center"
    >
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="(item, index) in breadcrumbList"
          :key="item.path"
          :to="index === breadcrumbList.length - 1 || !item.redirect ? undefined : item"
          >{{ $t(item.meta!.title!) }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </el-scrollbar>
  </el-space>
</template>
<script setup lang="ts" name="Left">
import { mitter, event } from '@/event';
import { useSettingStore, useGlobalStore, useRouteStore } from '@/store';
import { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import Expand from '@/layout/components/expand.vue';
const { themeConfig } = storeToRefs(useSettingStore());
const globalStore = useGlobalStore();
const breadcrumbList = ref([] as Pick<RouteRecordRaw, 'name' | 'path' | 'meta' | 'redirect'>[]);
const route = useRoute();
const { routes } = storeToRefs(useRouteStore());
const setBreadcrumbList = (route: RouteLocationNormalized) => {
  const list = [] as Pick<RouteRecordRaw, 'name' | 'path' | 'meta' | 'redirect'>[];
  let temp = { children: routes.value } as unknown as RouteRecordRaw;
  route.meta.menuIndex!.forEach((item) => {
    temp = temp.children![item];
    if (
      temp.meta?.title &&
      temp.meta.breadcrumb !== false &&
      (temp.meta.breadcrumb || temp.children?.filter((v) => v.meta?.breadcrumb !== false).length !== 1)
    ) {
      list.push({
        name: temp.name,
        path: temp.path,
        meta: temp.meta,
        redirect: temp.redirect === route.path ? undefined : temp.redirect,
      });
    }
  });
  breadcrumbList.value = list;
};
setBreadcrumbList(route);
mitter.on(event.BEFORE_ROUTE_CHANGE, ({ to }) => setBreadcrumbList(to), true);
</script>
<style lang="scss" scoped>
.left {
  height: 100%;

  .fold-expand {
    font-size: 20px;
  }

  &:deep(.el-breadcrumb__inner.is-link) {
    font-weight: normal;
  }

  &:deep(.el-space__item:nth-child(3)) {
    height: 80%;
  }
}
</style>
