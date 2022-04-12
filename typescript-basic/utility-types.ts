// 常用工具类型
// partial，它可以把传入的类型都变成可选
interface IPerson5 {
  name: string;
  age: number;
}

let viking5: IPerson5 = { name: "viking", age: 20 };
type IPartial = Partial<IPerson>;
let viking6: IPartial = {};

// Omit，它返回的类型可以忽略传入类型的某个属性

type IOmit = Omit<IPerson, "name">;
let viking3: IOmit = { age: 20 };
