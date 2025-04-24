// useCallback
// what is callback simple way
// call back function is a function that is passed as an argument to another function

import { useState, useCallback } from "react";

function Button({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick} />
    </div>
  );
}

export default Parent;

// 📌 Key Points:
// Prevents unnecessary re-renders of child components.
// Useful in performance optimization.
