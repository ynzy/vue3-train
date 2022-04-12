// 来到我们的第一个例子，约定输入，约定输出
function add(x: number, y: number): number {
  return x + y;
}
// 可选参数
function add1(x: number, y: number, z?: number): number {
  if (typeof z === "number") {
    return x + y + z;
  } else {
    return x + y;
  }
}
// 函数本身的类型
const add2: (x: number, y: number, z?: number) => number = add1;
// interface 描述函数类型
const sum = (x: number, y: number) => {
  return x + y;
};
interface ISum {
  (x: number, y: number): number;
}
const sum2: ISum = sum;
