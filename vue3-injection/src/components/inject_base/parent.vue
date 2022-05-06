<script setup lang="ts">
// Parent.vue
import { provide } from 'vue';
import child from './child.vue';

provide('person', {
  name: 'bob',
  age: 20
});
</script>
<template>
  <h2>基础用法</h2>
  <child />
</template>
