<script setup lang="ts">
import { useSlots, useAttrs } from 'vue';

defineProps({
  options: Object
});

//判断<slot/>是否有传值
const slotDefault = !!useSlots().default;
console.log('slots-default', slotDefault);
//判断<slot name="test"/>是否有传值
const slotTest = !!useSlots().test;
console.log('slots-test', slotTest);

const attrs = useAttrs();
console.log('attrs', attrs);
</script>
<template>
  <h2>获取插槽和透传属性</h2>
  <slot />
  <slot name="test" />
</template>
