import { ref } from "vue";
import { USE_PACKAGE } from "../enum";

export function usePackage() {
  const count = ref<number>(1);
  function increment() {
    count.value++;
  }

  function doubleCount() {
    return count.value * 2;
  }

  return { count, increment, doubleCount };
}

usePackage.token = USE_PACKAGE;
