interface IPerson {
  name: string;
  age: number;
}

let good: IPerson = { name: "Jack", age: 32 };

//모두 에러를 발생시킨다.
// let bad1: IPerson = { name: "Jack" };
// let bad2: IPerson = { age: 32 };
// let bad3: IPerson = {};
// let bad4: IPerson = { name: "Jack", age: 32, etc: true };

//선택 속성 구문

interface IPerson2 {
  name: string; //필수속성
  age: number; //필수속성
  etc?: boolean; //선택속성
}

let good1: IPerson2 = { name: "Jack", age: 32 };
let good2: IPerson2 = { name: "Jack", age: 32, etc: true };

//익명 인터페이스
let ai: {
  name: string;
  age: number;
  etc?: boolean;
} = { name: "Jack", age: 32 };

function printMe(me: { name: string; age: number; etc?: boolean }) {
  console.log(
    me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`
  );
}

printMe(ai);
