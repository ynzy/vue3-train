<script setup lang="ts">
await new Promise((resolve) => {
  fetch(`/test.json`)
    .then((r) => r.json())
    .then((res) => {
      setTimeout(() => {
        resolve(res);
      }, 3000);
    });
});
</script>
<template>
  <h2>顶层await</h2>
</template>
<style lang="scss" scoped></style>
