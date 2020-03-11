export const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : [];

let numbers3: number[] = range(1, 9 + 1);
console.log(numbers3);
