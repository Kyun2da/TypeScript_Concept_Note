export const split = (str: string, delim: string = ""): string[] =>
  str.split(delim);

console.log(split("hello"), split("h_e_l_l_o", "_"));

export const join = (strArry: string[], delim: string = ""): string =>
  strArry.join(delim);

console.log(
  join(["h", "e", "l", "l", "o"]),
  join(["h", "e", "l", "l", "o"], "_")
);
