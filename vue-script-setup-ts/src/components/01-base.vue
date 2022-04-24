<script setup lang="ts">
import { capitalize } from '@/helpers';
// variable
const msg = 'Hello!';

// functions
function log() {
  console.log(msg);
}
</script>

<template>
  <h2>基本用法</h2>
  <button @click="log">{{ msg }}</button>
  <div>{{ capitalize('hello') }}</div>
</template>
