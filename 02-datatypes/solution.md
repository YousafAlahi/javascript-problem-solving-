`Problem 1: Create Variables with Different Types`
`Solution:` 

// Creating variables with different data types
let myAge = 25;                    // Number
let favoriteFood = "Pizza";        // String
let likesPizza = true;             // Boolean
let undefinedVar;                  // Undefined
let nullVar = null;                // Null

// Checking types using typeof
console.log(typeof myAge);         // "number"
console.log(typeof favoriteFood);  // "string"
console.log(typeof likesPizza);    // "boolean"
console.log(typeof undefinedVar);  // "undefined"
console.log(typeof nullVar);       // "object" (quirk in JavaScript!)

`Problem 2: Student Information Object`
`Solution:`

let student = {
    name: "Sarah Johnson",
    grade: 85,
    isPassing: true,
    favoriteSubjects: ["Math", "Science", "History"]
};

// Accessing object properties
console.log(student.name);                    // "Sarah Johnson"
console.log(student.favoriteSubjects[0]);     // "Math"
console.log(typeof student);                   // "object"

`Problem 3: Array of Numbers`
`Solution: `

let scores = [85, 92, 78, 95, 88];

// Accessing elements
let firstScore = scores[0];           // 85 (arrays start at index 0)
let lastScore = scores[scores.length - 1];  // 88

// Checking data types
console.log(typeof scores);           // "object" (arrays are objects!)
console.log(typeof scores[0]);        // "number"

// Display results
console.log("First Score:", firstScore);
console.log("Last Score:", lastScore);



`Problem 4: String Operations`
`Solution:`

let firstName = "John";
let lastName = "Doe";

// Method 1: Using + operator
let fullName = firstName + " " + lastName;

// Method 2: Using template literals (modern approach)
let fullName2 = `${firstName} ${lastName}`;

console.log(fullName);           // "John Doe"
console.log(typeof fullName);    // "string"

`Problem 5: Mix and Match `
`Solution:`

let a = 100;          
let b = "100";        
let c = true;         
let d = a + a;        
let e = b + b;        

`// Data types`
console.log(typeof a);  // "number"
console.log(typeof b);  // "string"
console.log(typeof c);  // "boolean"
console.log(typeof d);  // "number"
console.log(typeof e);  // "string"

`// Values`
console.log(d);  // 200 (numeric addition)
console.log(e);  // "100100" (string concatenation)

`Interview Deep Dive ==>> :`
javascript// What happens with mixed types?
console.log(100 + "100");     // "100100" (number → string)
console.log("100" - 100);     // 0 (string → number)
console.log(true + 1);        // 2 (true = 1, false = 0)
console.log("5" * "2");       // 10 (both strings → numbers)

`Type Checking Best Practices`

`javascript`  
    typeof value              // For primitives
    Array.isArray(value)      // For arrays
    value === null            // For null
    value instanceof Object   // For objects