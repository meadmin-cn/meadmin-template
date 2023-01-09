<template>
  <div class="request">
    请求示例 1
    <el-button @click="run({ page: 2, size: 2, createTime: ['2023-01-07', '2023-01-08'] })">请求</el-button>
    <el-button @click="run({ page: 0, size: 10 })">error请求</el-button>
    <div>
      loading:<code>{{ loading }}</code> error:<code>{{ JSON.stringify(error) }}</code> data:<code>{{
        JSON.stringify(data)
      }}</code>
    </div>
    请求示例 2
    <el-button @click="getInfo()">异常请求</el-button>
    <div>
      loading:<code>{{ loading2 }}</code> error:<code>{{ JSON.stringify(error2) }}</code> data:<code>{{
        JSON.stringify(data2)
      }}</code>
    </div>
  </div>
</template>
<script setup lang="ts" name="Request">
import { infoApi, listApi } from '@/api/example';
const { run, loading, error, data } = listApi({ defaultParams: [{ page: 1, size: 10 }], manual: false });
const { runAsync: runAsync2, loading: loading2, error: error2, data: data2 } = infoApi();
const getInfo = async () => {
  console.log(await runAsync2(1));
};
</script>
