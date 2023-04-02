"use strict";
// 1
let x1 = 2;
let y1 = 3;
let x2 = 10;
let y2 = 5;
let name1 = (x2 - x1);
let name2 = (y2 - y1);
let square = name1 * name2;
console.log("Площадь прямоуголиника: ", Math.abs(square));

//2

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

///3

const n = 0;
const m = 100;
const m1 = m - n;  
const zcx = Math.floor(Math.random() * m1) + n;
const c = Math.floor(zcx / 2);
const p = c * 2 + 1;
console.log(p);