<script setup lang="ts">
const vMyDirective = {
  beforeMount: (el) => {
    console.log('el', el);
    // do something with the element
  }
};
</script>
<template>
  <h2>自定义指令</h2>
  <div v-my-directive>This is a Heading</div>
</template>
<style lang="scss" scoped></style>
