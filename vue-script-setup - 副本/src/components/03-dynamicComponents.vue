<script setup lang="tsx">
const Comp1 = () => <div>组件1</div>;
const Comp2 = () => <div>组件2</div>;

const someCondition = true;
</script>
<template>
  <h2>动态组件</h2>
  <component :is="someCondition ? Comp1 : Comp2" />
  <component :is="'GlobalComponent'" />
</template>
<style lang="scss" scoped></style>
