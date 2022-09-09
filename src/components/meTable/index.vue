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
          <slot name="buttons"></slot>
        </div>
        <div class="me-toolbar-tools">
          <el-input placeholder="快捷搜索" prefix-icon="mel-icon-search" />
          <el-button-group>
            <el-popover placement="bottom" trigger="click" width="auto">
              <template #reference>
                <el-button icon="mel-icon-grid" title="自定义列" />
              </template>
              <template #default>
                <el-tree
                  node-key="value"
                  @check-change="checkChange"
                  :data="labels"
                  default-expand-all
                  :default-checked-keys="[...toRaw(checkedLabels)]"
                  :props="{ label: 'label', children: 'children' }"
                  show-checkbox
                />
              </template>
            </el-popover>

            <el-button icon="mel-icon-download" title="导出" />
            <el-button icon="mel-icon-printer" title="打印" @click="print()" />
            <slot name="tools"></slot>
          </el-button-group>
          <el-button>
            <mel-icon-search></mel-icon-search>
          </el-button>
        </div>
      </div>
    </div>
    <el-table v-bind="$attrs" ref="elTable">
      <component :is="children"></component>
    </el-table>
  </div>
</template>
<script lang="ts">
import { ElTable } from 'element-plus';
import customColumn from './hooks/customColumn';
import printTable from './hooks/print';
import { toRaw } from 'vue';
export default defineComponent<ComponentProps<typeof ElTable>>({
  name: 'MeTable',
  props: {} as any,
  setup(props, { slots }) {
    const { children, labels, checkedLabels } = customColumn(slots.default!);
    const checkChange = (data: { value: string }, is: boolean, childrenIs: boolean) => {
      if (is || childrenIs) {
        checkedLabels.add(data.value);
      } else {
        checkedLabels.delete(data.value);
      }
    };
    const elTable = ref<undefined | InstanceType<typeof ElTable>>();
    return {
      children,
      labels,
      checkedLabels,
      checkChange,
      toRaw,
      elTable,
      print: () => printTable(elTable.value!.$el, 'myTable'),
    };
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
      .me-toolbar-buttons {
      }
      .me-toolbar-tools {
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

  :deep(.el-table) {
    margin-top: 10px;
  }
}
</style>
