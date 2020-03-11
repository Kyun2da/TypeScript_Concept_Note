let array = new Array();
array.push(1);
array.push(2);
array.push(3);
console.log(array);

//단축 구문
let numbers2 = [1, 2, 3];
let strings = ["Hello", "World"];
console.log(numbers2, strings); //[1, 2, 3] ['Hello', 'World']

//자바스크립트에서 배열은 객체다.
let a = [1, 2, 3];
let o = { name: "Jack", age: 32 };
console.log(Array.isArray(a), Array.isArray(o)); //true, false

//배열의 타입
let numArray: number[] = [1, 2, 3];
let strArray: string[] = ["hello", "World"];

type IPerson = { name: string; age?: number };
let personArray: IPerson[] = [{ name: "Jack" }, { name: "Jane", age: 32 }];
