

`======================= ✅ 💡 SSSSSSS====>>>start=====>>>>TTTTTTT     ==================================`
`some() is very useful for checks / validation`

`👉 some() check karta hai:
“kya array me kam az kam ek element condition pass karta hai?” `

`true/false mein return karta ha`
`======================= ✅ 💡⚙️ Syntax  ===============================`
// array.some((item) => {
//   return condition;
// });

`======================= ✅ 💡✅ 1. Basic Example    ==============================`
`❓ Problem:
Check karo kya array me koi number 10 se bada hai?`

// const numbers = [2, 5, 8, 12];

// const result = numbers.some((num) => {
//   return num > 10;
// });

// console.log(result); // true

`👉 Roman Urdu:
12 mil gaya → turant true return ho gaya`


`======================= ✅   2. Check Even Number Exists    ===============================`

// const numbers = [1, 3, 5, 6];

// const hasEven = numbers.some((num) => num % 2 === 0);

// console.log(hasEven); // true

`👉 Roman Urdu:
Agar ek bhi even number ho → true`


`================== ✅  🛒 3. Real World: Cart Validation    =====================`
`❓ Problem:
Check karo kya cart me koi product out of stock hai?`

// const cart = [
//   { name: "Shirt", inStock: true },
//   { name: "Shoes", inStock: false }
// ];

// const hasOutOfStock = cart.some((item) => !item.inStock);

// console.log(hasOutOfStock); // true

`👉 Roman Urdu:
Ek bhi item out of stock ho → warning dikha sakte ho`

`================= ✅ 💡 🌐 4. API Data (Admin Exists?)    ====================`
`❓ Problem:
Check karo kya koi admin user exist karta hai?`

// const users = [
//   { name: "Ali", role: "user" },
//   { name: "Sara", role: "admin" }
// ];

// const hasAdmin = users.some((user) => user.role === "admin");

// console.log(hasAdmin); // true
`
👉 Roman Urdu:
Agar ek bhi admin ho → system allow kar sakta hai`

`===================  ✅ 💡 🔐 5. Login Validation (VERY IMPORTANT) ========================`

`❓ Problem:
Check karo email already exist karta hai ya nahi`

// const users = [
//   { email: "ali@gmail.com" },
//   { email: "ahmed@gmail.com" }
// ];

// const exists = users.some((user) => user.email === "ali@gmail.com");

// console.log(exists); // true

`👉 Roman Urdu:
Signup me use hota hai → duplicate email check` 

`======================= ✅ 💡 ⚡ some vs every (INTERVIEW)   ============================`

`Method	        Meaning
some()	        ✅ at least one
every()	        ✅ all must pass`

// Example:
// const nums = [2, 4, 6];

// nums.some(n => n > 5);  // true
// nums.every(n => n > 5); // false

`👉 Roman Urdu:
some() → ek bhi chalega
every() → sab pass hone chahiye`

`======================= ✅ 💡 🚀 Real MERN Use Cases  =======================`
`🔐 Signup → email exists check
🛒 Cart → out of stock check
⚛️ React → condition rendering
🌐 API → permission check`


`======================= ✅ 💡     ===============================`

`======================= ✅ 💡 EEEEEEEEEEEnnnnnnnDDDDDDDDDDDD     ========================================`






`======================= ✅ 💡 SSSSSSS====>>>start=====>>>>TTTTTTT     ==================================`
`======================= ✅ 💡     ===============================`
`======================= ✅ 💡 EEEEEEEEEEEnnnnnnnDDDDDDDDDDDD     ========================================`
