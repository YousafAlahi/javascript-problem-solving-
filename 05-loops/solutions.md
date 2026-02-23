

`Problem 1: Print Numbers 1 to 10`

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

`Problem 2: Sum of Numbers`

let sum = 0;

for (let i = 1; i <= 20; i++) {
    sum = sum + i;
}

console.log("Sum:", sum); // Output: Sum: 210


`Problem 3: Print Even Numbers`

let num = 2;

while (num <= 20) {
    console.log(num);
    num = num + 2;
}
Alternative solution:

let num = 2;

while (num <= 20) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}

`Problem 4: Array Loop ;;;;`

fruits = ["apple", "banana", "orange", "mango", "grape"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
Alternative with for...of loop:

let fruits = ["apple", "banana", "orange", "mango", "grape"];

for (let fruit of fruits) {
    console.log(fruit);
}

`Problem 5: Countdown Timer`
javascriptfor (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Blast off!");

