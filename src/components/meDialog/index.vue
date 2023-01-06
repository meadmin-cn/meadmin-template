<template>
  <el-dialog ref="elDialogRef" class="me-dialog">
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
};
export default defineComponent<
  ComponentProps<typeof ElDialog> & Partial<ExtractPropTypes<typeof props>>,
  Record<string, any>,
  Record<string, any>,
  Record<string, any>,
  Record<string, any>,
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  Record<string, never>
>({
  name: 'MeDialog',
  props: props as any,
  setup(props) {
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
    return {
      elDialogRef,
    };
  },
  created() {
    console.log(this);
  },
});
</script>
<style lang="scss">
.me-dialog {
  .el-dialog__headerbtn {
    width: 40px;
  }
}
</style>
