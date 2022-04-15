<!--  -->
<template>
  <div class="experiment">
    <SlotScope>
      <template #default="de">{{ de }}</template>
    </SlotScope>
    <test-a></test-a>
  </div>
</template>
<script lang="tsx">
/**
 * SFC 中使用 jsx
 */
import { defineComponent } from 'vue';
import SlotScope from './SlotScope';

const TestA = () => <div>fdsafdsa</div>;

export default defineComponent({
  components: {
    SlotScope,
    TestA
  },
  setup(props) {
    return {
      msg: 'SFC 中使用 jsx'
    };
  }
});
</script>
<style scoped>
.experiment {
  font-size: 30px;
}
</style>
