<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <h2>响应式系统</h2>
  <button @click="count++">{{ count }}</button>
</template>
