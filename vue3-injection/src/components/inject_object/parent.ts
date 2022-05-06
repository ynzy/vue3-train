import { reactive } from 'vue';

export const personStore = {
  state: reactive({
    name: 'bob',
    age: 20
  }),
  setAge(n: number) {
    this.state.age = n;
  },
  action() {
    console.log('111');
  }
};
