# JavaScript Master List (All Topics)

## 1. Basics & Core Concepts

- **Data Types**
  - Primitive (string, number, boolean, null, undefined, symbol, bigint)
  - Non-Primitive (object, array, function)
  - `typeof` quirks
  - Type Coercion (`==` vs `===`)
- **Scopes & Scope Chain**
  - Global, Function, Block Scope (`var`, `let`, `const`)
  - Lexical Environment
  - Strict Mode (`"use strict"`)

## 2. Functions & Execution Context

- **Hoisting** - (function or variable before it is declared in the code.)
  - `var` vs function hoisting (funcation full hosited)
  - Temporal Dead Zone (TDZ) for `let`/`const`
- **Closures**
  - Closures allow functions to retain access to their parent scope's variables even after the parent function has executed.

  - Lexical Scoping (function inside other fucation)
  - Use cases (data privacy, currying, memoization)
    - data privacy (Encapsulation - Closer can be used to create private varibles)
    - currying (Currying is a technique where a function returns another function.)
    - memoization ()

- **`this` Keyword**
  - he value of this depends on how a function is called.
  - Rules for this
    Scenario	                              Value of this
    Global Scope	                          window (in browsers) or global (Node.js)
    Object Method	                          The object that called the method
    Function (Strict Mode)	                undefined
    Arrow Function	                        this is inherited from surrounding scope
    new keyword	                            A new object instance
    call / apply / bind	                    Explicitly set this
  - Implicit, Explicit (`call`, `apply`, `bind`), `new` Binding
  - Arrow functions & `this`

## 3. Objects & Prototypes

- **Prototypes & Inheritance**
  - `__proto__` vs `prototype`
- **Constructor Functions**
- **Classes (ES6+)**
  - `class`, `constructor`, methods
  - Static Methods, Private Fields (`#field`)
  - `extends`, `super()`, Method Overriding
- **Objects Deep Dive**
  - Property descriptors (`get`, `set`, `enumerable`, `configurable`)
  - `Object.create()`, `Object.assign()`

## 4. Asynchronous JavaScript

- **Callbacks & Callback Hell**
- callback is a function passed as an argument to another function
- callback hell multiple nested callbacks make code unreadable
- **Promises**
- Promises is object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
- `.then() - resolved `, `.catch() - rejected`, `.finally() - success or failure`
- `Promise.all()` - Resolves when all promises resolve. , any promise rejects, the entire Promise.all() rejects
  `Promise.race()` - first promise resolves/rejects.
- **`async/await`**
- **Event Loop**
  - Microtasks vs Macrotasks
  - `setTimeout`, `setInterval`, `queueMicrotask()`

## 5. ES6+ Modern Features

- Template Literals (`\`${var}\``)
- Destructuring (`const { prop } = obj`)
- Spread/Rest Operator (`...`)
- Arrow Functions (`() => {}`)
- Modules (`import/export`)
- Maps & Sets (`Map`, `Set`, `WeakMap`, `WeakSet`)
- Symbols (`Symbol()`, `Symbol.iterator`)
- Iterators & Generators (`function*`, `yield`)
- Proxy & Reflection (`Proxy`, `Reflect`)

## 6. Error Handling & Debugging

- `try/catch/finally`
- Custom Errors (`class CustomError extends Error`)
- Debugging (`debugger`, DevTools)

## 7. Functional Programming

- Pure Functions
- Higher-Order Functions (HOFs)
- Immutability
- Currying & Composition

## 8. OOP Concepts

- Encapsulation (Private fields `#field`, Getters/Setters)
- Polymorphism (Method Overriding)
- Abstraction (Simulated via `throw` in parent class)

## 9. Design Patterns

- Factory Pattern
- Singleton Pattern
- Observer Pattern
- Module Pattern

## 10. Memory Management

- Garbage Collection
- Memory Leaks (Global vars, detached DOM, closures)
  A memory leak occurs when a program fails to release memory that is no longer needed, leading to degraded performance or application crashes over time.
  1. Uncleared References
  2. Closures

## 11. DOM & Browser APIs

- Event Handling
  - Bubbling/Capturing
    - Bubbling: Events propagate from child → parent.
    - Capturing: Events propagate from parent → child
