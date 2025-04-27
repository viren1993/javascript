⚛️ Module 2: Hooks (Deep Dive)

1️⃣ useState
- Adds state to functional components
- Returns an array with current state and a setter function

Q: What is useState in React?
A: It’s a Hook that allows you to add local state to functional components.

2️⃣ useEffect
Handles side effects like API calls, subscriptions, timers
Can mimic componentDidMount, componentDidUpdate, and componentWillUnmount

code : 
useEffect(() => {
  // effect
  return () => {
    // cleanup
  };
}, [dependency]);

Q: How does useEffect replace lifecycle methods?
A: useEffect(() => {}, []) = componentDidMount,
useEffect(() => {}, [dep]) = componentDidUpdate,
return () => {} = componentWillUnmount.

3️⃣ useContext
Access context values without prop drilling
Used with React.createContext

const ThemeContext = createContext()

function App() {
    retrun (
        <ThemeContext.Provider  value='dark'>
          <Child />
        </ThemeContext.Provider>
    )
}

function Child() {
    const theme = useContext(ThemeContext)
    return <div>Current theme is {theme}</div>;
}

Q: What’s the purpose of useContext?
A: It helps avoid prop drilling by accessing context directly in a component.

4️⃣ useReducer
Alternative to useState for complex state logic
Similar to Redux reducer pattern

const [state, dispatch] = useReducer(reducer, initialState)

import React, { useReducer } from 'react';

export default function App() {
  const reducer = (state, action) => {
    if (action.type === 'INCREMENT') {
      return state + 1;
    }

    if (action.type === 'DECREMENT') {
      return state - 1;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

5️⃣ useRef
Holds a mutable reference that doesn’t trigger re-renders
Used to reference DOM nodes or store values between renders

const inputRef = useRef(null);
<input ref={inputRef} />
<button onClick={() => inputRef.current.focus()}>Focus</button>

Q: What’s the difference between useRef and useState?
A: useRef holds values that persist without triggering re-renders.

6️⃣ useMemo - (perticuler value store the not redering the again an again)
Memoizes a computed value 
Prevents expensive recalculations on every render
(unnecessary rerender value)

const expensiveValue = useMemo(() => computeHeavyTask(num), [num]);

Q: What’s the purpose of useMemo?
A: It caches a computed result and recalculates it only when dependencies change.

Difference Between useMemo and React.memo

Feature                    | useMemo                                            | React.memo
What it is                 | A Hook                                             | A Higher Order Component (HOC)
Used on                    | Values/Calculations inside a component             | Entire functional components
Purpose                    | Memoize computed values                            | Memoize component rendering
Syntax                     | useMemo(() => computeExpensive(), [deps])          | export default React.memo(MyComponent)
Re-render trigger          | Re-runs only if dependencies change                | Re-renders only if props have changed
Use Case                   | Avoid recalculating expensive functions            | Avoid re-rendering unchanged child components

✅ useMemo – Example

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  return num * 1000;
};

function MyComponent({ num }) {
  const calculated = useMemo(() => expensiveCalculation(num), [num]);

  return <div>{calculated}</div>;
}

✅ Prevents expensiveCalculation from running unnecessarily.


✅ React.memo – Example
const Child = React.memo(({ value }) => {
  console.log("Child rendered");
  return <p>{value}</p>;
});

function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Child value="I won't re-render unless props change" />
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

Use **React.memo** to prevent unnecessary re-renders of components.
Use **useMemo** to prevent unnecessary re-calculations of values.

7️⃣ useCallback
Memoizes functions
Prevents unnecessary re-creations of the function on every render

const handleClick = useCallback(() => {
  console.log("Clicked!");
}, []);

Q: When to use useCallback?
A: When passing functions as props to memoized components to avoid unnecessary re-renders.


✅ Custom Hooks
🔍 What is a Custom Hook?
A reusable function starting with use
Composes built-in hooks
Promotes reusability, maintainability, and readability

Q: Why use custom hooks in React?
A: To abstract logic that is reused across components—improves code clarity and separation of concerns.

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

🛠️ Practical: ToDo App Using Major Hooks

Features:
Add, delete, toggle todos
Local storage integration
Custom Hook for storage














