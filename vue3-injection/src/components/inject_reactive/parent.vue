<script setup lang="ts">
// Parent.vue
import { provide, reactive, watch, watchEffect } from 'vue';
import child from './child.vue';

const obj = reactive({
  name: 'bob',
  age: 20
});
// watch(
//   () => obj,
//   (v) => {
//     console.log(v);
//   }
// );
provide('person', obj);
</script>
<template>
  <h2>响应式用法</h2>
  <child />
</template>
