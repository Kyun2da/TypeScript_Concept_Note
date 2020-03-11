//클래스 사용법
class Person1 {
  name: string;
  age?: number;
}

let jack1: Person1 = new Person1();
jack1.name = "Jack";
jack1.age = 32;
console.log(jack1);

class Person2 {
  constructor(public name: string, public age?: number) {}
}

let jack2: Person2 = new Person2("Jack", 32);
console.log(jack2);

class Person3 {
  name: string;
  age?: number;
  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

let jack3: Person3 = new Person3("Jack", 32);
console.log(jack3);

interface IPerson4 {
  name: string;
  age?: number;
}

class Person4 implements IPerson4 {
  constructor(public name: string, public age?: number) {}
}

let jack4: IPerson4 = new Person4("Jack", 32);
console.log(jack4);

//추상 클래스
abstract class AbstractPerson5 {
  abstract name: string;
  constructor(public age?: number) {}
}

//클래스의 상속
//class 상속 클래스 extends 부모클래스
class Person5 extends AbstractPerson5 {
  constructor(public name: string, age?: number) {
    super(age);
  }
}

let jack5: Person5 = new Person5("Jack", 32);
console.log(jack5);
