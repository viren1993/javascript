## 4. Asynchronous JavaScript
- **Callbacks & .Callback Hell**
- **Promises**
  - `.then()`, `.catch()`, `.finally()`
  - `Promise.all()`, `Promise.race()`
- **`async/await`**
- **Event Loop**
  - Microtasks vs Macrotasks
  - `setTimeout`, `setInterval`, `queueMicrotask()`

  above topic send me all in each every details interview related and theory related all this topic

- Promises is object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

## **Callbacks & Callback Hell
A callback is a function passed as an argument to another function, executed after the main function completes.

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 1000);
}

fetchData(() => console.log("Processing Data"));

## **Callback Hell
Occurs when multiple nested callbacks make code unreadable and difficult to debug.

function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 completed");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 completed");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 completed");
    callback();
  }, 1000);
}

// Nested Callbacks (Callback Hell)
step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed");
    });
  });
});


Solution to Callback Hell: Use Promises or Async/Await

### ** What is a Promise? **

- Promises is object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
A Promise represents a value that may be available now, later, or never. It has three states:

Pending → Initial state, operation not complete.
Fulfilled → Operation completed successfully.
Rejected → Operation failed.

const myPromise = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) resolve("Operation Successful");
    else reject("Operation Failed");
  }, 1000);
});

myPromise.then((result) => console.log(result)) // "Operation Successful"
  .catch((error) => console.log(error))  // "Operation Failed" (if rejected)
  .finally(() => console.log("Execution Done")); 

### ** 3. Promise.all(), Promise.race()**

## **Promise.all()
Resolves when all promises resolve.

If any promise rejects, the entire Promise.all() rejects.

const p1 = new Promise((resolve) => setTimeout(() => resolve("P1 done"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("P2 done"), 2000));

Promise.all([p1, p2]).then((results) => console.log(results)); 
// ["P1 done", "P2 done"]

## **Promise.race()
Resolves/rejects as soon as the first promise resolves/rejects.

const p1 = new Promise((resolve) => setTimeout(() => resolve("P1 done"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("P2 done"), 2000));

Promise.race([p1, p2]).then((result) => console.log(result)); 
// "P1 done" (since it resolves first)

### **4. async/await**

async makes a function return a promise.
await pauses execution until the promise resolves.

async function fetchData() {
  return "Data Loaded";
}

fetchData().then((data) => console.log(data)); // "Data Loaded"

### **5. Event Loop**

What is the Event Loop?
JavaScript is single-threaded, meaning it executes code one line at a time. The Event Loop manages asynchronous operations by moving them from the callback queue to the call stack.

### ** How Event Loop Works (in steps)
Call Stack
→ Executes synchronous code line-by-line.

Web APIs
→ Asynchronous functions (e.g., setTimeout, fetch) are sent to browser APIs.

Callback Queue / Task Queue
→ After completion, async callbacks go into the queue.

Event Loop
→ Constantly checks if the call stack is empty. If yes, it pushes the next queued callback into the stack.

1. Call Stack → 
Executes synchronous code.
Follows LIFO (Last In, First Out).
When a function is called, it's pushed onto the stack; when it finishes, it's popped off.

2. Web APIs → Handles async tasks like setTimeout().
Not part of JS engine but provided by browsers (or Node.js equivalents).
Handles async operations like:
setTimeout
fetch
DOM events
geolocation

3. Callback Queue (a.k.a. Task Queue / Macro-task Queue)
Stores callbacks from Web APIs after they complete.
Examples: setTimeout, setInterval, DOM events.

4. Microtask Queue
For microtasks like:
Promise.then()
queueMicrotask()
MutationObserver

Before any macro-task runs, the event loop clears out all microtasks.

## **Microtasks vs Macrotasks

### **Microtasks (Promise.then(), queueMicrotask())	
Higher priority, executes first	
.then(), queueMicrotask()	
Runs before rendering	

------------------
### **Macrotasks (setTimeout, setInterval)
Lower priority, executes later
setTimeout(), setInterval()
Runs after rendering

### **6. setTimeout, setInterval, queueMicrotask()**

setTimeout()
Executes a function once after a specified delay.
console.log("Start");
setTimeout(() => console.log("Executed after 2s"), 2000);
console.log("End");

setInterval()
Executes a function repeatedly at specified intervals.

let count = 0;
const intervalId = setInterval(() => {
  console.log("Count:", count++);
  if (count > 5) clearInterval(intervalId);
}, 1000);

queueMicrotask()
console.log("Start");

queueMicrotask(() => console.log("Microtask Executed"));
console.log("End");

