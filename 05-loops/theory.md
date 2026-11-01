🔁 1. for Loop (Most Common)

👉 Used when you know how many times to run loop.

✅ Example 1: Print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
🧠 Simple Explanation:
i = 1 → start
i <= 5 → condition
i++ → increase
✅ Example 2: Sum of numbers 1 to 5
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}

console.log("Sum is:", sum);
🔁 2. while Loop

👉 Used when you do not know exact iterations (depends on condition)

✅ Example 1: Print 1 to 5
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
✅ Example 2: Print even numbers 1 to 10
let i = 1;

while (i <= 10) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}
🔁 3. do...while Loop

👉 Runs at least one time (important concept)

✅ Example 1: Print 1 to 5
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

✅ Example 2: Run at least once
let i = 10;

do{
    console.log("Hello");
} while (i < 5);


👉 Output will still come 1 time

🔁 4. for...of Loop (Best for Arrays)

👉 Used to loop values

✅ Example 1: Print array values
let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
    console.log(fruit);
}

✅ Example 2: Sum of array
let numbers = [10, 20, 30];
let sum = 0;

for (let num of numbers) {
    sum += num;
}


console.log(sum);
🔁 5. for...in Loop (Objects)

👉 Used to loop keys

✅ Example 1: Object values
let user = {
    name: "Ali",
    age: 22,
    city: "Lahore"
};

for (let key in user) {
    console.log(key, user[key]);
}
✅ Example 2: Print only keys
for (let key in user) {
    console.log(key);
}
🎯 Bonus Best Practice Tips

✅ Use:

for → when count is known
while → condition-based loop
do...while → must run once
for...of → arrays (🔥 recommended)
for...in → objects
🚀 Practice Problems (Try Yourself)
🔹 Problem 1:

Print numbers from 10 to 1

🔹 Problem 2:

Print all odd numbers from 1 to 20

🔹 Problem 3:

Find sum of array [5, 10, 15]

🔹 Problem 4:

Print this object:

let car = {
    brand: "Toyota",
    model: "2020"
};