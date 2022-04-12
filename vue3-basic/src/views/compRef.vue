<!--  -->
<template>
  <div>
    {{ msg }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup(props, context) {
    const msg = ref('welcome');
    const change = () => {
      msg.value = '欢迎';
    };
    console.log(context);
    console.log(context.attrs);
    // 子组件调用父组件方法
    context.emit('update', true);
    return {
      msg,
      change
    };
  }
});
</script>
<style lang="scss" scoped></style>
