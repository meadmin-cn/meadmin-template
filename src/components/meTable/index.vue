<template>
  <div class="me-table">
    <div v-if="toolbar" class="me-toolbar">
      <div v-if="$slots.search" v-show="showSearch" class="me-toolbar-search">
        <slot name="search"></slot>
      </div>
      <div class="me-toolbar-menu">
        <div class="me-toolbar-buttons">
          <el-button v-if="_.vnode.props.onRefresh" @click="$emit('refresh')"><mel-icon-refresh /></el-button>
          <el-button v-if="_.vnode.props.onAdd" type="primary" @click="$emit('add')"><mel-icon-plus /></el-button>
          <slot name="buttons"></slot>
        </div>
        <div class="me-toolbar-tools">
          <el-input
            v-if="_.vnode.props.onQuickSearch"
            v-model="searchText"
            :placeholder="$t('快捷搜索')"
            prefix-icon="mel-icon-search"
            @change="$emit('quickSearch', searchText)"
          />
          <el-button-group v-if="customColumn || exportMenu?.length || print">
            <el-popover v-if="customColumn" :teleported="false" placement="bottom" trigger="click" width="auto">
              <template #reference>
                <el-button icon="mel-icon-grid" :title="$t('自定义列')" />
              </template>
              <template #default>
                <el-scrollbar max-height="300px" class="popover-scrollbar-y">
                  <el-tree
                    node-key="value"
                    :data="customColumnProps!.labels"
                    default-expand-all
                    :default-checked-keys="checkedLabels"
                    :props="{ label: 'label', children: 'children' }"
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
              popper-class="me-exportmenu-popover el-dropdown__popper"
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
            <el-button v-if="print" icon="mel-icon-printer" :title="$t('打印')" @click="printTable(elTableRef, name)" />
            <slot name="tools"></slot>
          </el-button-group>
          <el-button v-if="$slots.search" :title="$t('更多筛选')" @click="showSearch = !showSearch">
            <mel-icon-search></mel-icon-search>
          </el-button>
          <slot name="toolsButton"></slot>
        </div>
      </div>
    </div>
    <el-table v-bind="$attrs" ref="elTableRef" v-loading="loading">
      <component :is="customColumnProps!.children"></component>
      <template #append>
        <slot name="append"></slot>
      </template>
      <template #empty>
        <slot name="empty"></slot>
      </template>
    </el-table>
  </div>
</template>
<script lang="ts">
import { ElTable } from 'element-plus';
import { ComponentOptionsMixin, ExtractPropTypes, PropType, Ref } from 'vue';
import customColumn from './hooks/customColumn';
import exportTable from './hooks/exportTable';
import printTable from './hooks/print';
const props = {
  name: {
    type: String,
    default: 'meTable',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  exportMenu: {
    type: Array as PropType<
      {
        label: string;
        filename?: string;
        handle: (elTable: ELTableInstance, filename: string) => void | 'xlsx' | 'csv' | 'txt';
      }[]
    >,
    default: () => [
      { label: 'xlsx', handle: 'xlsx' },
      { label: 'csv', handle: 'csv' },
      { label: 'txt', handle: 'txt' },
    ],
  },
  print: {
    type: Boolean,
    default: true,
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
};
const emits = {
  quickSearch(searchText: string) {
    //快捷搜索
    return true;
  },
  refresh() {
    return true;
  },
  add() {
    return true;
  },
};
export default defineComponent<
  ComponentProps<typeof ElTable> & Partial<ExtractPropTypes<typeof props>>,
  {
    [k: string]: any;
    elTableRef: Ref<ELTableInstance | undefined>;
    customColumnProps: Ref<ReturnType<typeof customColumn> | undefined>;
    searchText: Ref<string>;
  },
  Record<string, any>,
  Record<string, any>,
  Record<string, any>,
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  typeof emits
>({
  name: 'MeTable',
  inheritAttrs: false,
  props: props as any,
  emits,
  setup(props, { slots, expose }) {
    const showSearch = ref(props.defaultShowSearch);
    const searchText = ref('');
    const customColumnProps = ref<ReturnType<typeof customColumn>>();
    const checkedLabels = shallowRef([] as string[]);
    watch(
      () => props.customColumn,
      (value) => {
        if (value) {
          customColumnProps.value = customColumn(slots.default!);
          checkedLabels.value = [...customColumnProps.value.checkedLabels];
        } else {
          customColumnProps.value?.clean?.();
          customColumnProps.value = {
            children: slots.default! as any,
            labels: [],
            checkedLabels: new Set(),
            clean: undefined,
          };
        }
      },
      { immediate: true },
    );
    const checkChange = (data: { value: string }, is: boolean, childrenIs: boolean) => {
      if (is || childrenIs) {
        customColumnProps.value!.checkedLabels.add(data.value);
      } else {
        customColumnProps.value!.checkedLabels.delete(data.value);
      }
    };
    const elTableRef = ref<ELTableInstance>();
    onMounted(() => {
      elTableRef.value!.getSelectionIndexs = function () {
        const index = [] as number[];
        if (this.data) {
          this.getSelectionRows()?.forEach((item: unknown) => {
            index.push(this.data.indexOf(toRaw(item)));
          });
        }
        return index;
      };
    });
    expose({ elTableRef, customColumnProps, searchText });
    return {
      showSearch,
      searchText,
      customColumnProps,
      checkedLabels,
      checkChange,
      elTableRef,
      exportTable,
      printTable,
      handleExport: (
        handle: (elTable: ELTableInstance, filename: string) => void | 'xls' | 'txt' | 'csv',
        filename: string,
      ) => {
        if (typeof handle === 'string') {
          exportTable(elTableRef.value!, handle, filename);
        } else {
          handle(elTableRef.value!, filename);
        }
      },
    };
  },
});
</script>
<style lang="scss" scoped>
.me-table {
  .me-toolbar {
    margin-top: -12px;
    margin-bottom: 12px;
    .me-toolbar-search {
      margin-top: 12px;
    }
    .me-toolbar-menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      .me-toolbar-buttons {
        margin-top: 12px;
      }
      .me-toolbar-tools {
        margin-top: 12px;
        display: flex;
        align-items: center;
        > {
          :deep(div),
          :deep(span),
          :deep(button) {
            margin-left: 12px;
          }
        }
        > div:first-child,
        > span:first-child,
        > button:first-child {
          margin-left: 0;
        }
        > .el-button-group {
          flex-shrink: 0;
        }
      }
    }
  }
}
:global(.me-exportmenu-popover) {
  width: max-content !important;
  min-width: unset !important;
}
:global(.me-exportmenu-popover .el-dropdown-menu__item:not(.is-disabled):hover) {
  background-color: var(--el-dropdown-menuItem-hover-fill);
  color: var(--el-dropdown-menuItem-hover-color);
}
</style>
