`JavaScript Arrays - 10 Beginner Practice Problems`

// Array ==> Array ordered list hoti hain jisme multiple values ak sath store kar sakty hain .

    let number = [10, 20, 30];
    console.log(number);

// Array Element ko Access Karna ;;;

let firstElement = number[0];
console.log(firstElement);
// Explanation ==> 
// Array name ky sath square bracket mein Element ka index nmbr pass kr dety hain ;;;

// Array Element ko Modify/Change karna ==> Kisi bhi Element ky value ko Change kr sakty hain ..
let ChangeValue = number[1] = 40;
// Explanation ==> 
// Array name ky sath square bracket mein Element ka index nmbr pass kr ky equal sign laga kr value lakh lety hain ;;;

console.log(ChangeValue);
 
//Array Element ko Delete karna ;;; ==> As ko 2 method se kar sakty hain ... 
//1st ==> Delete keyword ka use kar ky ,, Delete keyword ky sath ak problem ha ky Element to remove ho jata ha lakin empty space reh jaty ha
delete number[1] ;
console.log(number); 
// Explanation ==> 
// delete kewword laga kr array name ky sath square bracket mein Element ka index nmbr pass kr dety hain ;;;

// 2nd ==> splice() Method ka use kr ky 

const removeValue = number.splice(2, 1);
console.log(removeValue);
 // Explanation ==> splice method mein 2 parameters pass karty hain 1st Element index nmbr (kon sy element ko remove kran ha ya ==>/ multiple Element remove kt ly  kaha se start krna ha ==/  ), 2nd element quantity 

console.log(number);

`Problem 1: Create and Access Array Elements`
Question: Create an array of 5 fruits and print the first and last fruit.

const fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];
console.log(fruits[0]); 
console.log(fruits[4]); 
// or use length property
console.log(fruits[fruits.length - 1]); 

`Problem 2: Add Elements to Array`
Question: Create an empty array and add 3 numbers to it using push().
Answer:
const numbers = [];
numbers.push(10);
numbers.push(20);
numbers.push(30);
console.log(numbers); // [10, 20, 30]

Problem 3: Remove Last Element
Question: Create an array of 4 colors and remove the last color.
Answer:

const colors = ['red', 'blue', 'green', 'yellow'];
colors.pop();
console.log(colors); // ['red', 'blue', 'green']

Problem 4: Find Array Length
Question: Create an array of any items and display how many items it contains.
Answer:

const items = ['pen', 'notebook', 'eraser', 'ruler'];
console.log(items.length); // 4

Problem 5: Loop Through Array
Question: Create an array of 5 numbers and print each number using a for loop.
Answer:

const nums = [5, 10, 15, 20, 25];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
// Output: 5, 10, 15, 20, 25 (each on new line)

Problem 6: Find if Element Exists
Question: Check if 'cat' exists in an array of animals.
Answer:

const animals = ['dog', 'cat', 'rabbit', 'bird'];
const hasCat = animals.includes('cat');
console.log(hasCat); // true

const hasTiger = animals.includes('tiger');
console.log(hasTiger); // false

Problem 7: Join Array Elements
Question: Create an array of words and join them into a single sentence.
Answer:

const words = ['Hello', 'I', 'am', 'learning', 'JavaScript'];
const sentence = words.join(' ');
console.log(sentence); // "Hello I am learning JavaScript"

Problem 8: Reverse an Array
Question: Create an array of numbers from 1 to 5 and reverse it.
Answer:

const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1]

Problem 9: Sum All Numbers in Array
Question: Calculate the sum of all numbers in an array.
Answer:

const nums = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
console.log(sum); // 100

// Alternative using reduce:
const total = nums.reduce((acc, num) => acc + num, 0);
console.log(total); // 100

Problem 10: Find Largest Number
Question: Find the largest number in an array.
Answer:

const numbers = [45, 78, 23, 92, 56];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log(largest); // 92

// Alternative using Math.max:
const max = Math.max(...numbers);
console.log(max); // 92

Best Practices Tips:

Use const for arrays that won't be reassigned
Use descriptive variable names
Remember arrays are zero-indexed (start at 0)
Always check array length before accessing elements
Use built-in methods like push(), pop(), includes() when possible


        <!-- 2nd Part of JavaScript Arrays  -->


`10 JavaScript Array Problems with map, forEach, filter, and reduce`
`Problem 21: Double All Numbers (map)`
`Question: Create a new array with all numbers doubled.`
`Answer:`

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] (original unchanged)

