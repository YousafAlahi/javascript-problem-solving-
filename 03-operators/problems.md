

🔹 1. Arithmetic Operators (+ - * / %)
✅ Example 1
let a = 10;
let b = 3;

console.log(a + b); 
console.log(a % b);


Explanation (Roman Urdu):
+ add karta hai, % remainder deta hai (10 ko 3 se divide karne par 1 bach jata hai)

✅ Example 2
let x = 20;
let y = 5;

console.log(x - y);
console.log(x * y);

Explanation:
- subtract, * multiply karta hai

🔹 2. Assignment Operators (=, +=, -=)
✅ Example 1
let num = 10;

num += 5;

console.log(num);

Roman Urdu:
num += 5 ka matlab → num = num + 5

✅ Example 2
let num = 20;

num -= 8;

console.log(num);

Output:

12
🔹 3. Comparison Operators (==, ===, >, <)
✅ Example 1
console.log(5 == "5");
console.log(5 === "5");

Output:

true
false

Roman Urdu:
== sirf value check karta hai
=== value + type dono check karta hai

✅ Example 2
console.log(10 > 5);
console.log(3 < 1);

Output:

true
false

🔹 4. Logical Operators (&&, ||, !)
✅ Example 1
let age = 20;

console.log(age > 18 && age < 30);

Output:

true

Roman Urdu:
&& dono condition true honi chahiye

✅ Example 2
let isLoggedIn = false;

console.log(!isLoggedIn);

Output:

true

Explanation:
! value ko reverse karta hai

🔹 5. Increment / Decrement (++, --)
✅ Example 1
let x = 5;

x++;

console.log(x);

Output:

6
✅ Example 2
let y = 10;

y--;

console.log(y);

Output:

9
🔹 6. String Operators (+)
✅ Example 1
let first = "Yousaf";
let last = "Ali";

console.log(first + " " + last);

Output:

Yousaf Ali
✅ Example 2
let text = "Hello";
text += " World";

console.log(text);

Output:

Hello World
🔹 7. Ternary Operator ( ? : )
✅ Example 1
let age = 18;

let result = age >= 18 ? "Adult" : "Child";

console.log(result);

Output:

Adult
✅ Example 2
let marks = 40;

let pass = marks >= 50 ? "Pass" : "Fail";

console.log(pass);

Output:

Fail