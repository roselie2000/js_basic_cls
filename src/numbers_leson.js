/* eslint-disable prefer-const */
/* eslint-disable quotes */
/* eslint-disable semi */
const age = 100;
const money = 1000.50;
console.log(typeof age);
console.log(typeof money);
console.log("10" + "10");
console.log("10" - "3");

// Math helper methods:
console.log(Math.round(2.3));
console.log(Math.floor(2.5));
console.log(Math.ceil(2.5));
console.log(Math.random(2, 5));

const sweet = 20;
const kids = 3;
const eachKidGets = Math.floor(sweet / kids);
console.log(eachKidGets);
const leftsweet = sweet % kids;
console.log(leftsweet);

let x = 2 ** 3;
console.log(x)

x = Math.pow(2, 3);
console.log(x);
console.log(0.1 + 0.2);
console.log(typeof Infinity);
console.log(typeof -Infinity);
let result1 = 10 / 'hello';
console.log(result1);
console.log(typeof NaN);

x = 100;
let result = Number.isInteger(x);
console.log(`x is ${result}`);

let y = "abcd";
let result3 = Number.isInteger(y);
console.log(`y is ${result3}`);

result3 = (typeof x2 === 'string');
console.log(`Is x2 is a String ${result3}`);

let flag = true;
result = (typeof flag === 'boolean');
console.log.apply(`Is flag a boolean ${result}`);

let nos = [1, 2, 3, 4, 5];
result = (typeof nos === 'object');
console.log(`is nos an object ${result}`);
