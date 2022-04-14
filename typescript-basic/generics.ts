// function echo(arg) {
//   return arg;
// }
// const result = echo(123);
// 这时候我们发现了一个问题，我们传入了数字，但是返回了 any

function echo<T>(arg: T): T {
  return arg;
}

const result = echo<number>(123);

// 泛型也可以传入多个值
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const result2 = swap(["123", 321]);

// function echoWithArr<T>(arg: T[]): T[] {
function echoWithArr<T>(arg: T): T {
  // console.log(arg.length);
  return arg;
}
const arrs = echoWithArr([1, 2]);
// 上例中，泛型 T 不一定包含属性 length，我们可以给他传入任意类型，当然有些不包括 length 属性，那样就会报错

interface IWithLength {
  length: number;
}

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const str = echoWithLength("str");
const obj = echoWithLength({ length: 10 });
const arr2 = echoWithLength([1, 2, 3]);
// const num = echoWithLength(112)

class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}
// class Queue {
//   private data = [];
//   push(item) {
//     return this.data.push(item);
//   }
//   pop() {
//     return this.data.shift();
//   }
// }
const queue = new Queue();
queue.push(1);
queue.push("str");
console.log(queue.pop().toFixed());
console.log(queue.pop().toFixed());

//泛型和 interface
interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kp1: KeyPair<number, string> = { key: 1, value: "str" };
let kp2: KeyPair<string, number> = { key: "1", value: 2 };
// 定义数组
let arr: number[] = [1, 2, 3];
let arrTwo: Array<number> = [1, 2, 3];
