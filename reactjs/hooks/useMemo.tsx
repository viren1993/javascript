// useMemo
// what is useMemo simple way?
// usememo is a hook that will only recompute the memoized value when one of the dependencies has changed. 
// This optimization helps to avoid expensive calculations on every render.

// Memoizes computed values to optimize performance.

import { useState, useMemo } from "react";

function ExpensiveCalculation({ number }) {
  const squaredNumber = useMemo(() => {
    console.log("Calculating...");
    return number * number;
  }, [number]);

  return <p>Squared: {squaredNumber}</p>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ExpensiveCalculation number={count} />
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;

//Prevents expensive calculations from re-executing unnecessarily.
//Use for performance optimization.

