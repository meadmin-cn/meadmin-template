<template>
  <el-dialog ref="elDialogRef" class="me-dialog" :style="{ maxHeight }" @open="openHandle">
    <template v-for="(item, key) in ($slots as Record<string,any>)" :key="key" #[key]>
      <component :is="item"></component>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { ElDialog } from 'element-plus';
import { ComponentOptionsMixin, ExtractPublicPropTypes, Ref } from 'vue';
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

const emits = ['open'] as unknown as {
  open: () => void;
};
export default defineComponent<
  ComponentProps<typeof ElDialog> & ExtractPublicPropTypes<typeof props>,
  {
    elDialogRef: Ref<InstanceType<typeof ElDialog> | undefined>;
  },
  Record<string, any>,
  Record<string, any>,
  Record<string, any>,
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  typeof emits
>({
  name: 'MeDialog',
  props: props as any,
  emits: emits,
  setup(props, { expose, emit }) {
    const elDialogRef = ref<InstanceType<typeof ElDialog>>();
    let resetWH: undefined | (() => void);
    watch(
      [() => elDialogRef.value?.dialogContentRef, () => props.full],
      async () => {
        if (elDialogRef.value?.dialogContentRef && props.full) {
          await nextTick();
          resetWH = minMax(elDialogRef.value!.dialogContentRef.$el)?.resetWH;
        }
      },
      { immediate: true },
    );
    const openHandle = () => {
      resetWH?.();
      emit('open');
    };
    expose({ elDialogRef });
    return {
      elDialogRef,
      openHandle,
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
    margin-top: 10px;
    flex-shrink: 0;
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
