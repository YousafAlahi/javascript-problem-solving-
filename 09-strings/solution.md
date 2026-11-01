

`JavaScript String Practice - 20 Problems with Solutions`
`Basic String Problems`
1. Get string length
let str = "Hello";
let length = str.length;
console.log(length); // Output: 5
2. Convert to uppercase
let str = "hello world";
let upper = str.toUpperCase();
console.log(upper); // Output: HELLO WORLD
3. Convert to lowercase
let str = "HELLO WORLD";
let lower = str.toLowerCase();
console.log(lower); // Output: hello world
4. Get character at specific position
let str = "JavaScript";
let char = str.charAt(0);
console.log(char); // Output: J
5. Check if string includes a word
let str = "I love JavaScript";
let hasWord = str.includes("love");
console.log(hasWord); // Output: true
6. Find index of a substring
let str = "Hello World";
let index = str.indexOf("World");
console.log(index); // Output: 6

7. Replace a word in string
let str = "I like Python";
let newStr = str.replace("Python", "JavaScript");
console.log(newStr); // Output: I like JavaScript

8. Split string into array

let str = "apple,banana,orange";
let fruits = str.split(",");
console.log(fruits); // Output: ['apple', 'banana', 'orange']

9. Trim whitespace from string
javascript
let str = "  Hello World  ";
let trimmed = str.trim();
console.log(trimmed); // Output: Hello World
10. Get substring

let str = "JavaScript";
let sub = str.substring(0, 4);
console.log(sub); // Output: Java


`Part ===>> 2;;;`
`Intermediate String Problems`

11. Reverse a string
let str = "Hello";
let reversed = str.split("").reverse().join("");
console.log(reversed); // Output: olleH

`12. Count vowels in a string `
let str = "Hello World";
let vowels = str.match(/[aeiou]/gi);
let count = vowels ? vowels.length : 0;
console.log(count); // Output: 3

`13. Check if string starts with specific text`

let str = "JavaScript is fun";
let starts = str.startsWith("Java");
console.log(starts); // Output: true

`14. Check if string ends with specific text`

let str = "file.txt";
let ends = str.endsWith(".txt");
console.log(ends); // Output: true
`15. Repeat a string`
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

`18. Check if string is empty`

let str = "";
let isEmpty = str.length === 0;
console.log(isEmpty); // Output: true

`19. Convert string to array of characters`
let str = "Hello";
let chars = str.split("");
console.log(chars); // Output: ['H', 'e', 'l', 'l', 'o']

`20. Count occurrences of a character`
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
