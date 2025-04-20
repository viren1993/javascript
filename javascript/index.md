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
  - closure - direclty funcation call karis to funcation jase innter funcation data pass kar va mate tane refrecnace pass kar vu padse

  - Lexical Scoping (function inside other fucation)
  - Use cases (data privacy, currying, memoization)
    - data privacy (Encapsulation - Closer can be used to create private varibles)
    - currying (Currying is a technique where a function returns another function.)
    - memoization ()

- **`this` Keyword**
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

## 11. DOM & Browser APIs

- Event Handling
  - Bubbling/Capturing
  - Event Delegation
- Web Storage (`localStorage`, `sessionStorage`)
- Fetch API & AJAX
- WebSockets
- Web Components (Custom Elements, Shadow DOM)
- Service Workers & PWA

## 12. Performance Optimization

- Debouncing vs Throttling
- Lazy Loading
- Web Workers (Offloading tasks)

## 13. Security

- XSS Prevention
- CORS & CSRF Protection
- Content Security Policy (CSP)

## 14. Advanced & Niche Topics

- Regular Expressions (`RegExp`)
- Typed Arrays (`Int8Array`, `ArrayBuffer`)
- Internationalization (`Intl.DateTimeFormat`)
- WebAssembly (WASM)
- JavaScript Engines (V8, JIT Compilation)

## 15. Testing & Tools

- Unit Testing (`Jest`, `Mocha`)
- Mocking (`Sinon.js`)
- Linters (`ESLint`)

## 16. Node.js (Backend JS)

- CommonJS vs ES Modules
- `process`, `Buffer`, Streams
- `setImmediate` vs `nextTick`

---

### 📌 About

This document serves as a comprehensive guide to JavaScript concepts, covering everything from fundamentals to advanced topics. Suitable for beginners and experienced developers alike!

🔗 Stay updated with modern JavaScript practices and deepen your knowledge by exploring each topic further.
alert(8); is the same as window.alert(8);

## OPPS

## Object

- collection of properties and methods
- toLowerCase

## Why use opps

## parts of opps

Object Literal

- Constructor function
- Prototypes
- Classes
- Instances (new, this)

## Pillars

- Abstraction - deatails hide kar na - (fetch api call kar se kar just background prosess)
- Encapsulation - encapsulation is wrapping up of data in method and funcation hide kar diya jo access jo kar na wo kar ne diya
- inheritance -
- Polymorphism - Poly is many - morphism sawaroop - 1 method mutiple roop just like console log

- What is the Factory Pattern?
    A pattern that creates objects without exposing the instantiation logic.
- What is the Singleton Pattern?
    A pattern that ensures only one instance of a class is created.

1. Garbage Collection
   JavaScript has automatic memory management through Garbage Collection (GC). The Mark-and-Sweep algorithm removes unused objects from memory.

2. Memory Leaks (Causes & Prevention)
   Common Memory Leaks:

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

2. Web Storage (localStorage & sessionStorage)

3. Fetch API & AJAX
4. WebSockets

- Promises is object represents the eventual completion (or failure)
- Callback is a function passed as an argument to another function
- Closures allow functions to retain access to their parent scope's variables even after the parent function has executed.
- Hoisting - function or variable befo you decation code
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

- Debouncing - Debouncing ensures that a function is only executed after a specified delay following the last time it was invoked.
- Throttling - Throttling ensures that a function is executed at most once in a specified interval, regardless of how many times the event occurs. This is useful for optimizing performance in frequently occurring events like scrolling.

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


