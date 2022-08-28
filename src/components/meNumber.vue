<template>
  <span>
    <span class="prefix">{{ numberInfo.prefix }}</span>
    <span class="output">{{
      props.format ? props.format(+output.toFixed(numberInfo.decimals)) : output.toFixed(numberInfo.decimals)
    }}</span>
    <span class="suffix">{{ numberInfo.suffix }}</span>
  </span>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { TransitionPresets, useTransition, EasingFunction } from '@vueuse/core';
const props = defineProps({
  start: {
    type: Number,
    default: 0,
  },
  end: {
    type: [Number, String],
    required: true,
  },
  delay: Number, //开始动画等待的毫秒数
  disabled: Boolean, //禁用动画
  duration: { type: Number, default: 3000 }, //动画持续毫秒
  transition: {
    //动画
    type: [Function, String] as PropType<EasingFunction | keyof typeof TransitionPresets>,
    default: 'easeOutExpo',
  },
  format: {
    type: Function as PropType<(number: number) => string | number>,
    default: (number: number) => new Intl.NumberFormat('en-IN').format(number),
  },
});
const emit = defineEmits(['finished', 'started']);
const numberInfo = reactive({
  number: props.start,
  prefix: '',
  suffix: '',
  decimals: 0,
});
const output = useTransition(
  computed(() => numberInfo.number),
  {
    delay: props.delay,
    disabled: props.disabled,
    duration: props.duration,
    onFinished: () => emit('finished'),
    onStarted: () => emit('started'),
    transition: typeof props.transition === 'string' ? TransitionPresets[props.transition] : props.transition,
  },
);
const getFormatInfo = (value: string | number) => {
  const res = /(.*[^\d.])?(\d+\.?\d*)([^\d.].*)?/.exec(value as string);
  if (!res) {
    throw new Error('请传入带有数字的字符');
  }
  return {
    prefix: res[1] ?? '',
    number: Number(res[2]),
    suffix: res[3] ?? '',
    decimals: res[2].split('.')[1]?.length ?? 0,
  };
};
watch(
  () => props.end,
  (end) => Object.assign(numberInfo, getFormatInfo(end)),
  { immediate: true },
);
</script>
