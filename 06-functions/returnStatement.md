

Basic Return Statement Problems
Problem 1: Return vs Console.log
Sawal: Difference samjho return aur console.log mein.
javascript// Without return
function addWithoutReturn(a, b) {
  console.log(a + b);
}

// With return
function addWithReturn(a, b) {
  return a + b;
}

// Test
let result1 = addWithoutReturn(5, 3);  // Prints: 8
console.log(result1);                   // Output: undefined

let result2 = addWithReturn(5, 3);     // Nothing prints
console.log(result2);                   // Output: 8
Explanation:

console.log sirf screen par print karta hai, value return nahi karta
return value ko wapas bhejta hai jo variable mein store ho sakti hai
Return ke baad function ka execution stop ho jata hai


Problem 2: Early Return
Sawal: Agar number negative hai toh turant return karo.
javascriptfunction processNumber(num) {
  if (num < 0) {
    return "Negative number not allowed";
  }
  
  // Ye code sirf positive numbers ke liye chalega
  return num * 2;
}

// Test
console.log(processNumber(-5));   // Output: Negative number not allowed
console.log(processNumber(10));   // Output: 20
Explanation: Return statement ke baad ka code execute nahi hota. Ye "early exit" kehlata hai.

Problem 3: Multiple Return Statements
Sawal: Grade ke basis par result return karo.
javascriptfunction getGrade(marks) {
  if (marks >= 90) {
    return "A+";
  }
  if (marks >= 80) {
    return "A";
  }
  if (marks >= 70) {
    return "B";
  }
  if (marks >= 60) {
    return "C";
  }
  if (marks >= 50) {
    return "D";
  }
  return "F";
}

// Test
console.log(getGrade(95));  // Output: A+
console.log(getGrade(75));  // Output: B
console.log(getGrade(45));  // Output: F
Explanation: Pehli condition jo true hogi, wahi return hoga aur function wahi khatam ho jayega.

Problem 4: Return Object
Sawal: Student ki details object mein return karo.
javascriptfunction createStudent(name, age, grade) {
  return {
    studentName: name,
    studentAge: age,
    studentGrade: grade,
    isAdult: age >= 18
  };
}

// Test
let student = createStudent("Ali", 20, "A");
console.log(student);
// Output: { studentName: 'Ali', studentAge: 20, studentGrade: 'A', isAdult: true }
console.log(student.studentName);  // Output: Ali
Explanation: Objects return kar sakte hain jo multiple values ko ek saath store karte hain.

Problem 5: Return Array
Sawal: First 5 even numbers array mein return karo.
javascriptfunction getFirstFiveEvens() {
  return [2, 4, 6, 8, 10];
}

// Ya dynamically
function getEvenNumbers(count) {
  let evens = [];
  for (let i = 1; i <= count; i++) {
    evens.push(i * 2);
  }
  return evens;
}

// Test
console.log(getFirstFiveEvens());    // Output: [2, 4, 6, 8, 10]
console.log(getEvenNumbers(5));      // Output: [2, 4, 6, 8, 10]
Explanation: Arrays bhi return kar sakte hain jo multiple values ko list mein rakhte hain.

Intermediate Problems
Problem 6: Return Boolean
Sawal: Check karo kya number prime hai.
javascriptfunction isPrime(num) {
  if (num < 2) {
    return false;
  }
  
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;  // Divisible mila toh not prime
    }
  }
  
  return true;  // Koi divisor nahi mila toh prime
}

// Test
console.log(isPrime(7));   // Output: true
console.log(isPrime(10));  // Output: false
console.log(isPrime(1));   // Output: false
Explanation: Boolean (true/false) return karna common validation mein use hota hai.

Problem 7: Return Calculated Values
Sawal: Rectangle ki saari properties calculate karke return karo.
javascriptfunction rectangleProperties(length, width) {
  return {
    area: length * width,
    perimeter: 2 * (length + width),
    diagonal: Math.sqrt(length**2 + width**2).toFixed(2),
    isSquare: length === width
  };
}

// Test
let rect = rectangleProperties(5, 10);
console.log(rect);
// Output: { area: 50, perimeter: 30, diagonal: '11.18', isSquare: false }
Explanation: Multiple calculations ek object mein return kiye organized way mein.

Problem 8: Conditional Return
Sawal: Discount calculate karo amount ke basis par.
javascriptfunction calculateDiscount(amount) {
  if (amount >= 10000) {
    return amount * 0.20;  // 20% discount
  } else if (amount >= 5000) {
    return amount * 0.10;  // 10% discount
  } else if (amount >= 2000) {
    return amount * 0.05;  // 5% discount
  } else {
    return 0;  // No discount
  }
}

// Test
console.log(calculateDiscount(15000));  // Output: 3000
console.log(calculateDiscount(6000));   // Output: 600
console.log(calculateDiscount(1000));   // Output: 0
Explanation: Different conditions par different values return hoti hain.

Problem 9: Return from Nested Function
Sawal: Function ke andar function se return.
javascriptfunction outerFunction(x) {
  function innerFunction(y) {
    return x + y;
  }
  
  return innerFunction(10);
}

