<script setup lang="ts">
//Child.vue
import { inject } from 'vue';
const person = inject('person');
console.log('基础用法', person);
</script>
<template>
  <div></div>
</template>
