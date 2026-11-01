

JavaScript Objects - 10 Beginner Practice Problems;;;

`Problem 1: Create a Simple Object`
`Question: Create an object called person with properties: name, age, and city.`
Answer:

const person = {
  name: "John",
  age: 25,
  city: "New York"
};

console.log(person.name); // John
console.log(person.age);  // 25

`Problem 2: Access Object Properties`
`Question: Given an object car, access its properties using both dot and bracket notation.`
Answer:

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};

// Dot notation
console.log(car.brand); // Toyota

// Bracket notation
console.log(car["model"]); // Camry

`Problem 3: Add New Properties`
`Question: Add a new property color to an existing object.`
Answer:

const bike = {
  brand: "Honda",
  model: "CBR"
};

// Adding new property
bike.color = "Red";
bike["price"] = 5000;

console.log(bike);
// { brand: 'Honda', model: 'CBR', color: 'Red', price: 5000 }

`Problem 4: Object with Methods`
`Question: Create an object with a method that returns a greeting.`
Answer:

const user = {
  name: "Alice",
  age: 30,
  greet: function() {
    return "Hello, my name is " + this.name;
  }
};

console.log(user.greet()); // Hello, my name is Alice

`Problem 5: Update Object Properties`
`Question: Change the value of an existing property in an object.`
Answer:

const student = {
  name: "Bob",
  grade: "A",
  age: 20
};

// Update property
student.grade = "A+";
student["age"] = 21;

console.log(student);
// { name: 'Bob', grade: 'A+', age: 21 }

`Problem 6: Delete Object Properties`
`Question: Remove a property from an object.`
Answer:

const book = {
  title: "JavaScript Guide",
  author: "John Doe",
  year: 2020,
  publisher: "Tech Books"
};

// Delete property
delete book.publisher;

console.log(book);
// { title: 'JavaScript Guide', author: 'John Doe', year: 2020 }

`Problem 7: Check if Property Exists`
`Question: Check if a property exists in an object.`
Answer:

const laptop = {
  brand: "Dell",
  ram: "16GB",
  processor: "i7"
};

// Using 'in' operator
console.log("brand" in laptop);     // true
console.log("graphics" in laptop);  // false

// Using hasOwnProperty
console.log(laptop.hasOwnProperty("ram")); // true

`Problem 8: Loop Through Object Properties`
`Question: Print all keys and values of an object.`
Answer:
const product = {
  name: "Phone",
  price: 500,
  brand: "Samsung"
};

// for...in loop
for (let key in product) {
  console.log(key + ": " + product[key]);
}
// Output:
// name: Phone
// price: 500
// brand: Samsung

`Problem 9: Nested Objects`
`Question: Create an object with nested objects and access nested properties.`
Answer:

const company = {
  name: "Tech Corp",
  address: {
    street: "123 Main St",
    city: "Boston",
    country: "USA"
  }
};

// Accessing nested properties
console.log(company.address.city);        // Boston
console.log(company["address"]["country"]); // USA

Problem 10: Object with Array Property
Question: Create an object containing an array and access array elements.
Answer:

const teacher = {
  name: "Ms. Smith",
  subjects: ["Math", "Science", "English"],
  experience: 10
};

// Access array elements
console.log(teacher.subjects[0]);  // Math
console.log(teacher.subjects[1]);  // Science

// Loop through array
teacher.subjects.forEach(function(subject) {
  console.log(subject);
});

Best Practices for Beginners:

Use const for objects that won't be reassigned
Use meaningful property names (camelCase convention)
Use dot notation when possible (cleaner syntax)
Use bracket notation when property names have spaces or are dynamic
Always check if property exists before accessing nested properties
Keep objects organized and don't make them too complex
10 moreFeb 12JavaScript Objects - 10 More Practice Problems

`Problem 11: Object.keys()`
`Question: Get all the keys from an object as an array.`
Answer:

const smartphone = {
  brand: "iPhone",
  model: "14 Pro",
  storage: "256GB",
  color: "Black"
};

const keys = Object.keys(smartphone);
console.log(keys);
// ['brand', 'model', 'storage', 'color']

// Count properties
console.log(keys.length); // 4

`Problem 12: Object.values()`
`Question: Get all the values from an object as an array.`
Answer:

const scores = {
  math: 95,
  science: 88,
  english: 92,
  history: 85
};

const values = Object.values(scores);
console.log(values); // [95, 88, 92, 85]

