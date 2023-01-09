<template>
  <el-pagination
    v-bind="options"
    :current-page="currentPage"
    :page-size="pageSize"
    :layout="pageLayout"
    :pager-count="pagerCount"
    @update:current-page="setPage"
    @update:page-size="setSize"
  ></el-pagination>
</template>
<script lang="ts">
import { useGlobalStore } from '@/store';
import { ElPagination } from 'element-plus';
import { PropType } from 'vue';
export default defineComponent({
  name: 'Pagination',
  props: {
    options: {
      type: Object as PropType<
        {
          noAutoLayout?: boolean; //关闭手机模式自动更改
          change: (page: number, size: number) => void; //page或size改变时触发
        } & ComponentProps<typeof ElPagination>
      >,
      required: true,
    },
  },
  setup(props) {
    const globalStore = useGlobalStore();
    const pageLayout = computed(() =>
      !props.options?.noAutoLayout && globalStore.isMobile ? 'prev, pager, next' : props.options?.layout,
    );
    const pagerCount = computed(() =>
      !props.options?.noAutoLayout && globalStore.isMobile ? 5 : props.options?.pagerCount,
    );
    const currentPage = ref(1);
    watch(
      () => props.options?.currentPage,
      (page) => {
        currentPage.value = page!;
      },
      { immediate: true },
    );
    const setPage = (page: number) => {
      currentPage.value = page;
      props.options?.change(currentPage.value, pageSize.value);
    };
    const pageSize = ref(10);
    watch(
      () => props.options?.pageSize,
      (size) => {
        pageSize.value = size!;
      },
      { immediate: true },
    );
    const setSize = (size: number) => {
      pageSize.value = size;
      props.options?.change(currentPage.value, pageSize.value);
    };
    return {
      pageLayout,
      pagerCount,
      currentPage,
      pageSize,
      setPage,
      setSize,
    };
  },
});
</script>
