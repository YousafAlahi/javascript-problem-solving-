
`Problem 1: Create a Simple Object`
`Question: Create an object called person with properties: name, age, and city.`

// const Person = {
//     name : "Youaf",
//     age : 27,
//     city : "Lahore"
// };


// console.log(Person);
// console.log(Person.age);

`Problem 2: Access Object Properties`
`Question: Given an object car, access its properties using both dot and bracket notation.`

    // const car = {
    //     brand : "Toyota",
    //     model : "Camry",
    //     year : 2020
    // }

    // Dot notation
    // console.log(car.year);
    
    // Bracket notation
    // console.log(car["model"]);

    


`Problem 3: Add New Properties`
`Question: Add a new property color to an existing object.`
// const bike = {
//     name : "Honda",
//     model : "CD"
// };

// bike.color = "Red";
// bike["price"] = 180000;

// console.log(bike);


`Problem 4: Object with Methods`
`Question: Create an object with a method that returns a greeting.`

// const user = {
//     name : "yousaf",
//     age : 25,
//     city : "Lahore",
//     greeting : function(){
//         return "Hello , my name is" +  this.name  + "and my age is" + this.age
//     }
// };


// console.log(user);
// console.log(user.greeting());


`Problem 5: Update Object Properties`
`Question: Change the value of an existing property in an object.`


// const user = {
//     name : "Ali",
//     age : 22,
//     grade : "B"
// };

// console.log(user);
 
// user.grade = "A+";

// console.log(user);

// user.age = "33";

// console.log(user);


`Problem 6: Delete Object Properties`
`Question: Remove a property from an object.`

// const user = {
//     name : "Ali",
//     age : 22,
//     grade : "B"
// };

// console.log(user);
 
// delete user.grade ;

// console.log(user);

// delete user.age;

// console.log(user);



`Problem 10: Object with Array Property`
`Question: Create an object containing an array and access array elements. ;;;; `

// const person = {
//     name : "Jam",
//     age : 23,
//     subject : ["Math","Eng","Science"],
//     city : "Lahore"
// };


// console.log(person.name);

// Method ==> 1 ;;;
// console.log(person.subject);
// console.log(person.subject[0]);

// Method ==> 2 ;;;
// person.subject.forEach((item) => console.log(item))


`Problem 11: Object.keys()`
`Question: Get all the keys from an object as an array.`


// const smartPhone = {
//     brand : "iPhone",
//     model : "14 Pro",
//     storage : "256GB",
//     color : "Black"
// }

// const keys = Object.keys(smartPhone);
// console.log(keys);
console.log(keys.length);

`Problem 12: Object.values()`
`Question: Get all the values from an object as an array.`

// const scores = {
//   math: 95,
//   science: 88,
//   english: 92,
//   history: 85
// };

// const values = Object.values(scores);
// console.log(values); 

// Calculate total
// const total = values.reduce((sum, score) => sum + score, 0);
// console.log(total);


`Problem 13: Object.entries()`
`Question: Convert an object into an array of key-value pairs.`

// const fruit = {
//   name: "Apple",
//   color: "Red",
//   price: 2.5
// };

// const entries = Object.entries(fruit);
// console.log(entries);

// Loop through entries
// entries.forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });



`Problem 14: Copy an Object (Shallow Copy)`
`Question: Create a copy of an object without modifying the original.`

// const Person = {
//     name : "Yousaf",
//     age : 25,
//     city : " Lahore"
// };


 // const copy1 = Object.assign({}, Person);
 // console.log(copy1);

// const copy2 = {...Person};

// copy2.age = 36;

// console.log(Person);
// console.log(copy2.age);
// console.log(copy2);


`Problem 15: Merge Multiple Objects`
`Question: Combine two or more objects into one.`

// const personalInfo = {
//     name : "Yousaf",
//     age : 25,
//     city : "Lahore"
// };

// const contactInfo = {
//     email : "yousaf@gmail.com",
//     phone : "+92300 1122333"
// };

// const fullProfile = {...personalInfo, ...contactInfo};
// console.log(fullProfile);


`Problem 16: Object Destructuring`
`Question: Extract properties from an object into variables.`


// const employee = {
//     name : "Khan",
//     age : 25,
//     city : "Multan"
// };

// const {name , age } = employee ;

// console.log(name);
// console.log(age);

`Problem 17: Default Property Values`
`Question: Provide default values when properties might be missing.`


// function createUser(userInfo){
//     const {
//         name ,
//         age = 33,
//         city = "Lahore",
//         country = "Pakistan",
//         active = true
//     } = userInfo;

//     return { name, age, city, country, active}
// };


// const user1 = createUser({name : "Yousaf", age : 22});
// const user2 = createUser({name : "Jam Khan"});


// console.log(user1);
// console.log(user2);


`Problem 18: Computed Property Names`
`Question: Use variables as property names when creating objects.`


`Problem 19: Object Method Shorthand`
`Question: Create object methods using shorthand syntax.`

// const calculate = {
//     num1 : 13,
//     num2 : 12,

//     add(){
//         return this.num1 + this.num2 ;
//     },
//     subtract(){
//         return this.num1 - this.num2 
//     },
//     multiple(){
//         return this.num1 * this.num2
//     }
// };
// console.log(calculate .add());
// console.log(calculate .subtract());
// console.log(calculate.multiple())
