<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router';
// import HelloWorld from '@/components/HelloWorld.vue';
// import demoVue from './views/demo.vue';
import CompSon from './components/son.vue';
import { provide, ref } from 'vue';
import { provider } from './utils';
import demoVue from './views/demo.vue';

// 向后代传递普通数据
provide('color', 'green');
// 传递响应式数据
const colorRef = ref('red');
// provide(provider, colorRef);
</script>

<template>
  <!-- <h1>父组件</h1>
  <button @click="colorRef = 'red'">红</button>
  <button @click="colorRef = 'yellow'">黄</button>
  <button @click="colorRef = 'blue'">蓝</button>
  <hr />
  <CompSon />
  <demoVue /> -->
  <RouterView />
</template>

<style>
@import '@/assets/base.css';
</style>
