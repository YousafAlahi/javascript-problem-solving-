
`Problem 1: Simple Greeting`
Sawal: Aik function banao jo "Hello, World!" return kare.

function sayHello() {
  return "Hello, World!";
}

// Test
console.log(sayHello()); // Output: Hello, World!
Explanation: Ye sabse basic function hai. Koi parameter nahi hai, bas aik simple string return karta hai.

`Problem 2: Personal Greeting`
Sawal: Name input lo aur personalized greeting do.

function greetPerson(name) {
  return "Hello, " + name + "!";
}

// Ya phir template literal use karo (modern way)
const greetPerson = (name) => {
  return `Hello, ${name}!`;
}

// Test
console.log(greetPerson("Sarah")); // Output: Hello, Sarah!
Explanation: Parameter name ko string ke saath combine kiya. Template literal (${}) zyada clean aur readable hai.

`Problem 3: Add Two Numbers`
Sawal: Do numbers ka sum return karo.
javascriptfunction add(num1, num2) {
  return num1 + num2;
}

// Test
console.log(add(5, 3));      // Output: 8
console.log(add(100, 200));  // Output: 300
Explanation: Simple arithmetic operation. + operator use karke do numbers add kiye.

`Problem 4: Subtract Numbers`
Sawal: Pehle number mein se dusra number minus karo.
javascriptfunction subtract(num1, num2) {
  return num1 - num2;
}

// Test
console.log(subtract(10, 4));   // Output: 6
console.log(subtract(50, 25));  // Output: 25
Explanation: - operator use karke subtraction kiya.

`Problem 5: Multiply Numbers`
Sawal: Do numbers ka product nikalo.
javascriptfunction multiply(num1, num2) {
  return num1 * num2;
}

// Test
console.log(multiply(6, 7));  // Output: 42
console.log(multiply(5, 5));  // Output: 25
Explanation: * operator se multiplication hoti hai.

`Problem 6: Divide Numbers`
Sawal: Pehle number ko dusre se divide karo.
javascriptfunction divide(num1, num2) {
  return num1 / num2;
}

// Test
console.log(divide(20, 4));   // Output: 5
console.log(divide(100, 5));  // Output: 20
Explanation: / operator division ke liye use hota hai.

`Problem 7: Square a Number`
Sawal: Number ka square (khud se multiply) nikalo.
javascriptfunction square(num) {
  return num * num;
}

// Ya phir exponentiation operator
const square = (num) => num ** 2;

// Test
console.log(square(5));  // Output: 25
console.log(square(9));  // Output: 81
Explanation: Number ko khud se multiply kiya. ** operator bhi power ke liye use kar sakte hain.

`Problem 8: Check Even or Odd`
Sawal: Check karo number even hai ya odd.
function isEven(num) {
  return num % 2 === 0;
}

// Test
console.log(isEven(4));  // Output: true
console.log(isEven(7));  // Output: false
Explanation:

Modulus operator % remainder deta hai
Agar 2 se divide karne par remainder 0 hai, toh even hai
Otherwise odd hai


`Problem 9: Find Maximum of Two`
Sawal: Do numbers mein se bara wala return karo.
javascriptfunction max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Shorter way using ternary operator
const max = (num1, num2) => num1 > num2 ? num1 : num2;

// Test
console.log(max(10, 20));   // Output: 20
console.log(max(100, 50));  // Output: 100
Explanation: If-else se compare kiya. Ternary operator ? : ek line mein condition check karta hai.

`Problem 10: Find Minimum of Two`
Sawal: Do numbers mein se chota wala return karo.

function min(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}

// Shorter way
const min = (num1, num2) => num1 < num2 ? num1 : num2;

// Test
console.log(min(10, 20));  // Output: 10
console.log(min(5, 3));    // Output: 3
Explanation: Maximum ke opposite logic. Chota number return kiya.

`Problem 11: Calculate Age`
Sawal: Birth year se current age calculate karo (2026 assume karo).

function calculateAge(birthYear) {
  const currentYear = 2026;
  return currentYear - birthYear;
}

// Test
console.log(calculateAge(2000));  // Output: 26
console.log(calculateAge(1995));  // Output: 31
Explanation: Current year mein se birth year subtract kiya. Simple subtraction se age mil jati hai.