`Problem 22: Print Each Element (forEach)`
`Question: Print each fruit with its index number.`
`Answer:`

javascriptconst fruits = ['apple', 'banana', 'orange', 'mango'];
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
// Output:
// 0: apple
// 1: banana
// 2: orange
// 3: mango

`Problem 23: Filter Even Numbers (filter)`
`Question: Get only even numbers from an array.`

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

`Problem 24: Sum All Numbers (reduce)`
`Question: Calculate the total sum of all numbers in an array.`

const numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 150

// Step-by-step breakdown:
// total = 0, num = 10 → return 10
// total = 10, num = 20 → return 30
// total = 30, num = 30 → return 60
// total = 60, num = 40 → return 100
// total = 100, num = 50 → return 150

`Problem 25: Convert to Uppercase (map)`
`Question: Convert all strings in an array to uppercase.`

const words = ['hello', 'world', 'javascript'];
const uppercase = words.map(word => word.toUpperCase());
console.log(uppercase); // ['HELLO', 'WORLD', 'JAVASCRIPT']

`Problem 26: Filter Long Words (filter)`
`Question: Get only words that have more than 5 letters.`

const words = ['cat', 'elephant', 'dog', 'butterfly', 'ant'];
const longWords = words.filter(word => word.length > 5);
console.log(longWords); // ['elephant', 'butterfly']

`Problem 27: Calculate Product (reduce)`
`Question: Multiply all numbers in an array together.`

const numbers = [2, 3, 4, 5];
const product = numbers.reduce((total, num) => total * num, 1);
console.log(product); // 120 (2 * 3 * 4 * 5)

`Problem 28: Add Tax to Prices (map)`
`Question: Add 10% tax to each price in an array.`

const prices = [100, 200, 300, 400];
const pricesWithTax = prices.map(price => price * 1.10);
console.log(pricesWithTax); // [110, 220, 330, 440]

// With rounding to 2 decimals:
const roundedPrices = prices.map(price => Math.round(price * 1.10 * 100) / 100);
console.log(roundedPrices); // [110, 220, 330, 440]

`Problem 29: Count Adults (filter + length)`
`Question: Count how many people are 18 or older.`

const ages = [12, 18, 25, 16, 30, 14, 22];
const adults = ages.filter(age => age >= 18);
console.log(adults.length); // 4
console.log(adults); // [18, 25, 30, 22]

Problem 30: Find Average (reduce)
Question: Calculate the average of all numbers in an array.
Answer:
javascriptconst numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((total, num) => total + num, 0);
const average = sum / numbers.length;
console.log(average); // 30

// One-liner version:
const avg = numbers.reduce((total, num) => total + num, 0) / numbers.length;
console.log(avg); // 30

Bonus: Combining Methods
Problem 31: Filter then Map
Question: Get even numbers and square them.
Answer:
javascriptconst numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
    .filter(num => num % 2 === 0)  // [2, 4, 6]
    .map(num => num * num);         // [4, 16, 36]
console.log(result); // [4, 16, 36]

Problem 32: Map then Reduce
Question: Calculate total price after doubling each item.
Answer:
javascriptconst prices = [10, 20, 30];
const totalDoubled = prices
    .map(price => price * 2)       // [20, 40, 60]
    .reduce((sum, price) => sum + price, 0); // 120
console.log(totalDoubled); // 120

Quick Reference Guide:
map() - Transform each element

Returns NEW array with same length
Doesn't modify original array
Use when: You need to transform/modify each element

forEach() - Loop through elements

Returns undefined (nothing)
Just executes code for each element
Use when: You want to do something with each element (like console.log)

filter() - Select specific elements

Returns NEW array with filtered elements
Can be shorter than original
Use when: You need elements that meet a condition

reduce() - Combine elements into single value

Returns a single value
Can return number, string, object, or even array
Use when: You need to calculate a total, find min/max, or combine values


Common Mistakes to Avoid:

forEach doesn't return a value:

javascript// ❌ Wrong
const doubled = numbers.forEach(num => num * 2); // undefined

// ✅ Correct
const doubled = numbers.map(num => num * 2);

Don't forget initial value in reduce:

javascript// ❌ Can cause issues
const sum = numbers.reduce((total, num) => total + num);

// ✅ Better - always provide initial value
const sum = numbers.reduce((total, num) => total + num, 0);

Remember arrow function syntax:

javascript// Both are correct:
numbers.map(num => num * 2)           // implicit return
numbers.map(num => { return num * 2 }) // explicit return