// Test
console.log(outerFunction(5));  // Output: 15
Explanation: Inner function ka return outer function ke through wapas aata hai.

Problem 10: Return Default Value
Sawal: Agar parameter nahi diya toh default value return karo.
javascriptfunction greet(name) {
  if (!name) {
    return "Hello, Guest!";
  }
  return `Hello, ${name}!`;
}

// Modern way with default parameter
function greetModern(name = "Guest") {
  return `Hello, ${name}!`;
}

// Test
console.log(greet());           // Output: Hello, Guest!
console.log(greet("Ahmed"));    // Output: Hello, Ahmed!
console.log(greetModern());     // Output: Hello, Guest!
Explanation: Default values undefined ya missing parameters handle karne ke liye.

Problem 11: Return String Manipulation
Sawal: String ko reverse karke return karo.
javascriptfunction reverseString(str) {
  return str.split('').reverse().join('');
}

// Step by step
function reverseStringDetailed(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Test
console.log(reverseString("Hello"));  // Output: olleH
console.log(reverseStringDetailed("World"));  // Output: dlroW
Explanation:

split('') - string ko array mein convert karta hai
reverse() - array ko ulta kar deta hai
join('') - array ko wapas string mein convert karta hai


Problem 12: Return Filtered Data
Sawal: Array mein se even numbers filter karke return karo.
javascriptfunction getEvenNumbers(numbers) {
  let evens = [];
  for (let num of numbers) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}

// Modern way with filter
const getEvens = (numbers) => numbers.filter(num => num % 2 === 0);

// Test
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));  // Output: [2, 4, 6]
console.log(getEvens([1, 2, 3, 4, 5, 6]));        // Output: [2, 4, 6]
Explanation: Loop se iterate karke conditions ke basis par new array return kiya.

Advanced Problems
Problem 13: Return Function (Higher Order)
Sawal: Function return karo jo baad mein call ho sake.
javascriptfunction multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

// Test
let double = multiplier(2);
let triple = multiplier(3);

console.log(double(5));   // Output: 10
console.log(triple(5));   // Output: 15
Explanation: Functions bhi return ho sakte hain. Ye "closure" concept hai.

Problem 14: Return with Validation
Sawal: Input validate karo, error ho toh message return karo.
javascriptfunction divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Error: Both inputs must be numbers";
  }
  
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  
  return a / b;
}

// Test
console.log(divide(10, 2));      // Output: 5
console.log(divide(10, 0));      // Output: Error: Cannot divide by zero
console.log(divide("10", 2));    // Output: Error: Both inputs must be numbers
Explanation: Validation checks pehle karo, phir actual calculation return karo.

