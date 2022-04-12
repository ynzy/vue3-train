<!--  -->
<template>
  <template>
    <div>
      <h3 ref="h3Ref">标题</h3>
      <compRef ref="compRef" :index="123" @update="update" />
    </div>
  </template>
</template>
<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  reactive,
  ref,
  toRefs
} from 'vue';
import compRef from './compRef.vue';
export default defineComponent({
  setup() {
    // 创建一个值为null的ref的对象，并返回
    // 获取元素
    const h3Ref = ref(null);
    // 获取组件
    const compRef = ref(null);
    // 在页面渲染完成后才能获取
    onMounted(() => {
      console.log(h3Ref.value);
      console.log(compRef);
      //   compRef.value.change(); // 父组件调用子组件方法
    });
    const update = (value) => {
      console.log(value);
    };
    return {
      h3Ref,
      compRef,
      update
    };
  }
});
</script>
<style lang="scss" scoped></style>