// Calculate total
const total = values.reduce((sum, score) => sum + score, 0);
console.log(total); // 360

`Problem 13: Object.entries()`
`Question: Convert an object into an array of key-value pairs.`
Answer:

const fruit = {
  name: "Apple",
  color: "Red",
  price: 2.5
};

const entries = Object.entries(fruit);
console.log(entries);
// [['name', 'Apple'], ['color', 'Red'], ['price', 2.5]]

// Loop through entries
entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

`Problem 14: Copy an Object (Shallow Copy)`
`Question: Create a copy of an object without modifying the original.`

const original = {
  name: "Tom",
  age: 25,
  city: "Paris"
};

// Method 1: Object.assign()
const copy1 = Object.assign({}, original);

// Method 2: Spread operator (recommended)
const copy2 = { ...original };

copy2.age = 30;

console.log(original.age); // 25 (unchanged)
console.log(copy2.age);    // 30

`Problem 15: Merge Multiple Objects`
`Question: Combine two or more objects into one.`
Answer:
const personalInfo = {
  name: "Sarah",
  age: 28
};

const contactInfo = {
  email: "sarah@email.com",
  phone: "123-456-7890"
};

// Using spread operator
const fullProfile = { ...personalInfo, ...contactInfo };

console.log(fullProfile);

`Problem 16: Object Destructuring`
`Question: Extract properties from an object into variables.`

const employee = {
  id: 101,
  name: "Mike",
  position: "Developer",
  salary: 60000
};

// Basic destructuring
const { name, position } = employee;
console.log(name);     // Mike
console.log(position); // Developer

// Rename variables
const { name: employeeName, salary: pay } = employee;
console.log(employeeName); // Mike
console.log(pay);          // 60000

`Problem 17: Default Property Values`
`Question: Provide default values when properties might be missing.`

function createUser(userInfo) {
  const { 
    name, 
    age = 18,           // default value
    country = "USA",    // default value
    active = true       // default value
  } = userInfo;
  
  return { name, age, country, active };
}

const user1 = createUser({ name: "John", age: 25 });
const user2 = createUser({ name: "Jane" });

console.log(user1); // { name: 'John', age: 25, country: 'USA', active: true }
console.log(user2); // { name: 'Jane', age: 18, country: 'USA', active: true }

`Problem 18: Computed Property Names`
`Question: Use variables as property names when creating objects.`

const propertyName = "favoriteColor";
const propertyValue = "Blue";

// Computed property name
const preferences = {
  [propertyName]: propertyValue,
  ["favorite" + "Food"]: "Pizza"
};

console.log(preferences);
// { favoriteColor: 'Blue', favoriteFood: 'Pizza' }

// Dynamic property
const createProp = (key, value) => {
  return { [key]: value };
};

console.log(createProp("age", 30)); // { age: 30 }

`Problem 19: Object Method Shorthand`
`Question: Create object methods using shorthand syntax.`
Answer:

const calculator = {
  num1: 10,
  num2: 5,
  
  // Old way
  add: function() {
    return this.num1 + this.num2;
  },
  
  // Shorthand (modern way)
  subtract() {
    return this.num1 - this.num2;
  },
  
  multiply() {
    return this.num1 * this.num2;
  }
};

console.log(calculator.add());      // 15
console.log(calculator.subtract()); // 5
console.log(calculator.multiply()); // 50

`Problem 20: Check Object Equality`
`Question: Compare two objects to see if they have the same properties and values.`

const obj1 = { name: "Alice", age: 25 };
const obj2 = { name: "Alice", age: 25 };
const obj3 = obj1;

// Direct comparison (compares reference, not content)
console.log(obj1 === obj2); // false (different objects)
console.log(obj1 === obj3); // true (same reference)

// Compare content (simple approach)
function areObjectsEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

console.log(areObjectsEqual(obj1, obj2)); // true

// Better comparison
function compareObjects(a, b) {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  
  if (keysA.length !== keysB.length) return false;
  
  for (let key of keysA) {
    if (a[key] !== b[key]) return false;
  }
  
  return true;
}

console.log(compareObjects(obj1, obj2)); // true

Key Takeaways:

Object.keys() - Get array of property names
Object.values() - Get array of property values
Object.entries() - Get array of [key, value] pairs
Spread operator (...) - Copy and merge objects easily
Destructuring - Extract properties into variables
Computed properties - Use variables as property names
Method shorthand - Write cleaner object methods
Object comparison - Objects are compared by reference, not value

Practice these regularly to master JavaScript objects!