"use strict";
const a = 13.123456789;
const b = 2.123;
const n = 5;

let name1 = Math.floor((a % 1) * 10 ** n);
let name2 = Math.floor((b % 1) * 10 ** n);
console.log("Первое число: ", name1, "Второе число: ", name2);

console.log(name1 > name2);
console.log(name1 < name2);
console.log(name1 >= name2);
console.log(name1 <= name2);
console.log(name1 === name2);
console.log(name1 != name2);
