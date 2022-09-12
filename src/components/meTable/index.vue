<template>
  <div class="me-table">
    <div class="me-toolbar">
      <div class="me-toolbar-search">
        <slot name="search"></slot>
      </div>
      <div class="me-toolbar-content">
        <slot name="toolbar"></slot>
      </div>
      <div class="me-toolbar-menu">
        <div class="me-toolbar-buttons">
          <el-button v-if="_.vnode.props.onRefresh" @click="$emit('refresh')"><mel-icon-refresh /></el-button>
          <el-button v-if="_.vnode.props.onAdd" @click="$emit('add')"><mel-icon-plus /></el-button>
          <slot name="buttons"></slot>
        </div>
        <div class="me-toolbar-tools">
          <el-input
            v-if="_.vnode.props.onQuickSearch"
            placeholder="快捷搜索"
            prefix-icon="mel-icon-search"
            @change="$emit('quickSearch', $event.target.value)"
          />
          <el-button-group>
            <el-popover v-if="customColumn" placement="bottom" trigger="click" width="auto">
              <template #reference>
                <el-button icon="mel-icon-grid" title="自定义列" />
              </template>
              <template #default>
                <el-tree
                  node-key="value"
                  :data="labels"
                  default-expand-all
                  :default-checked-keys="[...toRaw(checkedLabels)]"
                  :props="{ label: 'label', children: 'children' }"
                  show-checkbox
                  @check-change="checkChange"
                />
              </template>
            </el-popover>
            <el-popover
              v-if="exportMenu"
              pure
              placement="bottom"
              trigger="click"
              popper-class="me-exportmenu-popover el-dropdown__popper"
            >
              <template #reference>
                <el-button icon="mel-icon-download" title="导出" />
              </template>
              <template #default>
                <ul class="el-dropdown-menu">
                  <li
                    v-for="item in exportMenu"
                    :key="item.label"
                    class="el-dropdown-menu__item"
                    @click="item.handle(elTable)"
                  >
                    {{ item.label }}
                  </li>
                </ul>
              </template>
            </el-popover>
            <el-button v-if="print" icon="mel-icon-printer" title="打印" @click="printTable(elTable)" />
            <slot name="tools"></slot>
          </el-button-group>
          <el-button>
            <mel-icon-search></mel-icon-search>
          </el-button>
        </div>
      </div>
    </div>
    <el-table v-bind="$attrs" ref="elTable" v-loading="loading">
      <component :is="children"></component>
    </el-table>
  </div>
</template>
<script lang="ts">
import { ElTable } from 'element-plus';
import { ComponentOptionsMixin, ExtractPropTypes, PropType } from 'vue';
import customColumn from './hooks/customColumn';
import exportTable from './hooks/exportTable';
import printTable from './hooks/print';
const props = {
  loading: {
    type: Boolean,
    default: false,
  },
  exportMenu: {
    type: Array as PropType<{ label: string; handle: (elTable: ELTable) => void }[]>,
    default: () => [
      { label: 'xlsx', handle: (elTable: ELTable) => exportTable(elTable, 'xlsx', 'meTable') },
      { label: 'csv', handle: (elTable: ELTable) => exportTable(elTable, 'csv', 'meTable') },
      { label: 'txt', handle: (elTable: ELTable) => exportTable(elTable, 'txt', 'meTable') },
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
};
const emits = {
  quickSearch(searchText: string) {
    //快捷搜索
    return searchText.length > 0;
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
  Record<string, any>,
  Record<string, any>,
  Record<string, any>,
  Record<string, any>,
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  typeof emits
>({
  name: 'MeTable',
  props: props as any,
  emits,
  setup(props, { slots }) {
    const { children, labels, checkedLabels } = customColumn(slots.default!);
    const checkChange = (data: { value: string }, is: boolean, childrenIs: boolean) => {
      if (is || childrenIs) {
        checkedLabels.add(data.value);
      } else {
        checkedLabels.delete(data.value);
      }
    };
    const elTable = ref<ELTable>();
    onMounted(() => {
      elTable.value!.getSelectionIndexs = function () {
        const index = [] as number[];
        if (this.data) {
          this.getSelectionRows()?.forEach((item: unknown) => {
            index.push(this.data.indexOf(toRaw(item)));
          });
        }
        return index;
      };
    });
    return {
      children,
      labels,
      checkedLabels,
      checkChange,
      toRaw,
      elTable,
      exportTable,
      printTable,
    };
  },
  mounted() {
    console.log(this);
  },
});
</script>
<style lang="scss" scoped>
.me-table {
  margin-top: -10px;
  .me-toolbar {
    margin-top: 10px;
    .me-toolbar-search {
    }
    .me-toolbar-content {
    }
    .me-toolbar-menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      .me-toolbar-buttons {
        margin-bottom: 10px;
      }
      .me-toolbar-tools {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        > div,
        > span,
        > button {
          margin-left: 10px;
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
