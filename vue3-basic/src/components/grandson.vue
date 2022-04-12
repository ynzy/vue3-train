<!--  -->
<template>
  <div>
    <h2 :style="{ color: color }">孙子组件</h2>
    <h3 :style="{ color: colorRef }">ref</h3>
  </div>
</template>
<script lang="ts">
import { provider } from '@/utils';
import { defineComponent, inject } from 'vue';
export default defineComponent({
  name: '',
  components: {},
  props: {},
  setup(props) {
    const color = inject('color');
    console.log(color);
    const colorRef = inject(provider);
    return {
      color,
      colorRef
    };
  }
});
</script>
<style lang="scss" scoped></style>
