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



// Q1 : ====>> Variable declare karo aur print karo
 
// let name = "Yousaf";

// console.log(name);

// Q2 : ====>>> const variable banayo aur reassign karne ki koshish karo

// const city = "Lahore";
// city = "Multan";
// console.log(city); // error

// Q3: var aur let ka scope check karo
 
// if(true){
//     var name = "Yousaf";
//     let city = "Lahore";
// };

// console.log(name); // work
// console.log(city); // not work



// Q4 ====>> : Do variables swap karo ;;;;;;;

// let a = 10;
// let b = 20;

// let temp = a;
// a = b ;
// b = temp ;

// console.log(a, b);

// Q5 ====>> : const array modify karo ;;;

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