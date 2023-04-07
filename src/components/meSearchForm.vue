<template>
  <el-form
    ref="elFormRef"
    class="me-search-form"
    :class="fromClass"
    :label-width="labelWidth"
    :label-position="labelPosition"
  >
    <slot></slot>
    <el-form-item class="button-item">
      <slot name="button"></slot>
      <el-button v-if="searchText !== undefined" type="primary" :loading="loading" @click="search()">
        {{ searchText ? searchText : $t('查询') }}
      </el-button>
      <el-button v-if="resetText !== undefined" @click="onReset ? onReset() : elFormRef!.resetFields()">
        {{ resetText ? resetText : $t('重置') }}
      </el-button>
      <el-button v-if="forever" text bg @click="showAll = !showAll">
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
import $ from 'jquery';
const props = {
  forever: {
    // 收起后展示的筛选项数量0为不收起
    type: Number,
    default: 1,
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
  labelWidth: {
    type: [String, Number],
    default: '80px',
  },
  labelPosition: {
    type: String as PropType<'left' | 'right'>,
    default: 'right',
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
  name: 'MeSearchForm',
  props: props as any,
  setup(props, { expose }) {
    const elFormRef = ref<FormInstance>();
    const showAll = ref(props.defaultAll);
    const fromClass = ref('');
    const formResize = new ResizeObserver((entries) => {
      if (entries[0].contentRect.width < 768) {
        return (fromClass.value = '');
      }
      if (entries[0].contentRect.width < 1024) {
        return (fromClass.value = 'lg');
      }
      if (entries[0].contentRect.width < 1600) {
        return (fromClass.value = 'xl');
      }
      return (fromClass.value = 'xl-2');
    });

    onMounted(() => {
      formResize.observe(elFormRef.value!.$el);
      watch(
        showAll,
        () => {
          const children = $(elFormRef.value!.$el).children();
          if (showAll.value) {
            children.each(function (index) {
              if (index >= props.forever! && index != children.length - 1) {
                $(this).css('display', $(this).data('display'));
              }
            });
          } else {
            children.each(function (index) {
              if (index >= props.forever! && index != children.length - 1) {
                $(this).data('display', $(this).css('display'));
                $(this).css('display', 'none');
              }
            });
          }
        },
        { immediate: true },
      );
    });
    onBeforeUnmount(() => {
      formResize.disconnect();
    });
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
      fromClass,
    };
  },
});
</script>
<style lang="scss" scoped>
.me-search-form {
  display: flex;
  flex-wrap: wrap;

  :deep(> *) {
    width: 100%;
    padding-right: 0;
  }

  .more-icon {
    transition: transform 0.35s;
    margin-left: 5px;
  }

  .reversal {
    transform: rotateZ(180deg);
  }

  :deep(.el-form-item__content) {
    flex-grow: 1;
    flex-shrink: 1;

    > div {
      flex: 1;
    }

    .search-buttons {
      display: flex;
      align-items: center;
    }
  }
}

.lg {
  :deep(> *) {
    width: 50%;
    padding-right: 20px;
  }
}

.xl {
  :deep(> *) {
    width: 33.3%;
    padding-right: 20px;
  }
}

.xl-2 {
  :deep(> *) {
    width: 25%;
    padding-right: 20px;
  }
}
</style>
