
`======================= ✅ 💡 SSSSSSS====>>>start=====>>>>TTTTTTT     ==========================================`
`Perfect 🔥 — reduce() is the MOST powerful array method `

`🔥 What is reduce()?
👉 reduce() array ko single value me convert karta hai`


`======================= ✅ 💡 ⚙️ Syntax (IMPORTANT)    ==========================================`

// array.reduce((accumulator, currentValue) => {
//   // logic
// }, initialValue);

// `arr.reduce((acc, val) => acc + val, 0);`

`👉 Roman Urdu:
accumulator → result store karta hai
currentValue → current item`

`======================= ✅ 1. Basic Example (Sum)     ==========================================`
`❓ Problem:
Array ka total sum nikalo`

// const numbers = [10, 20, 30];

// const sum = numbers.reduce((acc, num) => {
//   return acc + num;
// }, 0);

// console.log(sum); // 60

`👉 Roman Urdu:
acc me har number add hota ja raha hai`

`======================= ✅ 2. Find Maximum Number     ==========================================`

// const numbers = [5, 10, 2, 20];

// const max = numbers.reduce((acc, num) => {
//   return num > acc ? num : acc;
// }, numbers[0]);

// console.log(max); // 20

`👉 Roman Urdu:
Har step pe compare ho raha hai konsa bada hai`



`======================= ✅ 💡 🛒 3. Real World: Shopping Cart Total     ==================================`
`❓ Problem:
Cart ka total price nikalo`

// const cart = [
//   { name: "Shirt", price: 500, qty: 2 },
//   { name: "Shoes", price: 2000, qty: 1 }
// ];

// const total = cart.reduce((acc, item) => {
//   return acc + item.price * item.qty;
// }, 0);

// console.log(total);

`👉 Roman Urdu:
Har item ka total add hota ja raha hai → final bill ban gaya`

`======================= ✅ 💡🛒 4. Count Items (Advanced) =========================================`
`❓ Problem:
Har product kitni dafa aaya count karo`

// const items = ["apple", "banana", "apple", "orange", "banana"];

// const count = items.reduce((acc, item) => {
//   acc[item] = (acc[item] || 0) + 1;
//   return acc;
// }, {});

// console.log(count);

`👉 Roman Urdu:
Object bana ke har item ka count store kiya`


`======================= ✅ 💡 🌐 5. API Data → Group Users    ===================================`
`❓ Problem:
Users ko role ke hisaab se group karo`

// const users = [
//   { name: "Ali", role: "admin" },
//   { name: "Ahmed", role: "user" },
//   { name: "Sara", role: "admin" }
// ];

// const grouped = users.reduce((acc, user) => {
//   if (!acc[user.role]) {
//     acc[user.role] = [];
//   }
//   acc[user.role].push(user);
//   return acc;
// }, {});

// console.log(grouped);

`👉 Roman Urdu:
Users ko roles ke hisaab se group kar diya`

`======================= ✅ 💡 ⚡ PRO Combo (Interview Favorite)    ==============================`

`❓ Problem:
Expensive products ka total price`

// const products = [
//   { name: "Shirt", price: 500 },
//   { name: "Shoes", price: 2000 },
//   { name: "Watch", price: 1500 }
// ];

// const total = products
//   .filter(item => item.price > 1000)
//   .reduce((acc, item) => acc + item.price, 0);

// console.log(total); // 3500

`👉 Roman Urdu:
Filter + Reduce = real project power 🔥`

`======================= ✅ 💡  🔥 reduce vs others   ==========================================`
`Method	               Use

forEach()	          loop
map()	              transform
filter()	          select
reduce()	          everything (sum, group, count)`


`======================= ✅ 💡  Golden Rule    ==========================================`
` 👉 Jab bhi tumhe:

total nikalna ho
grouping karni ho
counting karni ho
complex logic ho

➡️ reduce() use karo `

`======================= ✅ 💡 EEEEEEEEEEEnnnnnnnDDDDDDDDDDDD     ==========================================`








`======================= ✅ 💡 SSSSSSS====>>>start=====>>>>TTTTTTT     ==================================`
`======================= ✅ 💡     ===============================`
`======================= ✅ 💡 EEEEEEEEEEEnnnnnnnDDDDDDDDDDDD     ========================================`
