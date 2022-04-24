<script setup lang="ts">
const props = defineProps({
  msg: String
});

const emit = defineEmits(['change', 'delete']);

function handelChange() {
  emit('change', {
    type: '发送change事件',
    msg: props.msg
  });
}
</script>
<template>
  <h2>defineProps & defineEmits</h2>
  <div>{{ msg }}</div>
  <button @click="handelChange">改变</button>
</template>
<style lang="scss" scoped></style>
