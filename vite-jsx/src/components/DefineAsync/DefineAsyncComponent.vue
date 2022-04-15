<!--  -->
<template>
  <AsyncComponent />
</template>
<script lang="ts">
/**
 * 异步组件
 */
import { defineComponent, defineAsyncComponent } from 'vue';
export default defineComponent({
  components: {
    AsyncComponent: defineAsyncComponent(() => import('./AsyncComponent.vue'))
  },
  setup(props) {
    return {};
  }
});
</script>
<style lang="scss" scoped></style>
