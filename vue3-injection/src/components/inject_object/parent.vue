<script setup lang="ts">
// Parent.vue
import { provide, reactive } from 'vue';
import child from './child.vue';
import { personStore } from './parent';

provide('person', personStore);
</script>
<template>
  <h2>封装成对象管理</h2>
  <child />
</template>