- Event Delegation
- Web Storage (`localStorage`, `sessionStorage`)
- Fetch API & AJAX
- WebSockets
WebSockets provide a full-duplex, bidirectional communication channel over a single, long-lived TCP connection between client and server.
Unlike HTTP (which is request-response based), WebSockets allow real-time communication where either side can send data at any time.

- Web Components (Custom Elements, Shadow DOM)
- Service Workers & PWA

## 12. Performance Optimization

- Debouncing vs Throttling
  - Debouncing - Debouncing ensures that a function is only executed after a specified delay following the last time it was invoked.
  - Throttling - Throttling ensures that a function is executed at most once in a specified interval, regardless of how many times the event occurs. This is useful for optimizing performance in frequently occurring events like scrolling.

- Lazy Loading
In React, use React.lazy() and Suspense:

- Lazy Loading - Lazy Loading is a performance optimization technique where certain resources (like images, scripts, or components) are loaded only when they are needed, rather than loading everything upfront.

## **Why Lazy Loading ?
  Reduces initial load time.
  Saves bandwidth.
  Improves user experience by prioritizing critical content first.

- Web Workers (Offloading tasks)
Use Web Workers to offload CPU-intensive tasks (e.g., image processing, parsing large files, data crunching) from the main thread to prevent UI freezing.

## 13. Security

- XSS Prevention
🔹 Q4: How do you prevent XSS (Cross-Site Scripting) in React?
Avoid using dangerouslySetInnerHTML unless absolutely necessary.
Sanitize inputs and server responses.
Use libraries like DOMPurify for sanitization.

import DOMPurify from 'dompurify';
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userInput) }} />

- CORS & CSRF Protection
CORS (Cross-Origin Resource Sharing) is a browser security feature that controls cross-domain requests. To fix issues, configure allowed origins on the server using headers like:
Access-Control-Allow-Origin: https://yourdomain.com

CSRF (Cross-Site Request Forgery) tricks authenticated users into making unintended requests.
Protection methods:

Use SameSite cookies (SameSite=Lax or Strict)
Implement CSRF tokens (generated server-side and validated on each request)
Use secure HTTP methods (GET for data fetches)

- Content Security Policy (CSP)
CSP is an HTTP header that restricts what resources (scripts, styles, etc.) can be loaded by the browser. It helps prevent XSS by only allowing trusted content.

## 14. Advanced & Niche Topics

- Regular Expressions (`RegExp`)
- Typed Arrays (`Int8Array`, `ArrayBuffer`)
- Internationalization (`Intl.DateTimeFormat`)
- WebAssembly (WASM)
- JavaScript Engines (V8, JIT Compilation)

## 15. Testing & Tools

- Unit Testing (`Jest`, `Mocha`)
Unit Testing is the process of testing individual units or components of software (like a function or component) in isolation to ensure they work as intended.

| Purpose                   | Benefit                                                   |
| ------------------------  | --------------------------------------------------------- |
| ✅ Catch bugs early       | Identify issues during development, not in production     |
| ✅ Improve code quality   | Enforces modular, testable, and maintainable code         |
| ✅ Enable refactoring     | You can safely update code if tests protect functionality |
| ✅ Documentation          | Tests describe what a unit is expected to do              |
| ✅ Confidence in releases | Increases trust in deployments and continuous integration |

✅ How is Unit Testing Done?
Choose a testing framework (e.g., Jest, Mocha)
Write test cases that describe expected input and output
Run tests automatically or during CI/CD

- Mocking (`Sinon.js`)
- Linters (`ESLint`)

## 16. Node.js (Backend JS)

- CommonJS vs ES Modules
- `process`, `Buffer`, Streams
- `setImmediate` vs `nextTick`

- What is the Factory Pattern?
    A pattern that creates objects without exposing the instantiation logic.
- What is the Singleton Pattern?
    A pattern that ensures only one instance of a class is created.

1. Garbage Collection
   JavaScript has automatic memory management through Garbage Collection (GC). The Mark-and-Sweep algorithm removes unused objects from memory.

3. Global Variables:
   Problem: Data stored in global variables isn’t collected.
   Solution: Use let/const and avoid unnecessary globals.

4. Detached DOM Elements:
   Problem: Removing elements from the DOM but keeping references in JavaScript.
   Solution: Manually nullify references when removing elements.

5. DOM & Browser APIs

6. Event Handling
   Bubbling & Capturing

