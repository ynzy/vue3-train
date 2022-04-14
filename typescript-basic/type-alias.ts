let sum1: (x: number, y: number) => number;
// function sum1(x: number, y: number): number {
//   return x + y;
// }
const result1 = sum1(1, 2);
type PlusType = (x: number, y: number) => number;
let sum3: PlusType;
// function sum3(x, y): PlusType {
//   return x + y;
// }
const res = sum3(3, 4);

interface Personal {
  name: string;
  age: number;
}

type PersonalArrayType = Personal[];

const list: PersonalArrayType = [];

// 支持联合类型
type StrOrNum = string | number;
let result3: StrOrNum = "123";
result3 = 12;

const str1: "name" = "name";
const number: 1 = 1;

// 字符串字面量
type Directions = "Up" | "Down" | "Left" | "Right";
let toWhere: Directions = "Right";

type LevelType = "province" | "city" | "distic" | "venue" | "";
let levelType: LevelType = "distic";

type EventType = "Change" | "add";

const change = (EventType: EventType) => {
  return EventType;
};

change("Change");
