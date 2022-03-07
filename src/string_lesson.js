/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable semi */
/* eslint-disable quotes */
// eslint-disable-next-line camelcase
const my_name = 'Roselie';
const middle = "Muthu";
const last = "Kumar";

console.log(my_name);
console.log(middle);
console.log(last);

const sentence1 = 'she\'s so cool';
console.log(sentence1);
const sent2 = `she's so "cool"`;
console.log(sent2);
const sten3 = `"she"s so cool"`;
console.log(sten3);
const sent4 = "she's so \"cool\"";
console.log(sent4);

// multi line string using single quote dosen't worl

const song1 = `I like 
ARR songs and 
Aniruth songs`;
console.log(song1);

const hello3 = 'hello my name is ' + my_name + ".Nice to meet you";
console.log(hello3);

const hell4 = `hello my name is ${my_name}. Nice to meet you.
I am ${1 + 10} years old`;
console.log(hell4);

const html = `<div>
<h2> ${my_name}</h2>
<p>${hello3}</p>
<div>
`;
console.log(html);
// document.body.innerHTML = html
let isDrawing = false;
let age = 18;
const ofAge = age > 19;
console.log(ofAge);
console.log(isDrawing);
console.log(age === 18);
const s1 = '18';
console.log(s1 == 18);
console.log(s1 === 18);
