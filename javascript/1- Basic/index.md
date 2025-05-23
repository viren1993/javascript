### **Data Types in JavaScript**

JavaScript has two main categories of data types: **Primitive** and **Non-Primitive**.

#### **1.1 Primitive Data Types**
Primitive types are immutable and stored by value.
1. String - Sequence of characters enclosed in quotes - `"Hello"`, `'World'`, `\`JavaScript``
2. Number - Numeric values (integers & floats) - 
3. Boolean - Represents true or false -	true, false
4. Null - Explicitly represents an empty or unknown value - null
5. Undefined - Variable declared but not assigned a value - let x; // undefined
6. Symbol (ES6) - Unique and immutable values, often used as object keys - const sym = Symbol("desc");
7. BigInt (ES11) - Large integers beyond Number.MAX_SAFE_INTEGER - const big = 12345678901234567890n;

### **1.2 Non-Primitive Data Types**
Non-primitive types are mutable and stored by reference.
1. Object - Collection of key and value pairs - let obj = { name: "John", age: 30 };
2. Array - List-like objects with indexed elements - let array = [1,2,3,]
3. Function - A block of reusable code - function todo() { return "hello"  }

### **1.3 typeof Quirks**
The typeof operator returns the data type of a value. However, it has some quirks:

console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object" (BUG in JavaScript!)
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol()); // "symbol"
console.log(typeof 9007199254740991n); // "bigint"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function(){}); // "function"

Common Issue: typeof null returns "object" due to a long-standing bug in JavaScript.

### **1.4 Type Coercion (== vs ===)**
Type coercion happens when JavaScript implicitly converts one data type to another.
== (Loose Equality) allows type coercion.
=== (Strict Equality) does not allow type coercion.

console.log(5 == "5"); // true (loose equality allows type coercion)
console.log(5 === "5"); // false (strict equality does not allow type coercion)
console.log(false == 0); // true (false coerces to 0)
console.log(null == undefined); // true (they are loosely equal)

### *
console.log(5 + "5"); // "55" (number + string → string)
console.log("5" - 2); // 3 (string → number)

### *[] === []
Result: false
Explanation: Two different arrays are never strictly equal, even if they have the same content.
They're stored at different memory addresses (references).

### *[] == []
Result: false
Explanation: Like the first one, these are two different array objects, compared by reference.

### *undefined === undefined
Result: true
Explanation: Both are the same primitive type and value.
So they are strictly equal.

### *undefined == undefined
Result: true
Explanation: Even with loose comparison, they are the same type and value.

### *isNaN === isNaN
Result: true
Explanation: isNaN is a function, and both sides refer to the same built-in function.
So this comparison returns true.

If you meant NaN === NaN, see below — it would be false.

### *isNaN == isNaN
Result: true
Explanation: Again, it's the same function on both sides, so it's equal — even with ==.

But again, if you meant NaN == NaN, the result is false.

### *null === null
Result: true
Explanation: null is a primitive and there's only one null value in JS.
Same type, same value.

### *null == null
Result: true
Explanation: Even with loose comparison, null is always equal to null.

| Expression                | Result | Explanation                   |
| ------------------------- | ------ | ----------------------------- |
| `[] === []`               | false  | Different references          |
| `[] == []`                | false  | Different references          |
| `undefined === undefined` | true   | Same primitive type and value |
| `undefined == undefined`  | true   | Same value                    |
| `isNaN === isNaN`         | true   | Same built-in function        |
| `isNaN == isNaN`          | true   | Same function                 |
| `null == null`            | true   | Same primitive value          |
| `null === null`           | true   | Same primitive value          |
| `5 + "5"`                 | 55     | number + string → string      |
| `"5" - 2`                 | 3      | string → number               |

#### **2. Scopes & Scope Chain**
Scope determines the accessibility of variables in JavaScript.

### **2.1 Types of Scope**
1. Global Scope

Variables declared outside a function are accessible everywhere.
var globalVar = "I am global";
function test() {
    console.log(globalVar); // Accessible
}

2. Function Scope
Variables declared inside a function are not accessible outside.

function myFunction() {
    var localVar = "I am local";
    console.log(localVar); // Accessible
}
console.log(localVar); // ❌ Error: localVar is not defined

3. Block Scope (ES6: let and const)
Variables declared inside {} using let or const are block-scoped.

{
    let blockVar = "I am block scoped";
    console.log(blockVar); // Accessible
}
console.log(blockVar); // ❌ Error: blockVar is not defined

### **2.2 Lexical Environment & Scope Chain**
Each function creates a new Lexical Environment, which consists of:

Local variables
A reference to its parent scope

function outer() {
    let outerVar = "Outer";
    
    function inner() {
        let innerVar = "Inner";
        console.log(outerVar); // ✅ Accessible (lexical scope)
    }
    
    inner();
    console.log(innerVar); // ❌ Error: innerVar is not defined
}
outer();

Lexical Environment - outer function varibale not show outside 
innter function ka variable nahi ho ta he upper variable used kar ta he outer function ka 

### **2.3 Strict Mode ("use strict")**
Strict mode helps catch silent errors and prevents bad practices.

"use strict";

x = 5; // ❌ Error: x is not defined (undeclared variable)
delete Object.prototype; // ❌ Error: Cannot delete built-in object

Why use strict mode?

1. Prevents accidental global variable creation
2. Eliminates this binding to window in functions
3. Catches silent errors
4. Prevents duplicate parameter names in functions

