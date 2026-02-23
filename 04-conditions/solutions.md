
`Problem 1: Age Checker`
javascriptlet age = 20; // assign a number here

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote yet");
}


`Problem 2: Grade Calculator`
javascriptlet score = 85; // assign a number here

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade F");
}

`Problem 3: Even or Odd`
javascriptlet number = 7; // assign a number here

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

`Problem 4: Traffic Light`
javascript;;;;;

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

`Problem 5: Temperature Advisor`
javascriptlet temperature = 30; // assign a number here

let advice = temperature > 25 ? "Wear a t-shirt" : "Wear a jacket";
console.log(advice);

Testing Examples:
Problem 1: Try with age = 15 → "You cannot vote yet"
Problem 2: Try with score = 92 → "Grade A", score = 65 → "Grade F"
Problem 3: Try with number = 10 → "Even", number = 13 → "Odd"
Problem 4: Try with lightColor = "purple" → "Invalid color"
Problem 5: Try with temperature = 20 → "Wear a jacket"
All solutions use only basic JavaScript operators and control structures without any built-in methods! Sonnet 4.5