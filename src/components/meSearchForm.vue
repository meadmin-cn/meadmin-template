<template>
  <el-form ref="elFormRef" class="me-search-form" :inline="inline">
    <slot></slot>
    <span v-if="$slots.more" v-show="showAll" class="me-search-form-more">
      <slot name="more"></slot>
    </span>
    <el-form-item>
      <slot name="button"></slot>
      <el-button v-if="searchText !== undefined" type="primary" :loading="loading" @click="search()">
        {{ searchText ? searchText : $t('查询') }}
      </el-button>
      <el-button v-if="resetText !== undefined" @click="onReset ? onReset() : elFormRef!.resetFields()">
        {{ resetText ? resetText : $t('重置') }}
      </el-button>
      <el-button v-if="$slots.more" text @click="showAll = !showAll">
        {{ $t(showAll ? '收起' : '展开') }}
        <mel-icon-arrow-down class="more-icon" :class="{ reversal: showAll }"></mel-icon-arrow-down>
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ElForm } from 'element-plus';
import { ComponentOptionsMixin, ExtractPropTypes, PropType, Ref } from 'vue';
import type { FormInstance } from 'element-plus';
import { emit } from 'process';
const props = {
  inline: {
    type: Boolean,
    default: true,
  },
  defaultAll: {
    type: Boolean,
    default: false,
  },
  searchText: {
    type: String,
    default: '',
  },
  resetText: {
    type: String,
    default: '',
  },
  onSearch: Function as PropType<() => void>,
  onReset: Function as PropType<() => void>,
};
export default defineComponent<
  ComponentProps<typeof ElForm> & Partial<ExtractPropTypes<typeof props>>,
  {
    elFormRef: Ref<FormInstance | undefined>;
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
    const elFormRef = ref<FormInstance>();
    const showAll = ref(props.defaultAll);
    expose({ elFormRef });
    const loading = ref(false);
    const search = async () => {
      loading.value = true;
      try {
        await props.onSearch?.();
      } finally {
        loading.value = false;
      }
    };
    return {
      showAll,
      elFormRef,
      search,
      loading,
    };
  },
});
</script>
<style lang="scss" scoped>
.me-search-form {
  .more-icon {
    transition: transform 0.35s;
    margin-left: 5px;
  }
  .reversal {
    transform: rotateZ(180deg);
  }
}
</style>
