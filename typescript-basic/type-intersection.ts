interface IName {
  name: string;
}
type IPerson = IName & { age: number };
let person: IPerson = { name: "hello", age: 12 };
