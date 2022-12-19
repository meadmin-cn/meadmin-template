<template>
  <div class="me-vxe-table" :class="meClass">
    <div v-if="toolbar" class="me-vxe-toolbar">
      <div v-if="$slots.search" v-show="showSearch" class="me-vxe-toolbar-search">
        <slot name="search"></slot>
      </div>
      <div class="me-vxe-toolbar-menu">
        <div class="me-vxe-toolbar-buttons">
          <el-button v-if="_.vnode.props.onRefresh" @click="$emit('refresh')">
            <mel-icon-refresh />
          </el-button>
          <el-button v-if="_.vnode.props.onAdd" type="primary" @click="$emit('add')">
            <mel-icon-plus />
          </el-button>
          <slot name="buttons"></slot>
        </div>
        <div class="me-vxe-toolbar-tools">
          <el-input
            v-if="quickSearch !== undefined"
            :model-value="quickSearch"
            :placeholder="
              typeof quickSearchPlaceholder === 'function' ? quickSearchPlaceholder($t) : quickSearchPlaceholder
            "
            prefix-icon="mel-icon-search"
            @update:model-value="$emit('update:quickSearch', $event)"
            @change="$emit('quickSearch', $event)"
          />
          <el-button-group v-if="customColumn || exportMenu?.length || print">
            <el-popover v-if="customColumn" :teleported="false" placement="bottom" trigger="click" width="auto">
              <template #reference>
                <el-button icon="mel-icon-grid" :title="$t('自定义列')" />
              </template>
              <template #default>
                <el-scrollbar max-height="300px" class="popover-scrollbar-y">
                  <el-tree
                    node-key="id"
                    :default-checked-keys="defaultChecked"
                    :data="collectColumn"
                    default-expand-all
                    :props="{ label: (item:any)=>item.type==='seq'?'#':item.title, children: 'children' }"
                    show-checkbox
                    @check-change="checkChange"
                  />
                </el-scrollbar>
              </template>
            </el-popover>
            <el-popover
              v-if="exportMenu?.length"
              pure
              placement="bottom"
              trigger="click"
              popper-class="me-vxe-exportmenu-popover el-dropdown__popper"
            >
              <template #reference>
                <el-button icon="mel-icon-download" :title="$t('导出')" />
              </template>
              <template #default>
                <ul class="el-dropdown-menu">
                  <li
                    v-for="item in exportMenu"
                    :key="item.label"
                    class="el-dropdown-menu__item"
                    @click="handleExport(item.handle, item.filename ?? name!)"
                  >
                    {{ item.label }}
                  </li>
                </ul>
              </template>
            </el-popover>
            <el-button v-if="print" icon="mel-icon-printer" :title="$t('打印')" @click="printTable()" />
            <slot name="tools"></slot>
          </el-button-group>
          <el-button v-if="$slots.search" :title="$t('更多筛选')" @click="showSearch = !showSearch">
            <mel-icon-search></mel-icon-search>
          </el-button>
          <slot name="toolsButton"></slot>
        </div>
      </div>
    </div>
    <div class="me-vxe-body">
      <vxe-table ref="vxeTableRef" v-bind="$attrs">
        <slot></slot>
        <template #empty>
          <slot name="empty"></slot>
        </template>
      </vxe-table>
    </div>
    <el-pagination
      v-if="paginationOptions"
      v-bind="paginationOptions"
      v-model:current-page="paginationOptions.currentPage"
      v-model:page-size="paginationOptions.pageSize"
      :layout="pageLayout"
      :pager-count="pagerCount"
      class="pagination me-vxe-footer"
    ></el-pagination>
  </div>
