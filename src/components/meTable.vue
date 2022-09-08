<template>
  <div class="me-table">
    <el-table></el-table>
  </div>
</template>
<script lang="ts">
import { ElTable } from 'element-plus';
export default defineComponent<ComponentProps<typeof ElTable>>({
  props: {} as any,
});
</script>
<style lang="scss" scoped>
.me-table {
}
</style>
