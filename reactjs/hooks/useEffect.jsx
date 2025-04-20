// 2️⃣ useEffect Hook
// Performs side effects (e.g., fetching data, subscriptions, or DOM manipulation).
// useEffect runs after the component renders.

import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup function
  }, []); // Empty dependency array means it runs once when mounted

  return <p>Timer: {count}</p>;
}

export default Timer;

// 📌 Key Points:
// Runs after render.
// Cleanup function is executed when the component unmounts.
// Dependencies control when the effect runs
