
string into java script  give simple and easy for bennigner best practice me 20  problem qusestion with answer

Feb 12
JavaScript String Practice - 20 Problems with Solutions
Basic String Problems
1. Get string length
javascript
let str = "Hello";
let length = str.length;
console.log(length); // Output: 5
2. Convert to uppercase
javascript
let str = "hello world";
let upper = str.toUpperCase();
console.log(upper); // Output: HELLO WORLD
3. Convert to lowercase
javascript
let str = "HELLO WORLD";
let lower = str.toLowerCase();
console.log(lower); // Output: hello world
4. Get character at specific position
javascript
let str = "JavaScript";
let char = str.charAt(0);
console.log(char); // Output: J
5. Check if string includes a word
javascript
let str = "I love JavaScript";
let hasWord = str.includes("love");
console.log(hasWord); // Output: true
6. Find index of a substring
javascript
let str = "Hello World";
let index = str.indexOf("World");
console.log(index); // Output: 6
7. Replace a word in string
javascript
let str = "I like Python";
let newStr = str.replace("Python", "JavaScript");
console.log(newStr); // Output: I like JavaScript
8. Split string into array
javascript
let str = "apple,banana,orange";
let fruits = str.split(",");
console.log(fruits); // Output: ['apple', 'banana', 'orange']
9. Trim whitespace from string
javascript
let str = "  Hello World  ";
let trimmed = str.trim();
console.log(trimmed); // Output: Hello World
10. Get substring
javascript
let str = "JavaScript";
let sub = str.substring(0, 4);
console.log(sub); // Output: Java
Intermediate String Problems
11. Reverse a string
javascript
let str = "Hello";
let reversed = str.split("").reverse().join("");
console.log(reversed); // Output: olleH
12. Count vowels in a string
javascript
let str = "Hello World";
let vowels = str.match(/[aeiou]/gi);
let count = vowels ? vowels.length : 0;
console.log(count); // Output: 3
13. Check if string starts with specific text
javascript
let str = "JavaScript is fun";
let starts = str.startsWith("Java");
console.log(starts); // Output: true
14. Check if string ends with specific text
javascript
let str = "file.txt";
let ends = str.endsWith(".txt");
console.log(ends); // Output: true
15. Repeat a string
javascript
let str = "Ha";
let repeated = str.repeat(3);
console.log(repeated); // Output: HaHaHa
16. Concatenate strings
javascript
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
// OR using template literals
let fullName2 = `${firstName} ${lastName}`;
console.log(fullName); // Output: John Doe
17. Remove spaces from string
javascript
let str = "H e l l o";
let noSpaces = str.replace(/\s/g, "");
console.log(noSpaces); // Output: Hello
18. Check if string is empty
javascript
let str = "";
let isEmpty = str.length === 0;
console.log(isEmpty); // Output: true
19. Convert string to array of characters
javascript
let str = "Hello";
let chars = str.split("");
console.log(chars); // Output: ['H', 'e', 'l', 'l', 'o']
20. Count occurrences of a character
javascript
let str = "Mississippi";
let char = "s";
let count = str.split(char).length - 1;
console.log(count); // Output: 4
Best Practices for Beginners
Use const for strings that don't change: const name = "John";
Use template literals for concatenation: `Hello ${name}`
Remember strings are immutable: Methods return new strings
Check for empty strings before processing: if (str.length > 0)
Use appropriate methods: Don't use indexOf() when includes() is clearer
Practice these problems to master JavaScript strings!






Claude is AI and can make mistakes. Please double-check responses.
