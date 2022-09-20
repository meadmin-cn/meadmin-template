<template>
  <div class="role-permissions">
    <me-vxe-table
      :data="group.data"
      :loading="group.loading"
      :row-config="{ isCurrent: true, useKey: true }"
      :tree-config="{ expandAll: true, line: true }"
      :custom-column="false"
      :print="false"
      :export-menu="[]"
      show-overflow
      height="500px"
      me-class="group"
      @add="getGroup"
      @refresh="getGroup"
      @quick-search="getGroup()"
    >
      <vxe-column field="name" title="角色" tree-node>
        <template #default="{ row }">
          <div class="group-item">
            {{ row.name }}
            <div class="group-item-btn">
              <el-link type="primary" :underline="false"><mel-icon-edit></mel-icon-edit></el-link>
              <el-link type="danger" :underline="false" style="margin-left: 5px"
                ><mel-icon-delete></mel-icon-delete
              ></el-link>
            </div>
          </div>
        </template>
      </vxe-column>
    </me-vxe-table>
    <me-vxe-table
      ref="roleRef"
      :data="role"
      :tree-config="{ expandAll: true, line: true }"
      :checkbox-config="{ labelField: 'id' }"
      :row-config="{ keyField: 'id' }"
      align="center"
      border="full"
      height="500px"
      me-class="role"
    >
      <vxe-column type="checkbox" title="ID" tree-node width="240px" align="left" header-align="center"></vxe-column>
      <vxe-column field="name" title="菜单"></vxe-column>
      <vxe-column field="role" title="权限"></vxe-column>
      <vxe-column field="sort" title="排序"></vxe-column>
      <vxe-column field="status" title="状态">
        <template #default="{ row }">
          {{ row.status == 1 ? '开启' : '关闭' }}
        </template>
      </vxe-column>
    </me-vxe-table>
  </div>
</template>
<script lang="ts" setup name="RolePermissions">
import { VxeTableInstance } from 'vxe-table';

const group = reactive({
  loading: true,
  data: [] as any,
});
const getGroup = () => {
  group.loading = true;
  setTimeout(() => {
    group.loading = false;
    group.data = [
      {
        id: 1,
        name: '超级管理员',
        children: [
          {
            id: 2,
            name: '一级管理员1',
            children: [
              {
                id: 21,
                name: '二级管理员1-1',
              },
              {
                id: 22,
                name: '二级管理员1-2',
              },
              {
                id: 23,
                name: '二级管理员1-3',
                children: [
                  {
                    id: 231,
                    name: '三级管理员1-3-1',
                  },
                  {
                    id: 232,
                    name: '三级管理员1-3-2',
                  },
                  {
                    id: 233,
                    name: '三级管理员1-3-3',
                  },
                  {
                    id: 234,
                    name: '三级管理员1-3-4',
                    children: [
                      {
                        id: 2341,
                        name: '四级管理员1-3-4-1',
                      },
                    ],
                  },
                ],
              },
              {
                id: 24,
                name: '二级管理员1-4',
              },
              {
                id: 25,
                name: '二级管理员1-5',
                children: [
                  {
                    id: 251,
                    name: '三级管理员1-5-1',
                  },
                  {
                    id: 252,
                    name: '三级管理员1-5-2',
                  },
                  {
                    id: 253,
                    name: '三级管理员1-5-3',
                  },
                ],
              },
              {
                id: 26,
                name: '二级管理员1-6',
              },
              {
                id: 27,
                name: '二级管理员1-7',
              },
            ],
          },
          {
            id: 3,
            name: '一级管理员2',
            children: [
              {
                id: 31,
                name: '二级管理员2-1',
              },
              {
                id: 32,
                name: '二级管理员2-2',
              },
              {
                id: 33,
                name: '二级管理员2-3',
              },
              {
                id: 34,
                name: '二级管理员2-4',
              },
              {
                id: 35,
                name: '二级管理员2-5',
              },
            ],
          },
          {
            id: 4,
            name: '一级管理员3',
          },
        ],
      },
    ];
  }, 1000);
};
getGroup();
const roleRef = ref<{ vxeTable: VxeTableInstance }>();
const role = [
  {
    id: 1,
    name: '示例',
    role: 'example',
    sort: 1,
    status: 1,
    children: [
      {
        id: 11,
        name: '权限',
        role: 'permission',
        sort: 1,
        status: 1,
      },
      {
        id: 12,
        name: '组件语言包',
        role: 'componentLang',
        sort: 2,
        status: 1,
      },
      {
        id: 13,
        name: '请求示例',
        role: 'example/request',
        sort: 3,
        status: 1,
      },
      {
        id: 14,
        name: '外链',
        role: 'link',
        sort: 4,
        status: 1,
      },
      {
        id: 15,
        name: '页面权限',
        role: 'pagePermission',
        sort: 5,
        status: 1,
      },
      {
        id: 16,
        name: '多级菜单',
        role: 'moreMenu',
        sort: 6,
        status: 1,
        children: [
          {
            id: 161,
            name: '多级菜单1',
            role: 'moreMenu1',
            sort: 1,
            status: 1,
            children: [
              {
                id: 1611,
                name: '多级菜单1-1',
                role: 'moreMenu1-1',
                sort: 1,
                status: 1,
                children: [
                  {
                    id: 16111,
                    name: '多级菜单1-1-1',
                    role: 'moreMenu1-1-1',
                    sort: 1,
                    status: 1,
                  },
                  {
                    id: 16112,
                    name: '组件语言包',
                    role: 'moreMenu1-1-lang',
                    sort: 1,
                    status: 1,
                  },
                ],
              },
              {
                id: 1612,
                name: '多级菜单1-6-2',
                role: 'moreMenu1-1-lang',
                sort: 1,
                status: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: '组件',
    sort: 2,
    status: 1,
    role: 'component',
    children: [
      {
        id: 21,
        name: '数字动画',
        role: 'meNumber',
        sort: 1,
        status: 1,
      },
      {
        id: 22,
        name: '编辑器',
        sort: 2,
        role: 'editor',
        status: 1,
        children: [
          {
            id: 221,
            name: 'WangEditor',
            role: 'wangEditor',

            sort: 1,
            status: 1,
          },
        ],
      },
      {
        id: 23,
        name: '表格',
        sort: 3,
        role: 'table',
        status: 1,
      },
      {
        id: 24,
        name: 'vxeTable',
        sort: 4,
        role: 'vxeTable',
        status: 1,
      },
    ],
  },
  {
    id: 3,
    name: '自定义组件',
    sort: 3,
    status: 1,
    role: 'customComponent',
  },
  {
    id: 4,
    name: '角色权限',
    sort: 3,
    status: 1,
    role: 'rolePermission',
  },
];
setTimeout(() => {
  roleRef.value!.vxeTable.setCheckboxRow({ id: 1 }, true);
}, 1000);
</script>
<style lang="scss" scoped>
.role-permissions {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
  .group {
    flex: 1;
    margin: 10px;
    min-width: 300px;
    .group-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      .group-item-btn {
        display: none;
      }
    }
    :deep(.row--current) {
      .group-item-btn {
        display: block;
      }
    }
  }
  .role {
    flex: 3;
    margin: 10px;
  }
}
</style>