- Bubbling: Events propagate from child → parent.
- Capturing: Events propagate from parent → child.

2. Web Storage (localStorage & sessionStorage).

3. Fetch API & AJAX

- Promises is object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
- Callback is a function passed as an argument to another function
- Closures allow functions to retain access to their parent scope's variables even after the parent function has executed.
- Hoisting - function or variable before you decation code
- Pure Functions - Always produces the same output for the same input.
- HOFs - Takes another function as an argument, Returns another function.
- Currying & Function Composition - Currying is transforming a function with multiple arguments into a series of functions, each taking one argument at a time.
- What is the Event Loop - JavaScript is single-threaded, meaning it executes code one line at a time. The Event Loop manages asynchronous operations by moving them from the callback queue to the call stack.

- Shallow Copy - A shallow copy creates a new object, but it only copies references to nested objects rather than duplicating them. If the original object contains objects or arrays, changes to those nested objects will reflect in the copied object.

let obj1 = { name: "John", address: { city: "New York" } };
let obj2 = { ...obj1 };  // Shallow copy

obj2.name = "Doe";  
obj2.address.city = "Los Angeles"; 

console.log(obj1.name);   // "John" (unchanged)
console.log(obj1.address.city);  // "Los Angeles" (changed in both)

- Deep Copy - A deep copy creates a completely independent copy of the original object, including all nested objects.

let obj1 = { name: "John", address: { city: "New York" } };
let obj2 = JSON.parse(JSON.stringify(obj1));  // Deep copy

obj2.name = "Doe";
obj2.address.city = "Los Angeles"; 

console.log(obj1.name);   // "John" (unchanged)
console.log(obj1.address.city);  // "New York" (unchanged)

- Template Literals (`\`${var}\``)
- Destructuring (`const { prop } = obj`)
- Spread/Rest Operator (`...`)
- Arrow Functions (`() => {}`)
- Modules (`import/export`)
- Maps & Sets (`Map`, `Set`, `WeakMap`, `WeakSet`)
- Symbols (`Symbol()`, `Symbol.iterator`)
- Iterators & Generators (`function*`, `yield`)
- Proxy & Reflection (`Proxy`, `Reflect`)re it is declared in the code.
- callback hell - multiple nested callbacks make

## **Event**
onchange -	An HTML element has been changed
onclick -	The user clicks an HTML element
onmouseover -	The user moves the mouse over an HTML element
onmouseout -	The user moves the mouse away from an HTML element
onkeydown -	The user pushes a keyboard key
onload -	The browser has finished loading the page

## **String Methods**

string.text.length // length count text
string.charAt(0); // index letter return
string.charCodeAt(); // The charCodeAt() method returns the code of the character at a specified index in a string:
string.at(2) // index letter return
text[0] // index letter return

## **Extracting String Parts**
slice(start, end)
substring(start, end)
substr(start, length)

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
let part = text.slice(7); // after 7 ke sub aye ga
let part = text.slice(-12); // piche se 12 count kar ne ka 
let part = text.slice(-12, -6); // 
let part = str.substring(7, 13); // 

String toUpperCase() // upercase 
String toLowerCase() // lowercase 
String concat() // concate the data 
  let text1 = "Hello";
  let text2 = "World!";
  let text3 = text1.concat(" ",text2);

String trim() // whte space remove
  let text1 = "      Hello World!      ";
  let text2 = text1.trim();

String trimStart()
let text2 = text1.trimStart(); //  but removes whitespace only from the start of a string.

String trimEnd() // but removes whitespace only from the end of a string.

String padStart() //
let text = "5";
text = text.padStart(4,"a");
answer --- aaa5

String padEnd()
let text = "5";
text = text.padEnd(4,"a");
answer --- 5aaa

String repeat()
let result = text.repeat(2); // 2 time word repeat

String replace()
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

String replaceAll() 

String split() // A string can be converted to an array with the split() method:
let text = "a,b,c,d,e,f";
const myArray = text.split(","); 
answer = a

## **JavaScript String Search

String indexOf() //  returns the index (position) // word count kar ta he 
String lastIndexOf() // returns the index of the last occurrence of a specified text in a string string count kar ta he 
String search() // searches a string for a string (or a regular expression) and returns the position of the match
String match() // method returns an array containing the results of matching a string against a string
String matchAll() // returns an iterator containing the results of matching a string against a string // mutiple show 
String includes() // method returns true if a string contains a specified value.
text.includes("world", 12); Check if a string includes "world". Start at position 12:
String startsWith() // method returns true if a string begins with a specified value.
String endsWith() // method returns true if a string ends with a specified value.

