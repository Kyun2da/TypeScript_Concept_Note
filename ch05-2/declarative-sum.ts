import { range } from "../ch05-1/range";
import { fold } from "./fold";
import { filter } from "./filter";
//입력 데이터 생성
let numbers: number[] = range(1, 100 + 1);

const isOdd = (n: number): boolean => n % 2 != 0;
//입력 데이터 가공
let result = fold(filter(numbers, isOdd), (result, value) => result + value, 0);
console.log(result);
