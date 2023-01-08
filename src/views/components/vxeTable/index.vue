<template>
  <el-card shadow="never" class="vxe-table-demo">
    <me-vxe-table
      ref="meVxeTableRef"
      v-model:quick-search="searchForm.search"
      :loading="loading"
      :data="data?.list"
      :footer-method="footerMethod"
      :edit-config="{ trigger: 'click', mode: 'row', showStatus: true }"
      :print="print"
      :pagination-options="paginationOptions"
      stripe
      height="600px"
      me-class="table"
      border
      show-overflow
      show-footer
      keep-source
      class="my-xtable-element"
      @refresh="getData"
      @quick-search="getData(1)"
    >
      <template #search>
        <el-form ref="searchRef" :model="searchForm" inline label-width="100px" class="search">
          <el-form-item label="名称" prop="name">
            <el-input v-model="searchForm.name" />
          </el-form-item>
          <el-form-item label="类型" prop="type">
            <el-select v-model="searchForm.type" clearable>
              <el-option label="类型1" value="1" />
              <el-option label="类型2" value="2" />
            </el-select>
          </el-form-item>
          <el-form-item label="日期" prop="date">
            <el-date-picker v-model="searchForm.date" type="date" />
          </el-form-item>
          <el-form-item label="地址" prop="address">
            <el-input v-model="searchForm.address" />
          </el-form-item>
          <el-form-item label="邮政编码" prop="zip">
            <el-input v-model="searchForm.zip" />
          </el-form-item>
          <el-form-item label=" ">
            <el-button type="primary" @click="getData(1)">查询</el-button>
            <el-button @click="()=>($refs.searchRef as FormInstance).resetFields()">重置</el-button>
          </el-form-item>
        </el-form>
      </template>
      <template #buttons>
        <el-button @click="() => (print = print ? false : {})">打印显/隐</el-button>
        <el-button @click="xTable!.clearCheckboxRow()">全选清空</el-button>
      </template>
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="80">
        <template #header>
          <span>序号</span>
          <i class="el-icon-question"></i>
        </template>
      </vxe-column>
      <vxe-colgroup title="Group1">
        <vxe-column field="name" title="ElInput" min-width="140" :edit-render="{}">
          <template #edit="scope">
            <el-input v-model="scope.row.name" @input="xTable!.updateStatus(scope)"></el-input>
          </template>
        </vxe-column>
        <vxe-column field="role" title="ElAutocomplete" min-width="160" :edit-render="{}">
          <template #edit="{ row }">
            <el-autocomplete v-model="row.role" :fetch-suggestions="roleSearchEvent"></el-autocomplete>
          </template>
        </vxe-column>
        <vxe-column field="age" title="ElInputNumber" width="160" :edit-render="{}">
          <template #header="{ column }">
            <span>{{ column.title }}</span>
            <i class="el-icon-warning"></i>
          </template>
          <template #edit="{ row }">
            <el-input-number v-model="row.age" :max="99" :min="18"></el-input-number>
          </template>
        </vxe-column>
        <vxe-colgroup title="Group2">
          <vxe-column field="sex" title="ElSelect" width="140" :edit-render="{}">
            <template #edit="scope">
              <el-select v-model="scope.row.sex" @change="xTable!.updateStatus(scope)">
                <el-option
                  v-for="item in demo1.sexList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </template>
            <template #default="{ row }">{{ getSelectLabel(row.sex, demo1.sexList) }}</template>
          </vxe-column>
          <vxe-column field="sex1" title="ElSelect" width="180" :edit-render="{}">
            <template #edit="scope">
              <el-select v-model="scope.row.sex1" multiple>
                <el-option
                  v-for="item in demo1.sexList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </template>
            <template #default="{ row }">{{ getSelectMultipleLabel(row.sex1, demo1.sexList) }}</template>
          </vxe-column>
          <vxe-column field="region" title="ElCascader" width="200" :edit-render="{}">
            <template #edit="{ row }">
              <el-cascader v-model="row.region" :options="demo1.regionList"></el-cascader>
            </template>
            <template #default="{ row }">{{ getCascaderLabel(row.region, demo1.regionList) }}</template>
          </vxe-column>
        </vxe-colgroup>
      </vxe-colgroup>
      <vxe-colgroup title="Group1">
        <vxe-column field="date" title="ElDatePicker" width="200" :edit-render="{}">
          <template #edit="{ row }">
            <el-date-picker v-model="row.date" type="date" format="YYYY/MM/DD"></el-date-picker>
          </template>
          <template #default="{ row }">{{ formatDate(row.date, 'YYYY/MM/DD') }}</template>
        </vxe-column>
        <vxe-column field="date1" title="ElDatePicker" width="220" :edit-render="{}">
          <template #edit="{ row }">
            <el-date-picker v-model="row.date1" type="datetime" format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
          </template>
          <template #default="{ row }">{{ formatDate(row.date1, 'YYYY-MM-DD HH:mm:ss') }}</template>
        </vxe-column>
        <vxe-column field="date2" title="ElTimePicker" width="200" :edit-render="{}">
          <template #edit="{ row }">
            <el-time-select
              v-model="row.date2"
              :picker-options="{ start: '08:30', step: '00:15', end: '18:30' }"
            ></el-time-select>
          </template>
        </vxe-column>
        <vxe-column field="color1" title="ElColorPicker" width="140" :edit-render="{}">
          <template #edit="{ row }">
            <el-color-picker v-model="row.color1"></el-color-picker>
          </template>
        </vxe-column>
        <vxe-column field="rate" title="ElRate" width="200">
          <template #default="{ row }">
            <el-rate v-model="row.rate"></el-rate>
          </template>
        </vxe-column>
        <vxe-column field="flag" title="ElSwitch" width="100">
          <template #default="{ row }">
            <el-switch v-model="row.flag"></el-switch>
          </template>
        </vxe-column>
      </vxe-colgroup>
    </me-vxe-table>
  </el-card>
