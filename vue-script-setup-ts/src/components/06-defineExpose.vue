<script setup lang="ts">
import { ref } from 'vue';

const a = 1;
const b = ref(2);
const change = () => {
  console.log('暴露的change方法');
};

defineExpose({
  a,
  b,
  change
});
</script>
<template>
  <h2>暴露组件参数方法</h2>
</template>
<style lang="scss" scoped></style>
