## 7. Functional Programming
- Pure Functions
- Higher-Order Functions (HOFs)
- Immutability
- Currying & Composition


  above topic send me all in each every details interview related and theory related all this topic

### **Functional Programming**

Functional programming is a programming paradigm based on pure functions and avoiding shared state, mutable data, and side effects. It emphasizes immutability, first-class functions, and higher-order functions to improve modularity, testability, and parallelism.

1. Pure Functions

Always produces the same output for the same input.

// Pure function: always returns the same result for the same input
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (always the same)


Advantages of Pure Functions:
Predictability: Given the same input, you always get the same output.
Easier Testing: Since they don't rely on external variables, testing is simple.
Parallel Execution: They can run in parallel without issues because they don’t modify shared state.

What is a pure function?
 - A function that always returns the same output for the same input and has no side effects.

### **2. Higher-Order Functions (HOFs)**

A higher-order function is a function that:

- Takes another function as an argument.
- Returns another function.

Example (JavaScript - HOFs using map, filter, reduce):

Advantages of HOFs:
Code Reusability: Functions can be passed as arguments, making code more modular.
Less Code, More Power: Reduce duplication with functions like map, filter, and reduce.
Encapsulation: Business logic can be separated into smaller functions

3. Immutability
Immutability means not changing the state of an object after it is created. Instead of modifying existing objects, we create new objects with the updated values.

Example (JavaScript - Avoiding Mutation with spread operator):

const obj = { name: "John", age: 30 };

// Immutable update (creates a new object)
const newObj = { ...obj, age: 31 };
console.log(newObj); // { name: "John", age: 31 }
console.log(obj);    // { name: "John", age: 30 } (unchanged)

Example (Avoiding Mutation in Arrays - map instead of push)

const numbers = [1, 2, 3];

// Mutable way (bad practice)
numbers.push(4); 

// Immutable way (good practice)
const newNumbers = [...numbers, 4];

console.log(numbers);    // [1, 2, 3]
console.log(newNumbers); // [1, 2, 3, 4]

4. Currying & Function Composition

Currying is transforming a function with multiple arguments into a series of functions, each taking one argument at a time.

const multiply = (a) => (b) => a * b;
const double = multiply(2);
console.log(double(5)); // 10




