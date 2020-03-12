import { readFileSync, readFile } from "fs";

//package.json 파일을 동기 방식으로 읽는 예
console.log("read package.json using synchronous api...");
const buffer: Buffer = readFileSync("./package.json");
console.log(buffer.toString);

//package.json 파일을 비동기 방식으로 읽는 예
readFile("./package.json", (error: Error, buffer: Buffer) => {
  console.log("read package.json using asynchronous api...");
  console.log(toString());
});
