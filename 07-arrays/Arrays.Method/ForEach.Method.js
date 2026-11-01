
`================================  ✅ 1. Print All Elements of Array ========================================`



`// Problem:`
`// Given an array, print each element.`

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(num) {
//   console.log(num);
// });

`// Explanation:
// forEach() har element par loop chalaata hai aur return nahi karta .
// 👉 Roman Urdu:
// forEach har value ko ek ek karke print kar raha hai.`

`================================   ✅ 2. Multiply Each Element by 2   ========================================`

`// Problem:
// Har number ko 2 se multiply karke print karo.`

// let numbers = [1,2,3,4,5,6];

// numbers.forEach(function(num){
//     console.log(num * 2)
// });

`// 👉 Roman Urdu:
// Har number ko 2 se multiply karke output diya ja raha hai.`

`================================     ✅ 3. Sum of All Elements      ==========================================`

`// Problem:
// Array ke sab numbers ka sum nikalo.`

// const numbers = [10, 20, 30];
// let sum = 0;

// numbers.forEach((num) => {
//   sum += num;
// });

// console.log("Sum:", sum);

`// 👉 Roman Urdu:
// sum variable me har value add hoti ja rahi hai.`

`================================    ✅ 4. Count Even Numbers      ==========================================`

`// Problem:
// Array me kitne even numbers hain count karo.`

// const numbers = [1, 2, 3, 4, 6, 7];
// let count = 0;

// numbers.forEach((num) => {
//   if (num % 2 === 0) {
//     count++;
//   }
// });

// console.log("Even numbers:", count);

`// 👉 Roman Urdu:
// Agar number 2 se divide ho jaye (remainder 0), to wo even hai.`




`======================= ✅ 5. Convert Names to Uppercase       ==========================================`

// Problem:
// Array ke sab names ko uppercase me print karo.`

// const names = ["ali", "ahmad", "john"];

// names.forEach((name) => {
//   console.log(name.toUpperCase());
// });

`// 👉 Roman Urdu:
// Har name ko capital letters me convert kiya ja raha hai.`

`======================= ✅ 🛒 6. Shopping Cart Total Price       ==========================================`
`❓ Problem:

Tumhare paas cart hai jisme products hain. Total price calculate karo.`

// const cart = [
//   { name: "Shirt", price: 500, qty: 2 },
//   { name: "Shoes", price: 2000, qty: 1 },
//   { name: "Cap", price: 300, qty: 3 }
// ];

// let total = 0;

// cart.forEach((item) => {
//   total += item.price * item.qty;
// });

// console.log("Total Price:", total);

`🧠 Explanation:
Har item ka price * qty
Sab ko add karke total banaya

👉 Roman Urdu:
Har product ka total nikal ke total me add kar diya.`


`======================= ✅ 🛒 2. Show Cart Items (UI style)       ==========================================`
`❓ Problem:
Cart ke items ko display karo (jaise frontend me list banate hain)`

// const cart = [
//   { name: "Shirt", price: 500 },
//   { name: "Shoes", price: 2000 }
// ];

// cart.forEach((item, index) => {
//   console.log(`${index + 1}. ${item.name} - Rs ${item.price}`);
// });

`👉 Roman Urdu:
Har item ko numbering ke sath show kar rahe hain (UI jaisa output).`

`======================= ✅ 🛒 3. Find Expensive Products (> 1000)     ==========================================`
`❓ Problem:
Sirf wo products print karo jinka price 1000 se zyada hai.`

// const cart = [
//   { name: "Shirt", price: 500 },
//   { name: "Shoes", price: 2000 },
//   { name: "Watch", price: 1500 }
// ];

// cart.forEach((item) => {
//   if (item.price > 1000) {
//     console.log(item.name);
//   }
// });

`👉 Roman Urdu:
Condition laga ke sirf mehngi items show ki.`

`======================= ✅ 🌐 4. API Data Handling (User List)     ==========================================`
`❓ Problem:
API se users aaye → unke names print karo.`

// const users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Ahmed" },
//   { id: 3, name: "Sara" }
// ];

// users.forEach((user) => {
//   console.log(user.name);
// });

`👉 Roman Urdu:
API ka data aaya, hum sirf names nikaal rahe hain.`


`======================= ✅ 🌐 5. API Data → Modify (Add Role)      ==========================================`
`❓ Problem:
Har user ko ek new field role: "user" add karo.`

// const users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Ahmed" }
// ];

// users.forEach((user) => {
//   user.role = "user";
// });

// console.log(users);

`🧠 Output:
[
  { id: 1, name: "Ali", role: "user" },
  { id: 2, name: "Ahmed", role: "user" }
]`

`👉 Roman Urdu:
Hum object ko directly update kar rahe hain (mutation).`


`======================= ✅ 💡 Real World Summary     ==========================================`
// Use forEach() when:

// UI render karna ho
// Data print karna ho
// Object update karna ho
// Side effects chahiye (no return)

`======================= ✅ 💡 EEEEEEEEEEEnnnnnnnDDDDDDDDDDDD     ==========================================`
