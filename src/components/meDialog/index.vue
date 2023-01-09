<template>
  <el-dialog ref="elDialogRef" class="me-dialog" :style="{ maxHeight }">
    <template v-for="(item, key) in $slots" :key="key" #[key]>
      <component :is="item"></component>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { ElDialog } from 'element-plus';
import { ComponentOptionsMixin, ExtractPropTypes, Ref } from 'vue';
import minMax from './hooks/minMax';
const props = {
  full: {
    type: Boolean,
    default: true,
  },
  maxHeight: {
    type: String,
    default: '60vh',
  },
};
export default defineComponent<
  ComponentProps<typeof ElDialog> & Partial<ExtractPropTypes<typeof props>>,
  {
    elDialogRef: Ref<InstanceType<typeof ElDialog> | undefined>;
  },
  Record<string, any>,
  Record<string, any>,
  Record<string, any>,
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  Record<string, any>
>({
  name: 'MeDialog',
  props: props as any,
  setup(props, { expose }) {
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
    expose({ elDialogRef });
    return {
      elDialogRef,
    };
  },
});
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
