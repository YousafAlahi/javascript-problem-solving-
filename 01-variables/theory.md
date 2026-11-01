# JavaScript Variables

## Definition

Variables JavaScript mein data store karne ke liye use hotay hain.
variables mein number, string, array, object waghera store kar sakte hain.

            ** OR **
// **Variables kya hain?**
// Variables aik tarah ke containers hain jo data store karte hain. Jaise aik dabba hota hai jismein aap cheezein rakhte hain.

## JavaScript mein Variables ke Types


Variable Declaration Keywords
JavaScript mein teen tarah se variables declare karte hain:

1. var (Purana Tareeqa);;

var purana keyword hai
Function scope hota hai
Re-declare kar sakte hain
Hoisting ke sath issues ho sakte hain
Ab kam istemal hota hai

2. let (Modern Tareeqa);;

let modern aur behtar keyword hai
Block scope hota hai
Value change kar sakte hain baad mein
Re-declare nahi kar sakte same block mein
Most commonly istemal hota hai

3. const (Constant - Jo Change Na Ho);;;

const constant values ke liye
Value change nahi kar sakte ek baar assign karne ke baad
Block scope hota hai
Must initialize karna padta hai declaration ke waqt

⚠ Important:
Agar const array ya object ho to uska data change ho sakta hai

const arr = [1, 2, 3];
arr.push(4); // allowed


### Scope kya hota hai?

Block Scope

Jo variables { } ke andar declare hotay hain (let, const)

Function Scope

Jo var se declare hotay hain



`// Q1 : ====>> Variable declare karo aur print karo`
 
// let name = "Yousaf";
// var age = 23;
// const city = "Lahore"

// console.log(name, age, city);

`// Q2 : ====>>>  var, let aur const variable banayo aur re-declare aur re-assign karne ki koshish karo`

var name = "Ali";
let age = 23;
const city = "Lahore";

// using  (Template Literals)
 console.log(`My name is ${name}. My age is ${age} and I am from ${city}`);

`// var , let , const keyword variable re-declare and re-assign  ;;;`

`// ====== re-declare variables ====== ;;;;;`

`// re-declare ka mtlb ha ky same name ky 2 varible bana lena ak block mein `

// var name = "Maqsoood";   `// var keyword ky variable ko re-declare kr sakty hain ;;`
// let age = 33;            `// let keyword ky variable ko re-declare nahi kr sakty hain ;;`
// const city = "Multan"    `// const keyword ky variable ko re-declare nahi kr sakty hain ;;`

// console.log(name, age, city);

`// ==== re-assign variables ===== ;;;;;`
 `// re-assign ka mtlb ha ky varible ky value change kr dena `

name = "Maqsood"; `// var keyword ky variable ko re-assign kr sakty hain ;;`
age = 44 ;        `// let keyword ky variable ko re-assign kr sakty hain ;;`
// city = "Karachi"; `// const keyword ky variable ko re-assign nahi kr sakty hain ;;`

// console.log(name, age, city);
 console.log(`My name is ${name}. My age is ${age} and I am from ${city}`);

`// Q3: var , let aur const ka scope check karo`

 // =====  'Using "Var" keyword for declare a variable and check  scope '

var name = "Ali";
if(true){
    var city = "Lahore";
    console.log(`My name is ${name}`);
}
console.log(`I am from ${city}`);


// ===== 'using "Let" keyword for declare a variable and check  scope '
let name = "Ali";

if(true){

    let city = "Lahore";
    console.log(`My name is ${name}`);

}

console.log(`I am from ${city}`);

// =====  'using "Const" keyword for declare a variable and check  scope ' ;;;;
const name = "Ali";

if(true){

    const city = "Lahore";
    console.log(`My name is ${name}`);

}

console.log(`I am from ${city}`);

 
 `// =====  'Using "Var" keyword for declare a variable and check  Hoisting `

console.log(name);
let name = "Ali";

  
 `// =====  Using "Let" keyword for declare a variable and check  Hoisting `

console.log(name);
 var name = "Ali";
 
 `// =====  Using "Const" keyword for declare a variable and check  Hoisting `

console.log(name);
const name = "Ali";

`// Q4 ====>> : Do variables swap karo ;;;;;;;`

// let a = 10;
// let b = 20;

// let temp = a;
// a = b ;
// b = temp ;

// console.log(a, b);

`// Q5 ====>> : const array modify karo ;;;  `

// const arr = [1,2,3,4];
// arr.push(4);
// console.log(arr);


// Q6====>> : Output kya hoga?
// let score = 50;
// score = 60;
// console.log(score);

// Q7 ====>> : Variable bina value ke ;;

// let result;
// console.log(result); // undefined