</template>
<script lang="ts">
import './install';
import { ComponentCustomProperties, ComponentOptionsMixin, ExtractPropTypes, PropType, Ref } from 'vue';
import {
  VXEComponent,
  VxeTableDefines,
  VxeTableEventProps,
  VxeTableInstance,
  VxeTableProps,
  VxeTablePropTypes,
} from 'vxe-table';
import { debounce } from 'lodash-es';
import { ElPagination } from 'element-plus';
import { useGlobalStore } from '@/store';
const props = {
  meClass: [String, Array as PropType<string[]>],
  name: {
    type: String,
    default: 'meVxeTable',
  },
  exportMenu: {
    type: Array as PropType<
      {
        label: string;
        filename?: string;
        handle: (vxeTable: VxeTableInstance, filename: string) => void | 'csv' | 'html' | 'xml' | 'txt';
      }[]
    >,
    default: () => [
      { label: 'csv', handle: 'csv' },
      { label: 'html', handle: 'html' },
      { label: 'xml', handle: 'xml' },
      { label: 'txt', handle: 'txt' },
    ],
  },
  print: {
    type: [Object as PropType<VxeTablePropTypes.PrintConfig>, Boolean],
    default: () => ({}),
  },
  customColumn: {
    type: Boolean,
    default: true,
  },
  defaultShowSearch: {
    type: Boolean,
    default: false,
  },
  toolbar: {
    type: Boolean,
    default: true,
  },
  quickSearch: String,
  quickSearchPlaceholder: {
    type: [String, Function] as PropType<string | ((t: ComponentCustomProperties['$t']) => string)>,
    default: () => (t: ComponentCustomProperties['$t']) => t('快捷搜索'),
  },
  paginationOptions: Object as PropType<
    {
      noAutoLayout?: boolean; //关闭手机模式自动更改
      onChange: (page: number, size: number) => void; //page或size改变是触发
    } & ComponentProps<typeof ElPagination>
  >,
};
const emits = ['quickSearch', 'refresh', 'add', 'update:quickSearch'] as unknown as {
  quickSearch: (searchText: string) => void;
  refresh: () => void;
  add: () => void;
  ['update:quickSearch']: (searchText: string) => void;
};
export default defineComponent<
  ComponentProps<VXEComponent<VxeTableProps, VxeTableEventProps>> & Partial<ExtractPropTypes<typeof props>>,
  { [k: string]: any; vxeTableRef: Ref<VxeTableInstance | undefined> },
  Record<string, any>,
  Record<string, any>,
  Record<string, any>,
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  typeof emits
>({
  name: 'MeVxeTable',
  inheritAttrs: false,
  props: props as any,
  emits,
  setup(props, { expose }) {
    const vxeTableRef = ref<VxeTableInstance>();
    const showSearch = ref(props.defaultShowSearch);
    const collectColumn = ref([] as VxeTableDefines.ColumnInfo[]);
    const defaultChecked = ref([] as string[]);
    const refreshColumn = debounce(() => {
      vxeTableRef.value?.refreshColumn();
    }, 500);
    const checkChange = (data: VxeTableDefines.ColumnInfo, is: boolean) => {
      data.visible = is;
      refreshColumn();
    };
    onMounted(() => {
      nextTick(() => {
        const { collectColumn: origionCollectColumn, fullColumn } = vxeTableRef.value!.getTableColumn();
        collectColumn.value = origionCollectColumn;
        defaultChecked.value = fullColumn.reduce((previousValue, currentValue) => {
          if (currentValue.visible) {
            previousValue.push(currentValue.id);
          }
          return previousValue;
        }, [] as string[]);
      });
    });

    const globalStore = useGlobalStore();
    const pageLayout = computed(() =>
      !props.paginationOptions?.noAutoLayout && globalStore.isMobile
        ? 'prev, pager, next'
        : props.paginationOptions?.layout,
    );
    const pagerCount = computed(() =>
      !props.paginationOptions?.noAutoLayout && globalStore.isMobile ? 5 : props.paginationOptions?.pagerCount,
    );
    if (props.paginationOptions?.onChange) {
      watch([() => props.paginationOptions!.currentPage, () => props.paginationOptions!.pageSize], ([page, size]) =>
        props.paginationOptions?.onChange(page!, size!),
      );
    }

    expose({ vxeTableRef });
    return {
      vxeTableRef,
      collectColumn,
      defaultChecked,
      checkChange,
      handleExport: (
        handle: (vxeTable: VxeTableInstance, filename: string) => void | 'csv' | 'html' | 'xml' | 'txt',
        filename: string,
      ) => {
        if (typeof handle === 'string') {
          vxeTableRef.value!.exportData({
            type: handle,
            filename,
            data: vxeTableRef.value!.getCheckboxRecords().length ? vxeTableRef.value!.getCheckboxRecords() : undefined,
          });
        } else {
          handle(vxeTableRef.value!, filename);
        }
      },
      printTable: () => {
        vxeTableRef.value!.print(
          Object.assign(
            {
              sheetName: props.name,
              data: vxeTableRef.value!.getCheckboxRecords().length
                ? vxeTableRef.value!.getCheckboxRecords()
                : undefined,
            },
            props.print === true,
          ),
        );
      },
      showSearch,
      pageLayout,
      pagerCount,
    };
  },
});
</script>
<style lang="scss" scoped>
.me-vxe-table {
  $margin-top: 15px;
  $margin-left: 12px;

  .me-vxe-toolbar {
    margin-top: -$margin-top;
    margin-bottom: $margin-top;

    .me-vxe-toolbar-search {
      margin-top: $margin-top;
    }

    .me-vxe-toolbar-menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      .me-vxe-toolbar-buttons {
        > {
          :deep(*) {
            margin-top: $margin-top;
          }
        }
      }

      .me-vxe-toolbar-tools {
        margin-top: $margin-top;
        display: flex;
        align-items: center;

        > {
          :deep(*:not(:first-child)) {
            margin-left: $margin-left;
          }
        }

        > .el-button-group {
          flex-shrink: 0;
        }
      }
    }
  }

  .pagination {
    margin-top: $margin-top;
    justify-content: center;
  }
}

:global(.me-vxe-exportmenu-popover) {
  width: max-content !important;
  min-width: unset !important;
}

:global(.me-vxe-exportmenu-popover .el-dropdown-menu__item:not(.is-disabled):hover) {
  background-color: var(--el-dropdown-menuItem-hover-fill);
  color: var(--el-dropdown-menuItem-hover-color);
}
</style>
