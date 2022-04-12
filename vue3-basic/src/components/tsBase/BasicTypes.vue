<!--  -->
<template>
  <div></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: '',
  components: {},
  props: {},
  setup(props) {
    let isDone = false;

    // 接下来来到 number，注意 es6 还支持2进制和8进制，让我们来感受下

    let age = 10;
    let binaryNumber = 0b1111;

    // 之后是字符串，注意es6新增的模版字符串也是没有问题的
    let firstName = 'viking';
    let message = `Hello, ${firstName}, age is ${age}`;

    // 还有就是两个奇葩兄弟两，undefined 和 null
    let u = undefined;
    let n = null;

    // 注意 undefined 和 null 是所有类型的子类型。
    // 也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
    let num: number = undefined;
    // symbol类型
    let symbolTest = Symbol();
    let test: string = symbolTest;
    return {};
  }
});
</script>
<style lang="scss" scoped></style>
