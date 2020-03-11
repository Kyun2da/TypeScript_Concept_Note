interface IAgeable {
  age?: Number;
}

function getAge(o: IAgeable) {
  return o != undefined && o.age ? o.age : 0;
}

console.log(getAge(undefined));
console.log(getAge(null));
console.log(getAge({ age: 32 }));

function fn(arg1: string, arg?: number) {
  console.log(`arg: ${arg}`);
}

fn("hello", 1);
fn("hello");
