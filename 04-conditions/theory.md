
3. Conditions (Shartain)
If Statement
Ye basic conditional statement hai. Agar condition true hui to code block execute hoga. Syntax kuch is tarah hai ke if keyword ke baad parentheses mein condition likhi jati hai, phir curly braces mein code jo execute hona hai.
If-Else Statement
Agar if ki condition false ho to else ka code block execute hota hai. Ye do options provide karta hai, ek true condition ke liye aur dosra false ke liye.
Else-If Ladder
Jab multiple conditions check karni hon to else-if ka istemal hota hai. Pehle if check hoti hai, phir agar wo false ho to else-if check hoti hai, aur akhir mein agar sab false hon to else execute hota hai.

Switch Statement
Ye multiple conditions check karne ka aur tareeqa hai, especially jab ek variable ko different values ke saath compare karna ho. Har case ke liye alag code execute hota hai. Break statement zaroori hai warna agle cases bhi execute honge. Default case tab execute hota hai jab koi bhi case match na ho.


can you write me simple and easy javascript topic conditions problem and their solution give me all operator 2 best example for best practice
minimax-m2.5 ai model's icon
Merlin
just now
JavaScript Conditions (Conditional Statements) - Problems & Solutions
📚 Table of Contents
Basic Concepts
All Operators Overview
Practice Problems
Best Practice Examples
1. Basic Concepts
What are Conditional Statements?
Conditional statements allow you to execute code based on certain conditions (true/false).

Types of Conditional Statements in JavaScript:
if statement
if...else statement
if...else if...else statement
switch statement
ternary operator (?)
2. All Operators Overview
🔹 Comparison Operators



Operator
Description
Example
==
Equal to (loose)
5 == "5" → true
===
Equal to (strict)
5 === "5" → false
!=
Not equal (loose)
5 != "5" → false
!==
Not equal (strict)
5 !== "5" → true
>
Greater than
10 > 5 → true
<
Less than
10 < 5 → false
>=
Greater than or equal
10 >= 10 → true
<=
Less than or equal
5 <= 10 → true
🔹 Logical Operators



Operator
Description
Example
&&
AND (both must be true)
true && true → true
||
OR (at least one must be true)
true || false → true
!
NOT (inverts boolean)
!true → false
🔹 Ternary Operator
condition ? valueIfTrue : valueIfFalse



3. Practice Problems

Problem 1: Check if a number is even or odd
Problem: Write a program to check if a number is even or odd.

Solution:

// Using if...else
let number = 7;
if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}
// Output: Odd number
Problem 2: Find the largest of two numbers
Problem: Write a program to find the largest number between two numbers.

Solution:

// Method 1: Using if...else
let a = 25;
let b = 30;
if (a > b) {
    console.log("a is larger");
} else {
    console.log("b is larger");
}
// Output: b is larger
// Method 2: Using ternary operator
let result = a > b ? "a is larger" : "b is larger";
console.log(result);
// Output: b is larger
Problem 3: Check if a person can vote
Problem: Write a program to check if a person is eligible to vote (age >= 18).

Solution:

let age = 17;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}
// Output: Not eligible to vote
Problem 4: Grade calculation
Problem: Write a program to assign grades based on marks (A: 90+, B: 80-89, C: 70-79, D: 60-69, F: below 60).

Solution:

let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
// Output: Grade: B
Problem 5: Check if a string contains a specific letter
Problem: Write a program to check if the word "apple" contains the letter "p".

Solution:

let word = "apple";
let letter = "p";
// Using includes() method
if (word.includes(letter)) {
    console.log(`"${word}" contains "${letter}"`);
} else {
    console.log(`"${word}" does not contain "${letter}"`);
}
// Output: "apple" contains "p"
Problem 6: Leap year check
Problem: Write a program to check if a year is a leap year.

Solution:

let year = 2024;
// Leap year: divisible by 4, but not by 100 unless also by 400
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}

`Problem 7: Calculator using switch`
`Problem: Create a simple calculator using switch statement.`

let num1 = 10;
let num2 = 5;
let operator = "/";
switch (operator) {
    case "+":
        console.log(`Result: ${num1 + num2}`);
        break;
    case "-":
        console.log(`Result: ${num1 - num2}`);
        break;
    case "*":
        console.log(`Result: ${num1 * num2}`);
        break;
    case "/":
        if (num2 !== 0) {
            console.log(`Result: ${num1 / num2}`);
        } else {
            console.log("Cannot divide by zero");
        }
        break;
    default:
        console.log("Invalid operator");
}
// Output: Result: 2
`Problem 8: Multiple conditions - Login system`
`Problem: Write a program to check login credentials (username and password).`

Solution:

let username = "admin";
let password = "12345";
// Using logical AND (&&)
if (username === "admin" && password === "12345") {
    console.log("Login successful!");
} else if (username !== "admin" && password !== "12345") {
    console.log("Invalid username and password");
} else if (username !== "admin") {
    console.log("Invalid username");
} else {
    console.log("Invalid password");
}
// Output: Login successful!
4. Best Practice Examples
✅ Best Practice Example 1: Temperature Checker with Multiple Conditions
This example demonstrates clean code with:

