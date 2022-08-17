<template>
  <el-popover
    popper-class="me-contextmenu-tooltip el-dropdown__popper"
    :visible="visible"
    :virtual-ref="virtualRef"
    virtual-triggering
    pure
  >
    <ul
      v-click-outside="closeMenu"
      class="el-dropdown-menu el-dropdown-menu--default"
      v-bind="$attrs"
      style="outline: none"
      role="menuitem"
    >
      <li class="el-dropdown-menu__item" @click="reload"><mel-icon-refresh /> {{ $t('重新加载') }}</li>
      <li
        :class="{
          'el-dropdown-menu__item': true,
          'is-disabled': current.meta.affix || modelValue.length === 1,
        }"
        @click="closeCurrent"
      >
        <mel-icon-close /> {{ $t('关闭') }}{{ $t(' ') }}{{ $t('当前') }}
      </li>
      <li
        :class="{
          'el-dropdown-menu__item': true,
          'is-disabled': index <= canCloseFirst,
        }"
        @click="closeLeft"
      >
        <mel-icon-download style="transform: rotate(90deg)" />{{ $t('关闭') }}{{ $t(' ') }}{{ $t('左侧') }}
      </li>
      <li
        :class="{
          'el-dropdown-menu__item': true,
          'is-disabled': modelValue.length === index + 1,
        }"
        @click="closeRight"
      >
        <mel-icon-download style="transform: rotate(270deg)" />{{ $t('关闭') }}{{ $t(' ') }}{{ $t('右侧') }}
      </li>
      <li
        :class="{
          'el-dropdown-menu__item': true,
          'is-disabled': index <= canCloseFirst && modelValue.length === index + 1,
        }"
        @click="closeOther"
      >
        <mel-icon-document-delete /> {{ $t('关闭') }}{{ $t(' ') }}{{ $t('其他') }}
      </li>
      <li
        :class="{
          'el-dropdown-menu__item': true,
          'is-disabled': canCloseFirst === Infinity,
        }"
        @click="closeAll"
      >
        <mel-icon-minus /> {{ $t('关闭') }}{{ $t(' ') }}{{ $t('全部') }}
      </li>
    </ul>
  </el-popover>
</template>
<script setup lang="ts" name="contextmenu">
import { cloneDeep } from 'lodash';
import { PropType } from 'vue';
import { RouteLocationNormalized } from 'vue-router';
const props = defineProps({
  modelValue: {
    required: true,
    type: Array as PropType<RouteLocationNormalized[]>,
  },
  current: {
    required: true,
    type: Object as PropType<RouteLocationNormalized>,
  },
  virtualRef: {
    required: true,
    type: Object as PropType<HTMLElement>,
  },
  visible: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(['update:modelValue', 'update:visible']);
const tags = ref([] as RouteLocationNormalized[]);
watch(
  () => props.modelValue,
  () => {
    tags.value = [...props.modelValue];
  },
  { immediate: true, deep: true },
);
const router = useRouter();
const route = useRoute();
let index = computed(() => tags.value.indexOf(props.current));
let canCloseFirst = computed(() => {
  const index = tags.value.findIndex((item) => !item.meta.affix);
  return index > -1 ? index : Infinity;
});
const reload = () => {
  // 刷新
  router.replace('/redirect/' + encodeURIComponent(props.current.fullPath));
};
const closeCurrent = async () => {
  // 关闭当前
  if (tags.value.length === 0 || props.current.meta.affix) {
    return;
  }
  await closeMenu();
  const nowIndex = index.value;
  tags.value.splice(index.value, 1);
  emit('update:modelValue', [...tags.value]);
  if (props.current.fullPath === route.fullPath) {
    router.push(tags.value[Math.min(tags.value.length - 1, nowIndex)].fullPath);
  }
};
const closeLeft = async () => {
  // 关闭左侧
  if (index.value <= canCloseFirst.value) {
    return;
  }
  await closeMenu();
  tags.value.splice(canCloseFirst.value, index.value - canCloseFirst.value);
  emit('update:modelValue', [...tags.value]);
  if (tags.value.findIndex((item) => item.fullPath === route.fullPath) === -1) {
    router.push(tags.value[index.value].fullPath);
  }
};
const closeRight = async () => {
  // 关闭右侧
  if (index.value + 1 === tags.value.length) {
    return;
  }
  await closeMenu();
  tags.value.splice(index.value + 1);
  emit('update:modelValue', [...tags.value]);
  if (tags.value.findIndex((item) => item.fullPath === route.fullPath) === -1) {
    router.push(tags.value[index.value].fullPath);
  }
};
const closeOther = () => {
  // 关闭其他
  closeLeft();
  closeRight();
};
const closeAll = async () => {
  // 关闭全部
  if (canCloseFirst.value === Infinity) {
    return;
  }
  await closeMenu();
  tags.value.splice(canCloseFirst.value);
  emit('update:modelValue', [...tags.value]);
  if (tags.value.findIndex((item) => item.fullPath === route.fullPath) === -1) {
    router.push(tags.value[tags.value.length - 1].fullPath);
  }
};
const closeMenu = async () => {
  emit('update:visible', false);
  await nextTick();
};
</script>
<style lang="scss">
.me-contextmenu-tooltip {
  width: max-content !important;
  min-width: unset !important;

  .el-dropdown-menu__item:not(.is-disabled):hover {
    background-color: var(--el-dropdown-menuItem-hover-fill);
    color: var(--el-dropdown-menuItem-hover-color);
  }
}
</style>
