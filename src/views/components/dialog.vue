<template>
  <div class="dailog">
    <el-button @click="show = true"> 弹窗 </el-button>
    <me-dialog ref="dailog" v-model="show" title="Title">
      <div>content</div>
      <template #footer>
        <el-button @click="show = false"> 关闭 </el-button>
      </template>
    </me-dialog>
  </div>
</template>

<script setup lang="ts" name="Dailog">
const show = ref(false);
const dailog = ref();
onMounted(() => {
  console.log('dailog', dailog.value);
});
</script>

<style lang="scss" scoped>
.dailog {
}
</style>
