/* eslint-disable brace-style */
/* eslint-disable curly */
/* eslint-disable no-undef-init */
/* eslint-disable indent */
/* eslint-disable quote-props */
/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable no-array-constructor */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-new-object */
/* eslint-disable semi */

const o = new Object();
const s = new Array();
const d = new Date();
// const f1 = function () {
//   console.log('The cow jumped over the MOON');
// };

// console.log("Date = " + d);
// f1();

// const o1 = Object.create({ x: 100, y: 200 });
// console.log('x= ' + o1.x + ' y=' + o1.y);
// console.log(o1);
const o2 = Object.create(null);
// console.log()
// const o3 = Object.create(Object.prototype);
// // const o3 = new Object();
// // const o3 = {};
function getChild (parent) {
  if (parent == null) throw TypeError();
  return Object.create(parent);
}

let obj = { x: "don't change this value" };
// console.log(obj.x);

let p = getChild(obj);
// console.log(p);

// obj = null;
p = getChild(obj);
// console.log(p);
// console.log(obj);

Object.prototype = 0;
// console.log(Object);

let obj2 = {};
// console.log(obj2);
obj2.x = 100;

p = getChild(obj2);
console.log(p);
p.y = 200;
let q = getChild(p);
q.z = 300;
console.log(q);
console.log("q.x + q.y + q.z" + (q.x + q.y + q.z));
console.log("p.x + p.y + p.z" + (p.x + p.y + p.z));
console.log("obj.x + obj2.y + obj2.z" + (obj2.x + obj2.y + obj2.z));
console.log("obj2.x " + obj2.x);

let book = {
  'main_title': 'JavaScript',
   subtitle: 'The Definitive Guide',
  'for': 'all audience',
  author: {
      firstname: 'Donald',
      surname: 'Duck'
  }
};
let len = undefined;
book = null;
// if (book) {
//     if (book["sub-titles"]) {
//         len = book["sub-title"].length;
//         console.log(len);
//     }
//     else
//         console.log("book.subtitle undefined:");
// }
// else
//     console.log("book is null");

// len = book && book.subtitle && book.subtitle.length;
// console.log(len)
// if (len) console.log(len); else console.log('nothing');

// console.log(book.author);
// delete book.author;
// console.log(book.author);

// console.log(book["main title"]);
// delete book["main title"];
// console.log(book["main title"]);

let o6 = { x: 100 };
// console.log(o6.x);
delete o6.x;
console.log(o6.x);
console.log(o6.toString);
delete o6.toString;

delete Object.prototype;
var a = 1;
delete this.a;
function f1 () {}
delete this.f1;
// console.log(a)
