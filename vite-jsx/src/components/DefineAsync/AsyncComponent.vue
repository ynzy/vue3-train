<!--  -->
<template>
  <div>{{ msg }}</div>
</template>
<script lang="tsx">
import { defineComponent } from 'vue';
export default defineComponent({
  components: {},
  setup(props) {
    return {
      msg: '我是一个远程组件'
    };
  }
});
</script>
<style lang="scss" scoped></style>
