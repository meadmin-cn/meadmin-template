<template>
  <span>
    <span class="prefix">{{ numberInfo.prefix }}</span>
    <span class="output">{{ format ? format(output, numberInfo.decimals) : output }}</span>
    <span class="suffix">{{ numberInfo.suffix }}</span>
  </span>
</template>

<script setup lang="ts">
import formatNumber from 'format-number';
import { PropType } from 'vue';
import { TransitionPresets, useTransition, EasingFunction } from '@vueuse/core';
const props = defineProps({
  start: {
    type: Number,
    default: 0,
  },
  end: [Number, Array] as PropType<number | [number, string?, string?]>,
  delay: { type: Number, default: 0 }, //开始动画等待的毫秒数
  disabled: { type: Boolean, default: false }, //禁用动画
  duration: { type: Number, default: 1000 }, //动画持续毫秒
  transition: {
    //动画
    type: [Function, String] as PropType<EasingFunction | keyof typeof TransitionPresets>,
    default: 'easeOutExpo',
  },
  format: {
    type: Function as PropType<(number: number, decimals: number) => string | number>,
    default: (number: number, decimals: number) => formatNumber({ truncate: decimals, padRight: decimals })(number),
  },
});
const emit = defineEmits<{
  (e:'finished'):void,
  (e:'started'):void
}>();
const numberInfo = reactive({
  number: props.start,
  prefix: '',
  suffix: '',
  decimals: 0,
});
const output = useTransition(
  computed(() => numberInfo.number),
  {
    delay: computed(() => props.delay),
    disabled: computed(() => props.disabled),
    duration: computed(() => props.duration),
    onFinished: () => emit('finished'),
    onStarted: () => emit('started'),
    transition: computed(() =>
      typeof props.transition === 'string' ? TransitionPresets[props.transition] : props.transition,
    ),
  },
);
const getFormatInfo = (value: number | [number, string?, string?]) => {
  if (typeof value === 'number') {
    return {
      prefix: '',
      number: value,
      suffix: '',
      decimals: (value + '').split('.')[1]?.length ?? 0,
    };
  }
  return {
    prefix: value[1] ?? '',
    number: value[0],
    suffix: value[2] ?? '',
    decimals: (value[0] + '').split('.')[1]?.length ?? 0,
  };
};
watch(
  () => props.end,
  (end) => Object.assign(numberInfo, getFormatInfo(end ?? props.start)),
  { immediate: true, deep: true },
);
</script>
