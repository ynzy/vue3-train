// 数字枚举，一个数字枚举可以用 enum 这个关键词来定义，我们定义一系列的方向，然后这里面的值，枚举成员会被赋值为从 0 开始递增的数字,
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction.Up);

// 还有一个神奇的点是这个枚举还做了反向映射
console.log(Direction[0]);

// 字符串枚举
enum Direction1 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
const value1 = "UP";
if (value1 === Direction1.Up) {
  console.log("go up!");
}
