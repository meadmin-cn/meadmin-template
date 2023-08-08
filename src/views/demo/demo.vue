<template>
  <div class="demo">
    <el-card>
      <me-search-form :model="params" :default-all="true" class="search-form" @search="search(1)">
        <el-form-item :label="t('姓名')" prop="name">
          <el-input v-model="params.name"></el-input>
        </el-form-item>
        <el-form-item :label="t('类型')" prop="type">
          <el-select v-model="params.type">
            <el-option v-for="(item, key) in bookType" :key="key" :value="key" :label="item" />
          </el-select>
        </el-form-item>
        <el-form-item :label="t('价格')" prop="priceStart">
          <el-input-number v-model="params.priceStart" :min="0" :precision="2"></el-input-number>
          &nbsp; - &nbsp;<el-form-item prop="priceEnd">
            <el-input-number v-model="params.priceEnd" :min="0" :precision="2"></el-input-number>
          </el-form-item>
        </el-form-item>
        <el-form-item :label="t('章节')" prop="sectionStart">
          <el-input-number v-model="params.sectionStart" :min="0" :precision="0"></el-input-number>
          &nbsp; - &nbsp;<el-form-item prop="sectionEnd">
            <el-input-number v-model="params.sectionEnd" :min="0" :precision="0"></el-input-number>
          </el-form-item>
        </el-form-item>
        <el-form-item :label="t('创建时间')" prop="createTime">
          <el-date-picker v-model="params.createTime" type="daterange" value-format="YYYY-MM-DD" />
        </el-form-item>
      </me-search-form>
    </el-card>
    <el-card style="margin-top: 10px">
      <me-vxe-table
        v-model:quick-search="params.name"
        :loading="loading"
        :data="data?.list"
        :pagination-options="{
          currentPage: params.page,
          pageSize: params.size,
          total: data?.total ?? 0,
          layout: 'sizes, prev, pager, next, jumper, ->, total',
          change: search,
        }"
        align="center"
        border
        @refresh="search(1)"
        @add="showAddOrUp()"
        @quick-search="search(1)"
      >
        <vxe-column field="id" :title="t('ID')" min-width="100px"></vxe-column>
        <vxe-column field="name" :title="t('姓名')" min-width="100px"></vxe-column>
        <vxe-column field="bookName" :title="t('书名')" min-width="150px"></vxe-column>
        <vxe-column field="type" :title="t('类型')" min-width="150px">
          <template #default="{ row }: { row: Required<Info> }">
            {{ bookType[row.type] }}
          </template>
        </vxe-column>
        <vxe-column field="price" :title="t('价格')" min-width="100px"></vxe-column>
        <vxe-column field="section" :title="t('章节')" min-width="100px"></vxe-column>
        <vxe-column field="createTime" :title="t('创建时间')" min-width="150px"></vxe-column>
        <vxe-column :title="t('操作')" fixed="right" min-width="150px">
          <template #default="{ row }: { row: Required<Info> }">
            <el-button @click="showAddOrUp(row)">
              <mel-icon-edit />
            </el-button>
            <el-popconfirm :title="t('确认删除？')" placement="left" @confirm="del(row.id)">
              <template #reference>
                <el-button :key="row.id" :loading="delLoading && delId === row.id" type="danger">
                  <mel-icon-delete />
                </el-button>
              </template>
            </el-popconfirm>
          </template>
        </vxe-column>
      </me-vxe-table>
    </el-card>
    <add v-model="addOrUp" :data="info" @success="search(info ? params.page : 1)"></add>
  </div>
</template>

<script setup lang="ts" name="Demo">
import { ListParams, Info, listApi, delApi } from '@/api/demo';
import { useLocalesI18n } from '@/locales/i18n';
import { bookType } from '@/dict/book';
import add from './components/add.vue';
import { cloneDeep } from 'lodash-es';
let { t } = useLocalesI18n({}, [(locale: string) => import(`./lang/${locale}.json`), 'demo']);
const params = reactive(new ListParams());
const { loading, data, runAsync } = listApi();
const search = (page = params.page, size = params.size) => runAsync(Object.assign(params, { page, size }));
search(1);
const { runAsync: delRun, loading: delLoading } = delApi();
const delId = ref<number>();
const del = async (id: number) => {
  delId.value = id;
  await delRun(id);
  search(1);
};
const addOrUp = ref(false);
const info = ref<Required<Info>>();
const showAddOrUp = (row?: Required<Info>) => {
  info.value = cloneDeep(row);
  addOrUp.value = true;
};
</script>
