// 我们定义了一个接口 Person
interface Person {
  name: string;
  age: number;
  sex: string;
}
// 接着定义了一个变量 viking，它的类型是 Person。这样，我们就约束了 viking 的形状必须和接口 Person 一致。
let viking: Person = {
  name: "viking",
  age: 20,
  sex: "male",
};

//有时我们希望不要完全匹配一个形状，那么可以用可选属性：
interface Person1 {
  name: string;
  age?: number;
}
let viking1: Person1 = {
  name: "Viking",
};
viking1.age = 20;

//接下来还有只读属性，有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性
interface Person2 {
  readonly id: number;
  name: string;
  age?: number;
}
let viking2: Person2 = {
  id: 9527,
  name: "viking",
  age: 20,
};

// viking2.id = 123;
