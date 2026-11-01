
`Problem 1: Check if a number is even or odd`
`Problem: Write a program to check if a number is even or odd.`

// Using if...else
let number = 7;
if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

`Problem 2: Find the largest of two numbers`
`Problem: Write a program to find the largest number between two numbers.`

`// Method 1: Using if...else`

// let num1 = 100;
// let num2 = 12;

// if(num1 > num2){
//     console.log("num1 is largest number between two number")
// }else{
//     console.log("num2 is largest number between two number") 
// };

`// Method 2: Using ternary operator`

// let num1 = 10;
// let num2 = 12;

// let result = num1 > num2 ? "num1 is largest number" : "num2 is largest number" ;
// console.log(result);


`Problem 3: Find the largest of three numbers`
`Problem: Write a program to find the largest number between three numbers.`

    // let num1 = 10 ;
    // let num2 = 200 ;
    // let num3 = 30 ;

    // if(num1 > num2 && num1 > num3){
    //     console.log('num1 is largest number')
    // }else if(num2 > num1 && num2 > num3){
    //     console.log(`num2 is largest number`)
    // }else{
    //     console.log(`num3 is largest number`)
    // };



`Problem 4: Check if a person can vote`
`Problem: Write a program to check if a person is eligible to vote (age >= 18).`

Solution:

let age = 17;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

`Problem 5: Grade calculation`
`Problem: Write a program to assign grades based on marks (A: 90+, B: 80-89, C: 70-79, D: 60-69, F: below 60).`

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

`Problem 6: Check if a string contains a specific letter`
`Problem: Write a program to check if the word "apple" contains the letter "p".`

let word = "apple";
let letter = "p";
// Using includes() method
if (word.includes(letter)) {
    console.log(`"${word}" contains "${letter}"`);
} else {
    console.log(`"${word}" does not contain "${letter}"`);
}

`Problem 7: Leap year check`
`Problem: Write a program to check if a year is a leap year.`


let year = 2024;
// Leap year: divisible by 4, but not by 100 unless also by 400
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}


`Problem 8: Calculator using switch`
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

`Problem 8: Multiple conditions - Login system`
`Problem: Write a program to check login credentials (username and password).`

Solution:

let username = "admin";
let password = "12345";
`// Using logical AND (&&)`
if (username === "admin" && password === "12345") {
    console.log("Login successful!");
} else if (username !== "admin" && password !== "12345") {
    console.log("Invalid username and password");
} else if (username !== "admin") {
    console.log("Invalid username");
} else {
    console.log("Invalid password");
};


`Problem 9: Traffic Light`

let lightColor = "red"; // assign "red", "yellow", "green", or something else

switch (lightColor) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
}

`Problem 10: Temperature Advisor`

let temperature = 30; // assign a number here

let advice = temperature > 25 ? "Wear a t-shirt" : "Wear a jacket";
console.log(advice);
