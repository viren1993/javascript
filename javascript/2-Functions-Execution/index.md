#### **Hoisting**
  - `var` vs function hoisting
  - Temporal Dead Zone (TDZ) for `let`/`const`

1. Hoisting

What is Hoisting?

 - function or variable before it is declared in the code.

var vs Function Hoisting
Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution.

1.1 - var Hoisting:
console.log(myVar); // undefined (not ReferenceError)
var myVar = 5;
console.log(myVar); // 5

**** var myVar undefined show and let myVar error show Cannot access 'myVar' before initialization

Function Hoisting:
foo(); // "Hello" - works because function declaration is hoisted

function foo() {
  console.log("Hello");
}

bar(); // TypeError: bar is not a function
var bar = function() {
  console.log("Bar");
};

Function declarations are fully hoisted (name and body)
Function expressions (like var bar = function() {}) follow var hoisting rules

Temporal Dead Zone (TDZ) for let & const
The Temporal Dead Zone (TDZ) is the time between the entering of the scope and the actual declaration of the variable.

console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
let x = 10;

let and const are hoisted, but they remain in the TDZ until their declaration is encountered.

#### **Closures**
What is a Closure ?
A closure is a function that retains access to its parent’s scope, even after the parent function has executed.

Lexical Scoping
Closures work due to lexical scoping, meaning inner functions can access variables from their outer function’s scope.

function outer() {
  let name = "viren";
  function inner() {
    console.log(name, 'inner function call');
  }
  return inner; // return the function itself, not its result
}

const closureFn = outer(); // outer() runs and returns inner function
closureFn(); // Now calling the returned function

const myFunc = outer();
myFunc(); // Output: John

Even though outer() has finished execution, myFunc still retains access to name.
Use Cases of Closures

1. Data Privacy (Encapsulation)
 - Closer can be used to create private varibles

function counter() {
  let count = 0

  return {
    increment: function () {
      count++;
      console.log(count);
    }

    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

const myCounter = counter()
myCounter.increment(); // 1
myCounter.increment(); // 2
myCounter.decrement(); // 1

2. Currying

Currying is a technique where a function returns another function.

function multiply(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiply(2);
console.log(double(5)); // 10

3. Memoization (Caching)

Improves performance by storing computed results.

function memoizedAdd() {
  let cache = {};
  return function (num) {
    if (num in cache) {
      console.log("Fetching from cache");
      return cache[num];
    } else {
      console.log("Calculating result");
      let result = num + 10;
      cache[num] = result;
      return result;
    }
  };
}
const add10 = memoizedAdd();
console.log(add10(5)); // Calculating result, 15
console.log(add10(5)); // Fetching from cache, 15

#### **this Keyword**
Understanding this in JavaScript
The value of this depends on how a function is called.

Rules for this

Scenario	                              Value of this
Global Scope	                          window (in browsers) or global (Node.js)
Object Method	                          The object that called the method
Function (Strict Mode)	                undefined
Arrow Function	                        this is inherited from surrounding scope
new keyword	                            A new object instance
call / apply / bind	                    Explicitly set this

Implicit Binding (Object Method)

const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};
person.greet(); // "Hello, Alice"

this refers to the person object.

Explicit Binding (call, apply, bind)
call() and apply() allow us to set this explicitly.

function sayHi() {
  console.log(this.name);
}
const user = { name: "Bob" };

sayHi.call(user); // Bob
sayHi.apply(user); // Bob

call() and apply() immediately invoke the function.
call(arg1, arg2, ...), apply(arg1, [arg2, arg3, ...]).
bind() returns a new function with this permanently bound.

const boundFunc = sayHi.bind(user);
boundFunc(); // Bob

this with new Keyword
When a function is called with new, it creates a new object and sets this to that object.

function Person(name) {
  this.name = name;
}
const john = new Person("John");
console.log(john.name); // John

Arrow Functions & this

Arrow functions do not have their own this; they inherit it from their surrounding scope.

const obj = {
  name: "Alice",
  normalFunc: function () {
    console.log(this.name); // Alice
  },
  arrowFunc: () => {
    console.log(this.name); // ❌ undefined (inherits from global scope)
  },
};

obj.normalFunc(); // Alice
obj.arrowFunc(); // undefined

Arrow functions are useful in callbacks to preserve this.

function Counter() {
  this.count = 0;
  setInterval(() => {
    this.count++;
    console.log(this.count);
  }, 1000);
}
const c = new Counter(); // Increments count correctly

### **Interview Questions**

1. Explain hoisting and the difference between var, let, and const.
2. What is the Temporal Dead Zone (TDZ)?
3. What is a closure, and why are they useful?
4. How does JavaScript handle scope and lexical scoping?
5. Explain the different ways this can be determined in JavaScript.
6. What are call(), apply(), and bind()? Give examples.
7. Why do arrow functions behave differently with this?
8. How does new affect function execution and this?

https://github.com/yangshun/top-javascript-interview-questions?tab=readme-ov-file#explain-the-concept-of-hoisting-in-javascript
