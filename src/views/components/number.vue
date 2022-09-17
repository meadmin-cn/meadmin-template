<template>
  <div class="number">
    <el-card header="数字动画">
      <h1><me-number v-bind="props"></me-number></h1>
      <el-form label-width="150px" inline>
        <el-form-item label="起始值">
          <el-input-number v-model="props.start"></el-input-number>
        </el-form-item>
        <el-form-item label="结束值">
          <el-input-number v-model="props.end[0]"></el-input-number>
        </el-form-item>
        <el-form-item label="前缀">
          <el-input v-model="props.end[1]"></el-input>
        </el-form-item>
        <el-form-item label="后缀">
          <el-input v-model="props.end[2]"></el-input>
        </el-form-item>
        <el-form-item label="延时时间(ms)">
          <el-input-number v-model="props.delay" :min="0"></el-input-number>
        </el-form-item>
        <el-form-item label="持续时间(ms)">
          <el-input-number v-model="props.duration" :min="0"></el-input-number>
        </el-form-item>
      </el-form>
      <div class="footer">
        <el-button @click="start()" type="success">开始</el-button>
        <el-button @click="props.disabled = true" type="danger">停止</el-button>
      </div>
    </el-card>
  </div>
</template>
<script setup lang="ts" name="Number">
const props = reactive({
  start: 0,
  end: [3668228.35, '￥', '元'] as [number, string, string],
  delay: 200,
  disabled: false,
  duration: 1000,
});
const start = async () => {
  const endNumber = props.end[0];
  props.disabled = true;
  props.end[0] = props.start;
  await nextTick();
  props.disabled = false;
  props.end[0] = endNumber;
};
</script>
<style lang="scss" scoped>
.number {
  h1 {
    text-align: center;
    font-size: 1.5em;
  }
  :deep(.el-input) {
    width: 150px;
  }
  .footer {
    display: flex;
    justify-content: center;
  }
}
</style>
