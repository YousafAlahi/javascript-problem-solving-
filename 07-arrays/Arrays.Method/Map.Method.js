

`======================= ✅ 💡 SSSSSSS====>>>start=====>>>>TTTTTTT     =============================`
`Great choice 👍 — map() is one of the MOST important methods, especially for React & real projects.`
`🔥 What is map()?
👉 map() ek new array return karta hai after transforming data.`

`======================= ✅ 1. Basic Example (Multiply)    ==========================================`
`❓ Problem:
Har number ko 2 se multiply karo.`

// const numbers = [1, 2, 3, 4];

// const result = numbers.map((num) => {
//   return num * 2;
// });

// console.log(result); // [2, 4, 6, 8]

`👉 Roman Urdu:
Har value change ho kar new array me aa rahi hai.`

`======================= ✅ 2. Convert Names to Uppercase    ==========================================`

// const names = ["ali", "ahmed", "sara"];

// const upperNames = names.map((name) => {
//   return name.toUpperCase();
// });

// console.log(upperNames);

`👉 Roman Urdu:
Har name ko capital bana ke new array return hua.`
`=================== ✅ 🛒 3. Real World: Shopping Cart (Extract Prices) ======================================`
`❓ Problem:

Sirf prices ka array banao.`

// const cart = [
//   { name: "Shirt", price: 500 },
//   { name: "Shoes", price: 2000 }
// ];

// const prices = cart.map((item) => {
//   return item.price;
// });

// console.log(prices); // [500, 2000]

`👉 Roman Urdu:
Objects se sirf price nikaal ke new array banaya.`

`======================= ✅ 🛒 4. Add Tax to Prices    ==========================================`
`❓ Problem:
Har product price me 10% tax add karo.`

// const cart = [
//   { name: "Shirt", price: 1000 },
//   { name: "Shoes", price: 2000 }
// ];

// const updatedCart = cart.map((item) => {
//   return {
//     name: item.name,
//     price: item.price * 1.1
//   };
// });

// console.log(updatedCart);

`👉 Roman Urdu:
Har item ko update karke new object return kiya.`
`======================= ✅ 🌐 5. API Data → UI Format     ==========================================`
`❓ Problem:
API se users aaye → unhe UI string me convert karo.`

// const users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Ahmed" }
// ];

// const userList = users.map((user) => {
//   return `${user.id} - ${user.name}`;
// });

// console.log(userList);

`👉 Roman Urdu:
Data ko UI display format me convert kiya.`

`======================= ✅   ⚡ Bonus (React Style – VERY IMPORTANT)   ==========================================`

// const users = ["Ali", "Ahmed", "Sara"];

// users.map((user) => {
//   return <li>{user}</li>;
// });

`👉 Ye React me list render karne ka most common use hai.`

`======================= ✅ 💡  Golden Rule    ==========================================`
// 👉 Data change karna ho → map()
// 👉 Sirf loop chalana ho → forEach()
`======================= ✅ 💡     ==========================================`

`======================= ✅ 💡 EEEEEEEEEEEnnnnnnnDDDDDDDDDDDD     ==========================================`
