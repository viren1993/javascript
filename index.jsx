// React js HOOKS

// useState is a Hook that allows you to have state variables in functional components.
// Manages state in a functional component.
// useState returns an array with two elements.

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;

//📌 Key Points:
// useState is a Hook that allows you to have state variables in functional components.
// useState returns an array with the state variable and a function to update it.
// Changing the state re-renders the component.


// tasnstacks query 


