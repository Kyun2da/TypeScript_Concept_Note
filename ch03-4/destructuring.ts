import { IPerson } from "./type";

let jack: IPerson = { name: "Jack", age: 32 };
let { name, age } = jack;
console.log(name, age);
