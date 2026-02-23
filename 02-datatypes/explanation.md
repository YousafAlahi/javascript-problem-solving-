
`Problem 1: Create Variables with Different Types`
`Solution:`

`Interview Explanation:`

Number: Stores numeric values (integers and decimals)
String: Stores text in quotes (single or double)
Boolean: Stores true or false
Undefined: Variable declared but not assigned a value
Null: Intentionally empty value

⚠️ Interview Tip: typeof null returns "object" - this is a known JavaScript bug that was never fixed for backward compatibility!


`Problem 2: Student Information Object`
`Solution:`

Interview Explanation:

Objects store key-value pairs
Use dot notation (student.name) or bracket notation (student["name"])
Arrays inside objects are accessed by combining both methods

Common Interview Question: "What's the difference between dot and bracket notation?"

Dot notation: cleaner, but property names must be valid identifiers
Bracket notation: allows dynamic property access and special characters


`Problem 3: Array of Numbers`
`Solution: `

Interview Explanation:

Arrays use zero-based indexing (first element is at index 0)
array.length gives total number of elements
Last element is at array[array.length - 1]

Interview Tip: Arrays are technically objects in JavaScript. To check if something is an array, use Array.isArray(scores) instead of typeof.



`Problem: ===>>> 4 : String Operations ` 
`{Solution : }`

Interview Explanation:
Two ways to combine strings:

Concatenation (+ operator): Traditional method
Template Literals (backticks): Modern ES6 syntax, cleaner for complex strings

Interview Question: "What are the benefits of template literals?"

Easier to read with multiple variables
Supports multi-line strings
Can include expressions: `Total: ${5 + 3}`


`Problem 5: Mix and Match `
`Solution:`

Interview Explanation:
Key Concept: Type Coercion
OperationResultExplanationa + a (100 + 100)200Both are numbers → additionb + b ("100" + "100")"100100"Both are strings → concatenation


`🎯 Interview Preparation Summary`
`Most Asked Concepts:`

`Primitive vs Reference Types`

Primitives: number, string, boolean, undefined, null, symbol, bigint
Reference: object, array, function


`Truthy/Falsy Values`

`Falsy: ` false, 0, "", null, undefined, NaN
`Everything else is truthy`

`Common Interview Questions:`
`Q: "Why does typeof null return 'object'?" `
A: It's a legacy bug in JavaScript from its first version that can't be fixed without breaking existing code.
`Q: "What's the difference between == and ===?" `
A: == allows type coercion, === requires exact type and value match. Always prefer ===!
`Q: "How do you check if a variable is an array?" `
A: Use Array.isArray(variable) because typeof returns "object" for arrays.
