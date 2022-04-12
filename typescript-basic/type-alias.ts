let sum1: (x: number, y: number) => number;
const result1 = sum(1, 2);
type PlusType = (x: number, y: number) => number;
let sum3: PlusType;
const res = sum3(3, 4);
// 支持联合类型
type StrOrNum = string | number;
let result3: StrOrNum = "123";
result3 = 12;

const str1: "name" = "name";
const number: 1 = 1;

// 字符串字面量
type Directions = "Up" | "Down" | "Left" | "Right";
let toWhere: Directions = "Right";
