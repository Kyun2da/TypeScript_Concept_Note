import { range } from "../ch05-1/range";

const array: number[] = range(1, 10 + 1);
const half = array.length / 2;

let belowHalf: number[] = array.filter((v, index) => index < half);
let overHalf: number[] = array.filter((v, index) => index >= half);
console.log(belowHalf, overHalf);
