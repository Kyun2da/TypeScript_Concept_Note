let n: number = 1;
let b: boolean = true;
let s: string = "hello";
let o: object = {};

//any는 값의 타입과 무관하게 어떤 종류의 값도 저장할 수 있다.
let a: any = 0;
a = "hello";
a = true;
a = {};

//undefined 타입
let u: undefined = undefined;
//u = 1; //:에러

let count = 10,
  message = "Your count";
let result = `${message} is ${count}`;
console.log(result);
