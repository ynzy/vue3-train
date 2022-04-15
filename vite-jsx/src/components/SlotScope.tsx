/**
 * jsx作用域插槽
 */
import { defineComponent } from 'vue';
export default defineComponent({
  setup(props, ctx) {
    return () => {
      return <div>{ctx.slots.default && ctx.slots.default('作用域传参')}</div>;
    };
  }
});