## **Number Methods

toString()	Returns a number as a string
toExponential()	Returns a number written in exponential notation
let x = 9.656;
x.toExponential(2) // 9.66e+0

toFixed()	Returns a number written with a number of decimals
toPrecision()	Returns a number written with a specified length
x.toPrecision(2) // 9.7

valueOf()	Returns a number as a number
(100 + 23).valueOf() // 123

## **Array Methods**

- Array length -  returns the length (size) of an array
- Array toString() -  converts an array to a string 
- Array at() - 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2); // Apple
- Array join() // It behaves just like toString(), but in addition you can specify the separator
- Array pop() // removes the last element from an array
- Array push() // adds a new element to an array (at the end)
- Array shift() // emoves the first array element and "shifts" all other elements to a lower index.
- Array unshift() // method adds a new element to an array (at the beginning), and "unshifts" older elements:
- Array delete() // delete fruits[0]
- Array concat() // method creates a new array by merging (concatenating) existing arrays:
- Array copyWithin() //  method copies array elements to another position in an array:
- Array flat() // 
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat(); // 1,2,3,4,5,6

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(1,0) // Banana,Banana,Orange,Apple
first index  apply replace value second index applly value of one

- Array splice()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); // Banana,Orange,Lemon,Kiwi,Apple,Mango

- Array toSpliced() -  delete first 2 mens index 1 after 2 index deletel
const spliced = months.toSpliced(2, 1);

- Array slice() - - remove before inde of 2  
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(2);
Lemon,Apple,Mango

## **Array Search**
Array indexOf()
Array lastIndexOf()
Arrat include()
Array find()
Array findIndex()
Array findLast()
Array findLastIndex()

## **Array Sorting** 
- Alphabetic Sort
Array sort()
Array reverse()
Array toSorted()
Array toReversed()
Sorting Objects

- Numeric Sort
Numeric Sort
Random Sort
Math.min()
Math.max()
Home made Min()
Home made Max()

## **Array Iteration Methods**
Array forEach
Array map()
Array flatMap()
Array filter()
Array reduce()
Array reduceRight()
Array every()
Array some()
Array from()
Array keys()
Array entries()
Array with()
Array Spread (...)

## **JavaScript Math Object**

## **Javascript if, else and else if
- Use if to specify a block of code to be executed, if a specified condition is true
- Use else to specify a block of code to be executed, if the same condition is false
- Use else if to specify a new condition to test, if the first condition is false
- Use switch to specify many alternative blocks of code to be executed

## **Different Kinds of Loops**
- for - loops through a block of code a number of times
- for/in - loops through the properties of an object
- for/of - loops through the values of an iterable object
- while - loops through a block of code while a specified condition is true
- do/while - also loops through a block of code while a specified condition is true

## **Break**
-- The break statement "jumps out" of a loop.

- JavaScript Iterables - Iterables can be iterated over with for..of loops

## **Types of Function Invocation**

1. Regular Function Invocation  
function greet() {
  console.log("Hello, World!");
}
greet();  // Invoking the function

2. Function with Parameters
function add(a, b) {
  return a + b;
}
const result = add(5, 3);  // Invoking with arguments
console.log(result); // 8

3. Function Expression Invocation
const sayHi = function() {
  console.log("Hi there!");
};
sayHi(); // Invoked

4. Arrow Function Invocation
const multiply = (x, y) => x * y;
console.log(multiply(4, 5)); // 20

5. Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("IIFE Invoked!");
})();

6. Method Invocation (within objects)
const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  }
};
person.greet(); // "Hello, I am Alice"

7. Using call() and apply() 
## *Call function with this binding
## *Same as call but uses array args

function say(message) {
  console.log(`${message}, ${this.name}`);
}
const user = { name: "Bob" };

say.call(user, "Hi");     // "Hi, Bob"
say.apply(user, ["Hello"]); // "Hello, Bob"

8. Using bind() to create a bound function
## *Returns a new bound function

const boundSay = say.bind(user, "Hey");
boundSay(); // "Hey, Bob"


