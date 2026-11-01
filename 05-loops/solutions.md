

`=============================  🔁 1. for Loop (Most Common)  =====================================`
`// for Loop : used when you know how many times to run loop ;;;`


`✅ Example 1: Print numbers 1 to 5`
` Solution 👉 ==>> ;; `
for(let i = 1; i <= 5; i++){
    console.log(i);
};
`🧠 Simple Explanation:`
i = 1 → `start`
i <= 5 → `condition`
i++ → `increase`

`✅ Example 2: Print numbers 1 to 5 ;`
` Solution 👉 ==>> ;; `
let sum = 0 ;
for(let i = 1; i <= 5; i++){
      sum = sum + i ;
      `//console.log(sum)`
}
console.log("Sum is:", sum);


`=============================  🔁 2. While Loop  =====================================`
`👉 Used when you do not know exact iterations (depends on condition)`


`✅ Example 1: Print numbers 1 to 5 ;`
` Solution 👉 ==>> ;; `
`// ====>>>  Method 1;;;`
    let i = 1; 

    while(i <= 5){
        console.log(i)
        i++;
    };

`// ====>>>  Method 2;;;`
let i = 1; 

    while(i <= 5){

        i++;
    }
        console.log(i);

`✅ Example 2: Print even numbers 1 to 10`
` Solution 👉 ==>> ;; `
let i = 1 ;
while(i <= 10){
    if(i % 2 === 0){
        console.log(i)
    };
    i++
}

`=============================  🔁 3. do - while Loop  =====================================================`
`// Runs at least one time ;;`


`✅ Example 1: Print numbers 1 to 5 ;`

` Solution 👉 ==>> ;; `

    let i = 1 ;
    do{
        console.log(i)
        i++
    }while(i <= 5);

`✅ Example 2: Run at least once`
` Solution 👉 ==>> ;; `

let i = 10 ;

do{
    console.log(i)
    i++;
}while(i < 5)

`===========================  🔁 4. for...of Loop (Best for Arrays   ============================================`
`👉 Used to loop values`

`✅ Example 1: Print array values`

let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
    console.log(fruit);
}

`✅ Example 2: Sum of array`

let numbers = [10, 20, 30];
let sum = 0;

for (let num of numbers) {
    sum += num;
}
console.log(sum);

`===========================  🔁 5. for...in Loop (Objects)  ============================================`
`👉 Used to loop keys`

`✅ Example 1: Object values`

const user = {
    name : "Yousaf",
    age : 30 ,
    city : "Multan",
    email: "uc123@gmail.com"
}

for(let key in user){
    // console.log(key);
    console.log(key, user[key])
}



`===========================  🔁 EEEEnnnndddd Loops  ============================================`

`Problem 1: Print Numbers 1 to 10`
` Solution 👉 ==>> ;; `
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

`Problem 2: Sum of Numbers`
` Solution 👉 ==>> ;; `
let sum = 0;

for (let i = 1; i <= 20; i++) {
    sum = sum + i;
}

console.log("Sum:", sum); // Output: Sum: 210


`Problem 3: Print Even Numbers`
` Solution 👉 ==>> ;; `
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
` Solution 👉 ==>> ;; `
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
` Solution 👉 ==>> ;; `

for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Blast off!");