Problem 15: Return Max from Array
Sawal: Array ka sabse bara number return karo.
javascriptfunction findMax(numbers) {
  if (numbers.length === 0) {
    return "Array is empty";
  }
  
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// Using Math.max
const findMaxEasy = (numbers) => Math.max(...numbers);

// Test
console.log(findMax([3, 7, 2, 9, 1]));      // Output: 9
console.log(findMaxEasy([3, 7, 2, 9, 1]));  // Output: 9
Explanation: Loop se har element compare kiya aur maximum track kiya.

Problem 16: Return Sum of Array
Sawal: Array ke sab elements ka sum return karo.
javascriptfunction sumArray(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

// Using reduce
const sumArrayModern = (numbers) => numbers.reduce((sum, num) => sum + num, 0);

// Test
console.log(sumArray([1, 2, 3, 4, 5]));        // Output: 15
console.log(sumArrayModern([1, 2, 3, 4, 5]));  // Output: 15
Explanation: Accumulator variable sum mein sab values add karke return kiya.

Problem 17: Return Factorial
Sawal: Number ka factorial calculate karke return karo.
javascriptfunction factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Recursive way
function factorialRecursive(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

// Test
console.log(factorial(5));           // Output: 120
console.log(factorialRecursive(5));  // Output: 120
Explanation: 5! = 5 × 4 × 3 × 2 × 1 = 120

Problem 18: Return Vowel Count
Sawal: String mein kitne vowels hain count karke return karo.
javascriptfunction countVowels(str) {
  let count = 0;
  let vowels = 'aeiouAEIOU';
  
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Test
console.log(countVowels("Hello World"));  // Output: 3
console.log(countVowels("JavaScript"));   // Output: 3
Explanation: Har character check kiya ke vowel hai ya nahi, count increase kiya.

Problem 19: Return Unique Values
Sawal: Array se duplicate values hata kar unique values return karo.
javascriptfunction getUniqueValues(arr) {
  let unique = [];
  for (let item of arr) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }
  return unique;
}

// Using Set (modern way)
const getUnique = (arr) => [...new Set(arr)];

// Test
console.log(getUniqueValues([1, 2, 2, 3, 4, 4, 5]));  // Output: [1, 2, 3, 4, 5]
console.log(getUnique([1, 2, 2, 3, 4, 4, 5]));        // Output: [1, 2, 3, 4, 5]
Explanation: Set automatically duplicates remove kar deta hai.

Problem 20: Return Palindrome Check
Sawal: Check karo string palindrome hai ya nahi.
javascriptfunction isPalindrome(str) {
  // Remove spaces and convert to lowercase
  let cleaned = str.toLowerCase().replace(/\s/g, '');
  let reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

// Test
console.log(isPalindrome("madam"));      // Output: true
console.log(isPalindrome("hello"));      // Output: false
console.log(isPalindrome("A man a plan a canal Panama"));  // Output: true (ignoring spaces)
Explanation: String ko reverse karke original se compare kiya.

Problem 21: Return FizzBuzz
Sawal: 1 se n tak FizzBuzz sequence return karo.
javascriptfunction fizzBuzz(n) {
  let result = [];
  
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  
  return result;
}

// Test
console.log(fizzBuzz(15));
// Output: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
Explanation:

3 se divisible = "Fizz"
5 se divisible = "Buzz"
Dono se = "FizzBuzz"


Problem 22: Return Shopping Cart Total
Sawal: Shopping cart items ka total price calculate karo.
javascriptfunction calculateTotal(cart) {
  let total = 0;
  
  for (let item of cart) {
    total += item.price * item.quantity;
  }
  
  return {
    subtotal: total,
    tax: total * 0.1,
    grandTotal: total * 1.1
  };
}

// Test
let cart = [
  { name: "Shirt", price: 1000, quantity: 2 },
  { name: "Pants", price: 1500, quantity: 1 },
  { name: "Shoes", price: 2000, quantity: 1 }
];

console.log(calculateTotal(cart));
// Output: { subtotal: 5500, tax: 550, grandTotal: 6050 }
Explanation: Har item ka price × quantity karke total nikala, phir tax add kiya.

Problem 23: Return Fibonacci Sequence
Sawal: First n Fibonacci numbers return karo.
javascriptfunction fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  
  let fib = [0, 1];
  
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  
  return fib;
}

// Test
console.log(fibonacci(10));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
Explanation: Har number pichle 2 numbers ka sum hota hai.

Problem 24: Return Longest Word
Sawal: Sentence mein sabse lamba word return karo.
javascriptfunction findLongestWord(sentence) {
  let words = sentence.split(' ');
  let longest = words[0];
  
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  
  return longest;
}

// Test
console.log(findLongestWord("The quick brown fox jumps"));  // Output: quick (or brown/jumps - sab 5 letters)
console.log(findLongestWord("JavaScript is amazing"));      // Output: JavaScript
Explanation: Har word ki length compare ki aur longest track kiya.

Problem 25: Return Temperature Converter
Sawal: Temperature convert karo aur dono values return karo.
javascriptfunction convertTemperature(value, unit) {
  if (unit === 'C') {
    let fahrenheit = (value * 9/5) + 32;
    return {
      celsius: value,
      fahrenheit: fahrenheit,
      kelvin: value + 273.15
    };
  } else if (unit === 'F') {
    let celsius = (value - 32) * 5/9;
    return {
      celsius: celsius,
      fahrenheit: value,
      kelvin: celsius + 273.15
    };
  } else {
    return "Invalid unit. Use 'C' or 'F'";
  }
}

// Test
console.log(convertTemperature(100, 'C'));
// Output: { celsius: 100, fahrenheit: 212, kelvin: 373.15 }

console.log(convertTemperature(32, 'F'));
// Output: { celsius: 0, fahrenheit: 32, kelvin: 273.15 }
Explanation: Input unit ke basis par conversions karke object return kiya.

Important Return Concepts
1. Return vs No Return
javascript// No return - undefined milega
function noReturn() {
  let x = 5 + 3;
}

// With return
function withReturn() {
  return 5 + 3;
}

console.log(noReturn());    // undefined
console.log(withReturn());  // 8
2. Implicit Return (Arrow Functions)
javascript// Traditional
function add(a, b) {
  return a + b;
}

// Arrow with explicit return
const addArrow = (a, b) => {
  return a + b;
};

// Arrow with implicit return (one liner)
const addShort = (a, b) => a + b;

console.log(addShort(5, 3));  // 8
3. Return Stops Execution
javascriptfunction example() {
  console.log("This will print");
  return "Done";
  console.log("This will NEVER print");
}

example();  // Only "This will print" shows

Interview Tips - Return Statement

Return zaruri hai jab aapko value chahiye function se bahar
Return ke baad kuch nahi chalta - execution stop ho jata hai
Undefined return hota hai agar return statement nahi hai
Multiple returns ho sakti hain different conditions mein
Objects aur Arrays return kar sakte ho multiple values ke liye

Common Mistakes:

Return keyword bhool jana
Return ke baad code likhna (jo kabhi execute nahi hoga)
Console.log aur return ko confuse karna
Arrow functions mein curly braces ke saath implicit return use karna

Practice karte raho, mastery aayegi! 💪🚀 Sonnet 4.5