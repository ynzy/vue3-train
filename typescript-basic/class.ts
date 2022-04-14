// 封装
// class Animal {
//   name: any;
//   constructor(name) {
//     this.name = name;
//   }
//   run() {
//     return `${this.name} is running`;
//   }
// }

class Animal {
  /**
   * 这是一个名字
   * @param name 
   */
  public name: any
  constructor(name) {
    this.name = name;
  }
  /**
   * 这是一个跑的方法
   * @returns 
   */
  run() {
    return `${this.name} is running`;
  }
}

const snake = new Animal("lily");
console.log(snake.run());

// 继承
class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const xiaobao = new Dog("xiaobao");
console.log(xiaobao.run());
console.log(xiaobao.bark());

// 多态
// 这里我们重写构造函数，注意在子类的构造函数中，必须使用 super 调用父类的方法，要不就会报错。
class Cat extends Animal {
  static categories = ["mammal"];
  constructor(name) {
    super(name);
    console.log(this.name);
  }
  run() {
    return "Meow," + super.run();
  }
}

const maomao = new Cat("maomao");
console.log(maomao.run());
console.log(Cat.categories);
