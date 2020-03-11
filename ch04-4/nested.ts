const calc = (value: number, cb: (number) => void): void => {
  let add = (a, b) => a + b;
  let multiply = (a, b) => a * b;

  let result = multiply(add(1, 2), value);
  cb(result);
};

calc(30, (result: number) => console.log(`result is ${result}`)); //result is 90
