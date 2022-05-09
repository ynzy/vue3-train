<script setup lang="ts">
//Child.vue
import { inject } from 'vue';
const person = inject<{ age: number; name: string }>('person');
console.log('响应式用法', person);
setTimeout(() => {
  if (person) {
    person.age = 50;
  }
}, 3000);
</script>
<template>
  <div>我叫{{ person && person.name }} 我的年龄：{{ person?.age }}</div>
</template>
