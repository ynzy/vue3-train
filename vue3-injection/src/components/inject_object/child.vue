<script setup lang="ts">
//Child.vue
import { inject } from 'vue';
const person = inject<{ state: any; setAge: (n: number) => void }>('person');
console.log('封装成对象管理', person);
setTimeout(() => {
  if (person) {
    person.setAge(50);
  }
}, 3000);
</script>
<template>
  <div>我叫{{ person?.state.name }} 我的年龄：{{ person?.state.age }}</div>
</template>