`Problem 12: Convert Celsius to Fahrenheit`
Sawal: Celsius ko Fahrenheit mein convert karo. Formula: (C × 9/5) + 32

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Test
console.log(celsiusToFahrenheit(0));    // Output: 32

console.log(celsiusToFahrenheit(100));  // Output: 212
Explanation:

Formula directly apply kiya
0°C = 32°F (freezing point)
100°C = 212°F (boiling point)


`Problem 13: Calculate Rectangle Area`
Sawal: Rectangle ka area nikalo (length × width).

function rectangleArea(length, width) {
  return length * width;
}

// Test
console.log(rectangleArea(5, 10));  // Output: 50
console.log(rectangleArea(7, 3));   // Output: 21
Explanation: Area = length × width. Simple multiplication.

`Problem 14: Calculate Circle Area`
Sawal: Circle ka area nikalo. Formula: π × r²

function circleArea(radius) {
  const pi = 3.14;
  return pi * radius * radius;
}

// Ya phir
const circleArea = (radius) => 3.14 * radius ** 2;

// Test
console.log(circleArea(5));   // Output: 78.5
console.log(circleArea(10));  // Output: 314
Explanation: Pi (3.14) ko radius ke square se multiply kiya.

`Problem 15: Check Positive, Negative, or Zero`
Sawal: Number positive, negative ya zero hai ye batao.

function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

// Test
console.log(checkNumber(10));   // Output: Positive
console.log(checkNumber(-5));   // Output: Negative
console.log(checkNumber(0));    // Output: Zero
Explanation:

Pehle check kiya > 0 hai toh Positive
Phir < 0 hai toh Negative
Baqi Zero hi bacha


`Problem 16: Full Name`
Sawal: First aur last name ko combine karke full name banao.

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

// Modern way
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// Test
console.log(getFullName("John", "Doe"));     // Output: John Doe
console.log(getFullName("Jane", "Smith"));   // Output: Jane Smith
Explanation: Dono names ko space ke saath join kiya.

`Problem 17: Count String Length`
Sawal: String mein kitne characters hain wo batao.

function stringLength(str) {
  return str.length;
}

// Test
console.log(stringLength("Hello"));       // Output: 5
console.log(stringLength("JavaScript"));  // Output: 10
Explanation: .length property string ki length deti hai. Ye built-in property hai.

`Problem 18: Convert to Uppercase`
Sawal: String ko uppercase mein convert karo.

function toUpper(str) {
  return str.toUpperCase();
}

// Test
console.log(toUpper("hello"));  // Output: HELLO
console.log(toUpper("world"));  // Output: WORLD
Explanation: .toUpperCase() method sab letters ko capital letter mein convert kar deta hai.

`Problem 19: Calculate Average`
Sawal: Teen numbers ka average nikalo.

function average(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

// Test
console.log(average(10, 20, 30));  // Output: 20
console.log(average(5, 15, 25));   // Output: 15
Explanation:

Sabhi numbers ko add kiya
Total ko 3 se divide kiya (kyunki 3 numbers hain)


`Problem 20: Check Passing Grade`
Sawal: Grade 50 ya usse zyada hai toh pass, warna fail.

function isPassing(grade) {
  return grade >= 50;
}

// Test
console.log(isPassing(75));  // Output: true
console.log(isPassing(45));  // Output: false
console.log(isPassing(50));  // Output: true
Explanation:

>= operator check karta hai "greater than or equal to"
50 ya usse zyada = true (pass)
50 se kam = false (fail)


Interview Tips (Roman Urdu mein):

Function ki purpose samjho: Har function kya karna chahti hai ye clearly samajh lo
Parameters identify karo: Kitne inputs chahiye aur kis type ke
Logic sochlo: Step by step socho kaise solve hoga
Return value: Kya return karna hai ye zaroor dhyan rakho
Test cases: Apne code ko different values se test karo

Common Mistakes se bacho:

return keyword bhoolna
Parameters ke names confuse hona
Operators galat use karna (= vs ===)
Curly braces {} miss karna

Yeh sab practice karte raho, interview mein confidence aayega! 🚀 Sonnet 4.5Claude is AI and can