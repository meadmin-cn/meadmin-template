<template>
  <el-form ref="elFormRef" class="me-search-form" :inline="inline">
    <slot></slot>
    <div v-if="$slots.more" v-show="showAll" class="me-search-form-more">
      <slot name="more"></slot>
    </div>
    <el-form-item>
      <slot name="button"></slot>
      <el-button v-if="searchText !== undefined" type="primary" @click="$emit('search')">
        {{ searchText ? searchText : $t('查询') }}
      </el-button>
      <el-button
        v-if="resetText !== undefined"
        @click="_.vnode.props.onReset ? $emit('reset') : elFormRef!.resetFields()"
      >
        {{ resetText ? resetText : $t('重置') }}
      </el-button>
      <el-button v-if="$slots.more" text @click="showAll = !showAll">
        {{ $t(showAll ? '展开' : '收起') }}
        <mel-icon-arrow-up class="more-icon" :class="{ reversal: showAll }"></mel-icon-arrow-up>
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ElForm } from 'element-plus';
import { ComponentOptionsMixin, ExtractPropTypes, Ref } from 'vue';
import type { FormInstance } from 'element-plus';
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
};
const emits = ['search', 'reset'] as unknown as {
  search: () => void;
  reset: () => void;
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
  typeof emits
>({
  name: 'MeDialog',
  props: props as any,
  emits,
  setup(props, { expose }) {
    const elFormRef = ref<FormInstance>();
    const showAll = ref(props.defaultAll);
    expose({ elFormRef });
    return {
      showAll,
      elFormRef,
    };
  },
});
</script>
<style lang="scss" scoped>
.me-search-form {
  .me-search-form-more {
    display: inline-block;
  }
  .more-icon {
    transition: transform 0.35s;
    margin-left: 5px;
  }
  .reversal {
    transform: rotateZ(180deg);
  }
}
</style>
