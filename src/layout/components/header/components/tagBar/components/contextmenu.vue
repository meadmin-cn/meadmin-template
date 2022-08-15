<template>
  <el-popover
    popper-class="me-contextmenu-tooltip el-dropdown__popper"
    :visible="visible"
    :virtual-ref="virtualRef"
    virtual-triggering
    pure
  >
    <ul
      class="el-dropdown-menu el-dropdown-menu--default"
      v-bind="$attrs"
      style="outline: none"
      v-click-outside="closeMenu"
      role="menuitem"
    >
      <li @click="reload()" class="el-dropdown-menu__item">
        <mel-icon-refresh /> {{ $t('重新加载') }}
      </li>
      <li
        @click="closeCurrent()"
        :class="{
          'el-dropdown-menu__item': true,
          'is-disabled': current.meta.affix || modelValue.length == 1
        }"
      >
        <mel-icon-close /> {{ $t('关闭') }}{{ $t(' ') }}{{ $t('当前') }}
      </li>
      <li
        @click="closeLeft()"
        :class="{
          'el-dropdown-menu__item': true,
          'is-disabled': index <= canCloseFirst
        }"
      >
        <mel-icon-download style="transform: rotate(90deg)" />{{ $t('关闭')
        }}{{ $t(' ') }}{{ $t('左侧') }}
      </li>
      <li
        @click="closeRight()"
        :class="{
          'el-dropdown-menu__item': true,
          'is-disabled': modelValue.length === index + 1
        }"
      >
        <mel-icon-download style="transform: rotate(270deg)" />{{ $t('关闭')
        }}{{ $t(' ') }}{{ $t('右侧') }}
      </li>
      <li
        @click="closeOther()"
        :class="{
          'el-dropdown-menu__item': true,
          'is-disabled':
            index <= canCloseFirst && modelValue.length === index + 1
        }"
      >
        <mel-icon-document-delete /> {{ $t('关闭') }}{{ $t(' ')
        }}{{ $t('其他') }}
      </li>
      <li
        @click="closeAll()"
        :class="{
          'el-dropdown-menu__item': true,
          'is-disabled': canCloseFirst === Infinity
        }"
      >
        <mel-icon-minus /> {{ $t('关闭') }}{{ $t(' ') }}{{ $t('全部') }}
      </li>
    </ul>
  </el-popover>
</template>
<script setup lang="ts" name="contextmenu">
  import { PropType } from 'vue';
  import { RouteLocationNormalized } from 'vue-router';
  const props = defineProps({
    modelValue: {
      required: true,
      type: Array as PropType<RouteLocationNormalized[]>
    },
    current: {
      required: true,
      type: Object as PropType<RouteLocationNormalized>
    },
    virtualRef: {
      required: true,
      type: Object as PropType<HTMLElement>
    },
    visible: {
      type: Boolean,
      default: true
    }
  });
  const emit = defineEmits(['update:modelValue', 'update:visible']);
  const router = useRouter();
  const route = useRoute();
  let index = computed(() => props.modelValue.indexOf(props.current));
  let canCloseFirst = computed(() => {
    const index = props.modelValue.findIndex((item) => !item.meta.affix);
    return index > -1 ? index : Infinity;
  });
  const reload = () => {
    //刷新
    router.replace('/redirect/' + encodeURIComponent(props.current.fullPath));
  };
  const closeCurrent = async () => {
    //关闭当前
    if (props.modelValue.length === 0 || props.current.meta.affix) {
      return;
    }
    await closeMenu();
    const nowIndex = index.value;
    props.modelValue.splice(index.value, 1);
    if (props.current.fullPath === route.fullPath) {
      router.push(
        props.modelValue[Math.min(props.modelValue.length - 1, nowIndex)]
          .fullPath
      );
    }
  };
  const closeLeft = async () => {
    //关闭左侧
    if (index.value <= canCloseFirst.value) {
      return;
    }
    await closeMenu();
    props.modelValue.splice(
      canCloseFirst.value,
      index.value - canCloseFirst.value
    );
    emit('update:modelValue', props.modelValue);
    if (
      props.modelValue.findIndex((item) => item.fullPath === route.fullPath) ===
      -1
    ) {
      router.push(props.modelValue[index.value].fullPath);
    }
  };
  const closeRight = async () => {
    //关闭右侧
    if (index.value + 1 === props.modelValue.length) {
      return;
    }
    await closeMenu();
    props.modelValue.splice(index.value + 1);
    emit('update:modelValue', props.modelValue);
    if (
      props.modelValue.findIndex((item) => item.fullPath === route.fullPath) ===
      -1
    ) {
      router.push(props.modelValue[index.value].fullPath);
    }
  };
  const closeOther = () => {
    //关闭其他
    closeLeft();
    closeRight();
  };
  const closeAll = async () => {
    //关闭全部
    if (canCloseFirst.value === Infinity) {
      return;
    }
    await closeMenu();
    props.modelValue.splice(canCloseFirst.value);
    emit('update:modelValue', props.modelValue);
    if (
      props.modelValue.findIndex((item) => item.fullPath === route.fullPath) ===
      -1
    ) {
      router.push(props.modelValue[props.modelValue.length - 1].fullPath);
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
