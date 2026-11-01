
`======================= ✅ 💡 SSSSSSS====>>>start=====>>>>TTTTTTT     ==================================`
`every() is the final piece for validation logic` 
`🔥 What is every()?

👉 every() check karta hai:
“kya sab elements condition pass karte hain?”
true/false mein return karta ha `


`======================= ✅ ⚙️ Syntax  ===============================`
// array.every((item) => {
//   return condition;
// });
`======================= ✅ 💡 ✅ 1. Basic Example    ===============================`
`❓ Problem:
Check karo kya sab numbers 0 se bade hain? `

// const numbers = [2, 5, 8, 10];

// const result = numbers.every((num) => {
//   return num > 0;
// });

// console.log(result); // true

`👉 Roman Urdu:
Sab numbers positive hain → true`

`======================= ✅ 💡  ✅ 2. Check All Even Numbers ============================`

// const numbers = [2, 4, 6, 8];

// const allEven = numbers.every((num) => num % 2 === 0);

// console.log(allEven); // true

`👉 Roman Urdu:
Sab numbers even hain → true`

`======================= ✅ 💡  🛒 3. Real World: Cart Validation ==============================`
`❓ Problem:
Check karo kya saare products stock me hain`

// const cart = [
//   { name: "Shirt", inStock: true },
//   { name: "Shoes", inStock: true }
// ];

// const allAvailable = cart.every((item) => item.inStock);

// console.log(allAvailable); // true
`
👉 Roman Urdu:
Agar ek bhi out of stock ho → false ho jayega`

`======================= ✅ 💡  🌐 4. API Data (All Users Active?)   ===============================`

// const users = [
//   { name: "Ali", active: true },
//   { name: "Ahmed", active: true }
// ];

// const allActive = users.every((user) => user.active);

// console.log(allActive); // true
`
👉 Roman Urdu:
Sab users active hone chahiye `

`======================= ✅ 💡 🔐 5. Form Validation (VERY IMPORTANT)  ==========================`
`❓ Problem:
Check karo kya sab fields filled hain`

// const fields = ["Ali", "ali@gmail.com", "123456"];

// const isValid = fields.every((field) => field !== "");

// console.log(isValid); // true

`👉 Roman Urdu:
Agar ek bhi empty field ho → form invalid`

`======================= ✅ 💡⚡ every vs some (INTERVIEW)     ===============================`
`Method	          Meaning
some()	          ✅ at least one
every()	           ✅ all must pass`

// Example:
// const nums = [2, 4, 6, 7];

// nums.some(n => n % 2 === 0);  // true
// nums.every(n => n % 2 === 0); // false

`👉 Roman Urdu:
some() → ek bhi even chalega
every() → sab even hone chahiye `

`======================= ✅ 💡 🚀 Real MERN Use Cases    ===============================`
`🔐 Form validation (all fields required)
🛒 Checkout (all items available)
🌐 API validation (all data valid)
⚛️ React conditional rendering`

`======================= ✅ 💡     ===============================`
`======================= ✅ 💡     ===============================`
`======================= ✅ 💡 EEEEEEEEEEEnnnnnnnDDDDDDDDDDDD     ========================================`
