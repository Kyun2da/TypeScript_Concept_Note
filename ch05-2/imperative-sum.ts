import { range } from "../ch05-1/range";
let sum = 0;
for (let val = 1; val <= 100; ) sum += val++;
console.log(sum);

let numbers4: number[] = range(1, 100 + 1);
console.log(numbers4);