Clear variable naming
Proper use of comparison and logical operators
Early return pattern
Input validation
// 🌡️ Temperature Activity Recommender
function getActivity(temperature) {
    // Input validation
    if (typeof temperature !== "number" || isNaN(temperature)) {
        return "Please enter a valid number";
    }
    // Using logical operators for multiple conditions
    if (temperature < 0) {
        return "❄️ Stay warm! It's freezing outside. Stay indoors or go skiing!";
    } 
    else if (temperature >= 0 && temperature < 15) {
        return "🧥 Wear a jacket! It's cold. Try indoor activities or hot chocolate!";
    } 
    else if (temperature >= 15 && temperature < 25) {
        return "🌤️ Perfect weather! Go for a walk or have a picnic!";
    } 
    else if (temperature >= 25 && temperature < 35) {
        return "☀️ It's warm! Great day for swimming or outdoor sports!";
    } 
    else {
        return "🔥 It's very hot! Stay hydrated and avoid direct sunlight!";
    }
}
// Testing the function
console.log(getActivity(-5));    // ❄️ Stay warm! It's freezing outside...
console.log(getActivity(10));    // 🧥 Wear a jacket! It's cold...
console.log(getActivity(20));    // 🌤️ Perfect weather! Go for a walk...
console.log(getActivity(30));    // ☀️ It's warm! Great day for swimming...
console.log(getActivity(40));    // 🔥 It's very hot! Stay hydrated...
console.log(getActivity("hot")); // Please enter a valid number
Why this is best practice:

✅ Input validation included
✅ Logical operators (&&) used correctly
✅ Clear and descriptive messages
✅ Easy to extend with more conditions
✅ Single responsibility function
✅ Best Practice Example 2: Shopping Discount Calculator
This example demonstrates:

Using ternary operators for simple conditions
Clean nested conditions
Logical operators for complex rules
Proper use of strict equality (===)
// 🛒 Shopping Discount Calculator
function calculateFinalPrice(cartTotal, customerType, isMember) {
    // Input validation
    if (typeof cartTotal !== "number" || cartTotal < 0) {
        return "Invalid cart total";
    }
    let discount = 0;
    let discountMessage = "";
    // Calculate discount based on multiple conditions
    // Using logical OR (||) and AND (&&) operators
    
    // VIP members get maximum discount
    if (customerType === "vip" && isMember === true) {
        discount = 0.25; // 25% off
        discountMessage = "🎉 VIP Member Discount (25%)";
    }
    // Regular members get 15% off for orders above $100
    else if (customerType === "regular" && isMember === true && cartTotal > 100) {
        discount = 0.15; // 15% off
        discountMessage = "💎 Regular Member Discount (15%)";
    }
    // Non-members get 5% off for orders above $200
    else if (!isMember && cartTotal > 200) {
        discount = 0.05; // 5% off
        discountMessage = "🏷️ Seasonal Discount (5%)";
    }
    // No discount for small orders
    else {
        discount = 0;
        discountMessage = "❌ No discount applied";
    }
    // Calculate final price using ternary operator
    const discountAmount = cartTotal * discount;
    const finalPrice = cartTotal - discountAmount;
    // Return formatted result
    return {
        originalPrice: cartTotal,
        discount: discountAmount,
        finalPrice: finalPrice,
        message: discountMessage,
        savings: discount > 0 ? `You save $${discountAmount.toFixed(2)}!` : ""
    };
}
// Test cases
console.log("=== Customer: VIP Member ===");
console.log(calculateFinalPrice(200, "vip", true));
// { originalPrice: 200, discount: 50, finalPrice: 150, message: "🎉 VIP Member Discount (25%)", savings: "You save $50.00!" }
console.log("\n=== Customer: Regular Member ===");
console.log(calculateFinalPrice(150, "regular", true));
// { originalPrice: 150, discount: 22.5, finalPrice: 127.5, message: "💎 Regular Member Discount (15%)", savings: "You save $22.50!" }
console.log("\n=== Customer: Non-Member ===");
console.log(calculateFinalPrice(250, "regular", false));
// { originalPrice: 250, discount: 12.5, finalPrice: 237.5, message: "🏷️ Seasonal Discount (5%)", savings: "You save $12.50!" }
console.log("\n=== Customer: No Discount ===");
console.log(calculateFinalPrice(50, "regular", false));
// { originalPrice: 50, discount: 0, finalPrice: 50, message: "❌ No discount applied", savings: "" }
Why this is best practice:

✅ Input validation at the beginning
✅ Uses logical operators (&&, ||) correctly
✅ Uses strict equality (===) instead of loose equality (==)
✅ Clean and readable code structure
✅ Returns an object with all relevant information
✅ Uses ternary operator for simple calculations
✅ Well-documented with comments
📌 Quick Reference Card
┌─────────────────────────────────────────────────────────┐
│                    QUICK REFERENCE                      │
├─────────────────────────────────────────────────────────┤
│  Comparison:  ===  !==  >  <  >=  <=                    │
│  Logical:     &&  ||  !                                 │
│  Ternary:     condition ? true : false                  │
├─────────────────────────────────────────────────────────┤
│  ✅ DO: Use === instead of ==                           │
│  ✅ DO: Validate inputs                                 │
│  ✅ DO: Use meaningful variable names                   │
│  ❌ DON'T: Use complex nested if-else                   │
│  ❌ DON'T: Forget break in switch                       │
└─────────────────────────────────────────────────────────┘
Happy Learning! 🚀 Feel free to ask if you need more examples or clarification!


You only have 29 queries left. Sign in to reset your limits







Merlin can make mistakes. Check important info. See Cookie Preferences.
Chat - Merlin AI