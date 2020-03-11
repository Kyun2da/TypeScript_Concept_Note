const numbers: number[] = [1, 2, 3, 4, 5];
for (let index = 0; index < numbers.length; index++) {
  const item: number = numbers[index];
  console.log(item);
}

let array2: number[] = [1, 2, 3, 4, 5];
let [first, second, third, ...rest] = array2;
console.log(first, second, third, rest);

//for...in문
let names = ["Jack", "Jane", "Steve"];

for (let index in names) {
  const name = names[index];
  console.log(`[${index}]:${name}`);
}

//for...of문
for (let name of ["Jack", "Jane", "Steve"]) console.log(name);

//제네릭 방식 타입
export const arrayLength = <T>(array: T[]): number => array.length;
export const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) == 0;
