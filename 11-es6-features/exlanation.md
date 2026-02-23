
1. let & const

let = block scope variable (change ho sakta)

const = constant variable (change nahi hota)

let age = 20;
age = 21;

const pi = 3.14; // change nahi ho sakta


➡️ Scope safe aur modern replacement of var

🔹 2. Arrow Functions (=>)

Short syntax function likhne ka.

const sum = (a, b) => a + b;


➡️ Clean syntax + this issue solve karta hai

🔹 3. Template Literals ( )

String interpolation ke liye ${} use hota hai.

let name = "Yousaf";
console.log(`Hello ${name}`);


➡️ String concatenate karna easy

🔹 4. Destructuring

Array/Object se values direct variables mein nikalna.

const user = {name: "Ali", age: 22};
const {name, age} = user;


➡️ Code short aur readable

🔹 5. Default Parameters

Function parameter ki default value set kar sakte hain.

function greet(name = "Guest"){
  console.log(name);
}

🔹 6. Rest Operator (...)

Multiple values ko array bana deta hai.

function sum(...nums){
  return nums.reduce((a,b)=>a+b);
}

🔹 7. Spread Operator (...)

Array/Object copy ya merge karne ke liye.

const arr1 = [1,2];
const arr2 = [...arr1,3,4];

🔹 8. Classes

OOP style class syntax introduce hua.

class Person {
  constructor(name){
    this.name = name;
  }
}

🔹 9. Modules (import / export)

File based code reuse karna.

export const add = (a,b)=>a+b;
import { add } from './math.js';

🔹 10. Promises

Async code handle karne ka modern tarika.

let promise = new Promise((resolve)=>{
  resolve("Done");
});

🔹 11. for...of Loop

Array iterate karne ka clean loop.

for (let val of [1,2,3]) {
  console.log(val);
}

🔹 12. Map & Set

Unique data structures.

Map → key-value pair

Set → unique values only

🔥 Interview One-Line Summary:

ES6 ne JavaScript ko modern banaya: let/const, arrow functions, destructuring, classes, modules, promises aur spread/rest operators introduce kiye.