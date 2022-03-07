/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable semi */
const person = {
  first: 'Roselie',
  last: 'Ani',
  age: 100
};
console.log(person.first);
console.log(person.age);
console.log(person.last);
person.first = 'Tom';
person.last = 'Jerry';
console.log(person.first);
console.log(person.last);
person.last = null;
console.log(person.last);

const empty = {};
const point = { x: 10, y: 50 };
const point2 = { x: point.x, y: point.y + 1 };
const book = {
  'main title': 'Java Script',
  'sub-title': 'Guide to Java Script for beginners',
  // eslint-disable-next-line quote-props
  'for': 'students',
  author: {
    first: 'Rose',
    last: 'lie'
  }
};
console.log(book["main title"]);
console.log(book["sub-title"]);
// eslint-disable-next-line dot-notation
console.log(book["for"]);
console.log(book.author.first);
console.log(book.author.last);
// console.log(book.sub-title);
console.log(book.for);
