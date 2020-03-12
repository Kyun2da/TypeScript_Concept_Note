import { range } from "../ch05-1/range";

const array: number[] = range(1, 10 + 1);

let odds: number[] = array.filter(value => value % 2 != 0);
let evens: number[] = array.filter(value => value % 2 == 0);
console.log(odds, evens);
