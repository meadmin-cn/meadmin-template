<template>
  <el-dialog ref="elDialogRef" class="me-dialog" :style="{ maxHeight }">
    <template v-for="(item, key) in $slots as Record< string, any>" :key="key" #[key]>
      <component :is="item"></component>
    </template>
  </el-dialog>
</template>
<script setup lang="ts" name="MeDialog">
import { ElDialog } from 'element-plus';
import minMax from './hooks/minMax';
const props = withDefaults(
  defineProps<
    // eslint-disable-next-line vue/prop-name-casing
    ComponentProps<typeof ElDialog> & {
      full?: boolean;
      maxHeight?: string;
    }
  >(),
  {
    full: true,
    maxHeight: '60vh',
  },
);
const elDialogRef = ref<InstanceType<typeof ElDialog>>();
watch(
  [() => elDialogRef.value?.dialogContentRef, () => props.full],
  async () => {
    if (elDialogRef.value?.dialogContentRef && props.full) {
      await nextTick();
      minMax(elDialogRef.value!.dialogContentRef.$el);
    }
  },
  { immediate: true },
);
defineExpose({ elDialogRef });
</script>
<style lang="scss">
.me-dialog {
  display: flex;
  flex-direction: column;
  .el-dialog__headerbtn {
    width: 40px;
  }
  .el-dialog__header {
    position: sticky;
    top: 0;
    z-index: $z-index-top;
    background-color: inherit;
    flex-grow: 0;
    flex-shrink: 0;
    padding-right: 80px;
  }
  .el-dialog__body {
    overflow-y: auto;
    flex: 1;
  }
  .el-dialog__footer {
    position: sticky;
    bottom: 0;
    z-index: $z-index-top;
    background-color: inherit;
    flex-grow: 0;
    flex-shrink: 0;
  }
}
</style>
