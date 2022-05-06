import { ref, type Ref } from 'vue';
import { f_token } from './const';

interface Feature {
  msg: string;
  count: Ref<number>;
  increment: () => void;
  doubleCount: () => void;
  // token?: symbol;
}

export function useNewFeature() {
  const msg = '一个新功能use';
  const count = ref(0);
  const increment = () => {
    return (count.value += 2);
  };
  function doubleCount() {
    return count.value * 2;
  }
  return {
    msg,
    count,
    increment,
    doubleCount
  };
}
// useNewFeature.token = f_token;
