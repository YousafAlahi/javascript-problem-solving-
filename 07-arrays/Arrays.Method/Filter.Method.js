

`======================= ✅ 💡 SSSSSSS====>>>start=====>>>>TTTTTTT     ==========================================`
`filter() is super important for real apps (search, product listing, auth checks) 🔥`
`🔥 What is filter()?
👉 filter() new array return karta hai
👉 Sirf wo elements rakhta hai jo condition true (pass) karte hain`

`======================= ✅  1. Basic Example (Even Numbers)    ==========================================`
`❓ Problem:
Array me se sirf even numbers nikalo`

// const numbers = [1, 2, 3, 4, 5, 6];

// const evens = numbers.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(evens); 
// outupt ===>> [2, 4, 6]

`👉 Roman Urdu:
Jo numbers 2 se divide ho jayein (remainder 0), wo select ho gaye`


`======================= ✅ 2. Filter Names (Length > 4)     ==========================================`
// const names = ["Ali", "Ahmed", "Usman", "Sara"];

// const longNames = names.filter((name) => {
//   return name.length > 4;
// });

// console.log(longNames);

`👉 Roman Urdu:
Sirf wo names liye jinke letters 4 se zyada hain`


`======================= ✅ 💡 🛒 3. Real World: Expensive Products    ==========================================`
`❓ Problem:
Sirf wo products dikhao jinka price 1000 se zyada hai`

// const products = [
//   { name: "Shirt", price: 500 },
//   { name: "Shoes", price: 2000 },
//   { name: "Watch", price: 1500 }
// ];

// const expensive = products.filter((item) => {
//   return item.price > 1000;
// });

// console.log(expensive);

`👉 Roman Urdu:
Condition laga ke mehngi items alag kar di`


`======================= ✅ 💡 🛒 4. In Stock Products (VERY COMMON)    ==========================================`
`❓ Problem:
Sirf available products show karo`

// const products = [
//   { name: "Shirt", inStock: true },
//   { name: "Shoes", inStock: false },
//   { name: "Cap", inStock: true }
// ];

// const available = products.filter((item) => {
//   return item.inStock === true;
// });

// console.log(available);

`👉 Roman Urdu:
Sirf wo items jo stock me hain`

`======================= ✅ 💡  🌐 5. API Data (Active Users)   ==========================================`
`❓ Problem:
Sirf active users nikaalo`

// const users = [
//   { id: 1, name: "Ali", active: true },
//   { id: 2, name: "Ahmed", active: false }
// ];

// const activeUsers = users.filter((user) => {
//   return user.active;
// });

// console.log(activeUsers);

`👉 Roman Urdu:
Sirf active users ko select kiya`

`======================= ✅ 💡⚡ Real World Combo (IMPORTANT)     ==========================================`
`❓ Problem:
Expensive products ke names chahiye`

// const products = [
//   { name: "Shirt", price: 500 },
//   { name: "Shoes", price: 2000 },
//   { name: "Watch", price: 1500 }
// ];

// const result = products
//   .filter(item => item.price > 1000)
//   .map(item => item.name);

// console.log(result); // ["Shoes", "Watch"]

`👉 Roman Urdu:
Pehle filter → phir map → ye real project pattern hai 🔥`

`======================= ✅ 💡 💡 Golden Rule    ==========================================`
`👉 Condition lagani ho → filter()
👉 Data change karna ho → map()
👉 Sirf loop → forEach()`


`======================= ✅ 💡     ==========================================`
`======================= ✅ 💡     ==========================================`
`======================= ✅ 💡     ==========================================`


`======================= ✅ 💡 EEEEEEEEEEEnnnnnnnDDDDDDDDDDDD     ==========================================`
