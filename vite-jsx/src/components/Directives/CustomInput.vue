<script lang="ts">
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const inputChange = (event: Event) => {
      // 类型断言     断定event.target一定是html input标签   不然不能点value
      const target = event.target as HTMLInputElement;
      emit('update:modelValue', target.value);
    };
    return {
      inputChange
    };
  }
};
</script>

<template>
  <input :value="modelValue" @input="inputChange" />
</template>
