<template>
  <div v-resize="getTableHeight" class="me-vxe-table" :class="meClass">
    <div v-if="toolbar" ref="meVxeToolbarRef" class="me-vxe-toolbar">
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
                    :props="elTreeProps"
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
      <vxe-table ref="vxeTableRef" :max-height="tableHeight" v-bind="$attrs">
        <slot></slot>
        <template v-if="$slots.loading" #loading>
          <slot name="loading"></slot>
        </template>
        <template v-if="$slots.empty" #empty>
          <slot name="empty"></slot>
        </template>
      </vxe-table>
    </div>
    <pagination v-if="paginationOptions" ref="mePaginationRef" :options="paginationOptions" class="pagination me-vxe-footer"></pagination>
  </div>
</template>
<script lang="ts">
import './install';
import pagination from './components/pagination.vue';
import { ComponentCustomProperties, ComponentOptionsMixin, ExtractPublicPropTypes, PropType, Ref } from 'vue';
import {
  VXEComponent,
  VxeTableDefines,
  VxeTableEventProps,
  VxeTableInstance,
  VxeTableProps,
  VxeTablePropTypes,
} from 'vxe-table';
import { debounce } from 'lodash-es';
import { TreeNodeData } from 'element-plus/es/components/tree/src/tree.type';
import resize  from './directives/resize';
import {getFullHight} from './util';
const props = {
  meClass: [String, Array] as PropType<string[] | string>,
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
    type: [Object, Boolean] as PropType<VxeTablePropTypes.PrintConfig | boolean>,
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
  paginationOptions: Object as PropType<InstanceType<typeof pagination>['options']>,
  autoHeight:{
    type: Boolean,
    default: true,
  },
};
const emits = ['quickSearch', 'refresh', 'add', 'update:quickSearch'] as unknown as {
  quickSearch: (searchText: string) => void;
  refresh: () => void;
  add: () => void;
  ['update:quickSearch']: (searchText: string) => void;
};
export default defineComponent<
  ComponentProps<VXEComponent<VxeTableProps, VxeTableEventProps>> & ExtractPublicPropTypes<typeof props>,
  { vxeTableRef: Ref<VxeTableInstance | undefined> },
  Record<string, any>,
  Record<string, any>,
  Record<string, any>,
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  typeof emits
>({
  name: 'MeVxeTable',
  components: { pagination },
  directives:{resize},
  inheritAttrs: false,
  props: props as any,
  emits,
  setup(props, { expose }) {
    const vxeTableRef = ref<VxeTableInstance>();
    const meVxeToolbarRef = ref<HTMLDivElement|null>(null);
    const mePaginationRef = ref<InstanceType<typeof pagination>|null>(null);
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
    expose({ vxeTableRef });
    const tableHeight = ref<number>();
    const getTableHeight = (data:{width:number,height:number})=>{
      if(props.autoHeight){
        const toolbarHeight = meVxeToolbarRef.value? getFullHight(meVxeToolbarRef.value):0;
        const paginationHeight = mePaginationRef.value?.$el? getFullHight(mePaginationRef.value?.$el):0;
        tableHeight.value = data.height - toolbarHeight - paginationHeight;
      }
    }
    return {
      elTreeProps: {
        label: (item: TreeNodeData) => (item.type === 'seq' ? '#' : item.title),
        children: 'children',
      },
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
      getTableHeight,
      tableHeight,
      meVxeToolbarRef,
      mePaginationRef,
    };
  },
});
</script>
<style lang="scss" scoped>
.me-vxe-table {
  $margin-top: 15px;
  $margin-left: 12px;
  display: flex;
  flex-direction: column;
  .me-vxe-toolbar {
    margin-top: -$margin-top;
    margin-bottom: $margin-top;
    flex-shrink: 0;
    flex-grow: 0;

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
  .me-vxe-body{
    flex-shrink: 1;
    overflow: auto;
  }
  .pagination {
    flex-shrink: 0;
    flex-grow: 0;
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