</template>
<script setup lang="ts" name="VxeTableDemo">
import { VxeTablePropTypes } from 'vxe-table';
import XEUtils from 'xe-utils';
import { FormInstance } from 'element-plus';
import { listApi } from '@/api/vxeTable';
import computedProxy from '@/hooks/core/computedProxy';
const meVxeTableRef = ref<MeVxeTableInstance>();
const xTable = computed(() => meVxeTableRef.value?.vxeTableRef);
const restaurants = [
  { value: 'Designer', name: 'Designer' },
  { value: 'Develop', name: 'Develop' },
  { value: 'Test', name: 'Test' },
  { value: 'PM', name: 'PM' },
];

const demo1 = {
  sexList: [
    { value: '1', label: '男' },
    { value: '0', label: '女' },
  ],
  regionList: [
    {
      label: '北京',
      value: 1,
      children: [
        { value: 3, label: '东城区' },
        { value: 4, label: '西城区' },
      ],
    },
    {
      label: '上海',
      value: 21,
      children: [
        { value: 23, label: '黄浦区' },
        { value: 24, label: '卢湾区' },
      ],
    },
    {
      label: '广东',
      value: 42,
      children: [
        { value: 43, label: '广州市' },
        { value: 67, label: '深圳市' },
      ],
    },
  ],
};

const formatDate = (value: any, format: string) => {
  return XEUtils.toDateString(value, format);
};

const getSelectLabel = (value: any, list: any[], valueProp = 'value', labelField = 'label') => {
  const item = list.find((item) => item[valueProp] === value);
  return item ? item[labelField] : null;
};

const getSelectMultipleLabel = (value: any[], list: any[], valueProp = 'value', labelField = 'label') => {
  return value
    .map((val) => {
      const item = list.find((item) => item[valueProp] === val);
      return item ? item[labelField] : null;
    })
    .join(', ');
};

const getCascaderLabel = (value: any, list: any[]) => {
  const values: any[] = value || [];
  const labels: any[] = [];
  const matchCascaderData = function (index: any, list: any[]) {
    const val = values[index];
    if (list && values.length > index) {
      list.forEach((item) => {
        if (item.value === val) {
          labels.push(item.label);
          matchCascaderData(++index, item.children);
        }
      });
    }
  };
  matchCascaderData(0, list);
  return labels.join(' / ');
};

const roleSearchEvent = (queryString: string, cb: (params: any) => void) => {
  const results = queryString
    ? restaurants.filter((item) => item.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
    : restaurants;
  setTimeout(() => {
    cb(results);
  }, 500 * Math.random());
};

const meanNum = (list: any[], field: string) => {
  let count = 0;
  list.forEach((item) => {
    count += Number(item[field]);
  });
  return count / list.length;
};

const sumNum = (list: any[], field: string) => {
  let count = 0;
  list.forEach((item) => {
    count += Number(item[field]);
  });
  return count;
};

const footerMethod: VxeTablePropTypes.FooterMethod = ({ columns, data }) => {
  return [
    columns.map((column, columnIndex) => {
      if (columnIndex === 0) {
        return '平均';
      }
      if (['age', 'rate'].includes(column.property)) {
        return meanNum(data, column.property);
      }
      return null;
    }),
    columns.map((column: any, columnIndex: number) => {
      if (columnIndex === 0) {
        return '和值';
      }
      if (['age', 'rate'].includes(column.property)) {
        return sumNum(data, column.property);
      }
      return null;
    }),
  ];
};

const searchForm = reactive({
  name: '',
  search: '',
  type: undefined,
  date: '',
  address: '',
  zip: '',
  page: 1,
  size: 10,
});
const { loading, run, data } = listApi({ defaultParams: [searchForm], manual: false });
const getData = (page = searchForm.page, size = searchForm.size) => {
  run(Object.assign(searchForm, { page, size }));
};
const paginationOptions = reactive({
  currentPage: computed(() => searchForm.page),
  pageSize: computed(() => searchForm.size),
  total: computed(() => data.value?.count ?? 0),
  change: getData,
});
const print = ref({} as object | boolean);
</script>
<style lang="scss" scoped>
.vxe-table-demo {
  .search {
    :deep(.el-form-item) {
      width: 319px;
    }
  }
}
</style>
