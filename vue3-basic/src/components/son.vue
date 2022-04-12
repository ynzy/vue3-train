<template>
  <div>
    <h2>子组件</h2>
    <CompGrandson />
  </div>
</template>

<script>
import CompGrandson from './grandson.vue';
export default {
  components: {
    CompGrandson
  },
  setup() {}
};
</script>
