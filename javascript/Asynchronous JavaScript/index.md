## 4. Asynchronous JavaScript
- **Callbacks & Callback Hell**
- **Promises**
  - `.then()`, `.catch()`, `.finally()`
  - `Promise.all()`, `Promise.race()`
- **`async/await`**
- **Event Loop**
  - Microtasks vs Macrotasks
  - `setTimeout`, `setInterval`, `queueMicrotask()`

  above topic send me all in each every details interview related and theory related all this topic


- Promises is object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A Promise is in one of these states:

- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation was completed successfully.
- rejected: meaning that the operation failed.

const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("✅ Promise resolved!");
  } else {
    reject("❌ Promise rejected!");
  }
});

myPromise
  .then((message) => {
    console.log("Then:", message);
  })
  .catch((error) => {
    console.log("Catch:", error);
  });

- 1. Callbacks & Callback Hell
A callback is a function passed as an argument to another function, executed after the main function completes.

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 1000);
}

fetchData(() => console.log("Processing Data"));

Callback Hell
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

promises is object represents the eventual completion (or failure)
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

  Promise.all()
Resolves when all promises resolve.

If any promise rejects, the entire Promise.all() rejects.

const p1 = new Promise((resolve) => setTimeout(() => resolve("P1 done"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("P2 done"), 2000));

Promise.all([p1, p2]).then((results) => console.log(results)); 
// ["P1 done", "P2 done"]


Promise.race()
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

Call Stack → Executes synchronous code.
Web APIs → Handles async tasks like setTimeout().
Callback Queue → Holds pending callbacks.
Microtask Queue → Holds microtasks (Promises, queueMicrotask()).

Microtasks vs Macrotasks

Microtasks (Promise.then(), queueMicrotask())	
Higher priority, executes first	
.then(), queueMicrotask()	
Runs before rendering	

------------------
Macrotasks (setTimeout, setInterval)
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

// Output:
// Start
// End
// Microtask Executed
