ROUND 1 - XT-REACTJS

1. What is React? How it is different from Angular?
2. What the different ways you make an API call on react
3. Explain the total React Flow and why it is called as a Single Page application with one way data binding.
4. How can you pass data from child to parent? Write an example
5. How are Class component different from Functional
6. What is shadow Dom and how it is different from Virtual
7. What is context API? can we have multiple providers for different context we make
8. Code an app

To Do
Task 1
Task 2
Task 3

In Progress
Task 4

Completed
Task 5

9. What are Render props?
10. Different lifecycle methods -> An console.log statement based on that
11. What are the different React hooks i have used
12. Explain UseEffect Hook
13. Make a timer component that auto decreases by 1 every 1 second
14. What is the use of useMemo? useCallback? React.memo?
15. Write your own Memoization function
16. Make a custom Input hook that is reusable
17. Explain HOC
18. What is compound component pattern
19. Questions on React Router
20. How Redux Works?
21. Need of middlewares in Redux
22. Explain Error Boundaries / Write a sample error boundary structure
23. How do you optimize a React Component
24. React Testing - Gave me to write a sample test for a input with a div where value of input is displayed
25. Typescript questions / Webpack
26. Difference between SSG vs SSR
27. What is NextJS / Gatsby and how it is useful as compared to React.
28. What are service workers? Explain usecase
29. What is tree shaking / Babel / proptypes
30. Explain React Routing how to implement it
31. Explain Types of Rendering in react
32. Explain Component lifecycle in React
33. Explain Redux js toolkit and which version of redux have you used Explain Redux Flow
34. Can useMemo() be used as HOC ?
35. Difference between useCallback and useMemo with Example
36. Then one Problem statement was given to call an API and after that based on ID, call another APIs and display data in table
37. What is Context API , explain how to create the context ?
38. What is Webpack ? How to create Webpack ?
39. Have you created any HOCs?
40. 2 Technical Rounds 1. Native JS round - asked to code in notepad++. Asked few questions on array and strings like duplicate char, count char. 2. React+JS - started with HTML, CSS normal questions on flex, box model, semantic elements. JS concepts like debouncing, fetch API call.
41. Implement Flipkart product page using your own custom hook for fetching data
42. Design a chat bot for a website.
43. basic js & react related question to hoisting, life cycle methods. List some features of JavaScript. List some of the advantages of JavaScript. Can an anonymous function be assigned to a variable?
44. Simple task to fetch cart and display items in the cart
45. React hooks, life cycle methods, error boundaries, hoc
46. Simple task to fetch characters and their movies
47. API fetching, CRUD operation and then DOM Manipulation using pure JS.
48. Questions related to Web Accessibility (won't ask separately if you answer smartly for SEMANTIC ELEMENT BENEFIT HTML question, which will be there for sure)
49. Questions related to Web Security.
50. API fetching and state management using useReducer and useContext
51. Questions on React Hooks
52. Questions on Error Boundary
53. Questions on higher order components
54. Questions on children and render props
55. Some Basic questions on Jest/ React Testing Library

--------------------------------------------------------------------------------------------------------
React.js Interview Questions and Answers

1. What is React? How is it different from Angular?
React is a JavaScript library for building user interfaces, developed by Facebook. It focuses on the view layer and uses a component-based architecture.

Differences from Angular:
React is a library (only handles view layer), Angular is a full framework
React uses JSX, Angular uses HTML templates
React uses virtual DOM, Angular uses real DOM with change detection
React has one-way data binding, Angular has two-way data binding
React has a steeper learning curve for JSX, Angular has more concepts to learn (directives, modules, etc.)

2. Different ways to make API calls in React
1. Fetch API:
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));

2. Axios:
axios.get('https://api.example.com/data')
  .then(response => console.log(response.data));

Async/Await with Fetch:
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}

Using React Query:
const { data, isLoading } = useQuery('data', () =>
  fetch('https://api.example.com/data').then(res => res.json())
);

3. React Flow and Single Page Application with One-way Data Binding
React Flow:

User interacts with UI
Event triggers state change
React re-renders components affected by state change
Virtual DOM compares with previous state
Only the changed parts update in the real DOM

Single Page Application (SPA):

React apps are SPAs because they load a single HTML page and dynamically update content as users interact
No full page reloads, smoother user experience

One-way Data Binding:

Data flows in one direction (parent to child via props)
Child components can't directly modify parent data
Changes require callback functions from parent

4. Passing Data from Child to Parent

// Parent Component
function Parent() {
  const [data, setData] = useState('');
  
  const handleChildData = (childData) => {
    setData(childData);
  };

  return (
    <div>
      <Child onData={handleChildData} />
      <p>Data from child: {data}</p>
    </div>
  );
}

// Child Component
function Child({ onData }) {
  const sendData = () => {
    onData('Hello from child!');
  };

  return <button onClick={sendData}>Send Data to Parent</button>;
}

5. Class Components vs Functional Components
Class Components:

Use ES6 classes
Have lifecycle methods
Use this.state and this.setState()
Require render() method
Can use refs with React.createRef()

Functional Components:

Plain JavaScript functions
Use hooks for state and lifecycle
Simpler syntax
Better performance (no instance creation)
Easier to test and reuse

6. Shadow DOM vs Virtual DOM
Shadow DOM:

Browser technology for scoping HTML/CSS
Encapsulates styles and markup within a component
Used by Web Components

Virtual DOM:

React's lightweight copy of the real DOM
Used for efficient updates
Compares previous and current states to minimize DOM operations

7. Context API and Multiple Providers

Context API provides a way to share values between components without explicitly passing props through every level.
Yes, you can have multiple providers for different contexts:

<ThemeContext.Provider value={theme}>
  <UserContext.Provider value={user}>
    <App />
  </UserContext.Provider>
</ThemeContext.Provider>

8. To-Do App Implementation

import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [todos, setTodos] = useState({
    ToDo: ['Task 1', 'Task 2', 'Task 3'],
    InProgress: ['Task 4'],
    Completed: ['Task 5'],
  });

  const [newTask, setNewTask] = useState('');
  const [category, setCategory] = useState('ToDo');

  const addTask = () => {
    if (newTask.trim() && !todos[category].includes(newTask.trim())) {
      setTodos((prev) => ({
        ...prev,
        [category]: [...prev[category], newTask.trim()],
      }));
      setNewTask('');
    }
  };

  const deleteTask = (category, index) => {
    setTodos((prev) => {
      const updated = [...prev[category]];
      updated.splice(index, 1);
      return { ...prev, [category]: updated };
    });
  };

  const moveTask = (fromCategory, index, toCategory) => {
    if (fromCategory === toCategory) return;
    setTodos((prev) => {
      const updatedFrom = [...prev[fromCategory]];
      const task = updatedFrom.splice(index, 1)[0];
      const updatedTo = [...prev[toCategory], task];
      return {
        ...prev,
        [fromCategory]: updatedFrom,
        [toCategory]: updatedTo,
      };
    });
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New task"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {Object.keys(todos).map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {Object.entries(todos).map(([status, tasks]) => (
          <div
            key={status}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              width: '220px',
            }}
          >
            <h2>{status}</h2>
            <ul>
              {tasks.map((task, i) => (
                <li key={i} style={{ marginBottom: '10px' }}>
                  {task}
                  <div style={{ marginTop: '5px' }}>
                    <button
                      onClick={() => deleteTask(status, i)}
                      style={{ marginRight: '5px' }}
                    >
                      Delete
                    </button>
                    <select
                      onChange={(e) => moveTask(status, i, e.target.value)}
                      value=""
                    >
                      <option value="" disabled>
                        Move to
                      </option>
                      {Object.keys(todos)
                        .filter((s) => s !== status)
                        .map((target) => (
                          <option key={target} value={target}>
                            {target}
                          </option>
                        ))}
                    </select>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

9. Render Props
Render props is a pattern where a component's children is a function that returns React elements. The component calls this function instead of implementing its own render logic.

<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>

// Implementation
function DataProvider({ render }) {
  const data = { target: 'World' };
  return render(data);
}

10. Lifecycle Methods with console.log
class components 

class Example extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { count: 0 };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return <div>{this.state.count}</div>;
  }
}

11. React Hooks Commonly Used
useState: Manage state in functional components
useEffect: Side effects in functional components
useContext: Access context values
useReducer: State management with reducers
useCallback: Memoize functions
useMemo: Memoize values
useRef: Access DOM elements or mutable values
useLayoutEffect: Similar to useEffect but fires synchronously after DOM mutations

12. useEffect Hook
useEffect lets you perform side effects in function components. It combines the functionality of componentDidMount, componentDidUpdate, and componentWillUnmount.

useEffect(() => {
  // Code to run on mount and when dependencies change
  
  return () => {
    // Cleanup code (runs on unmount and before re-running effect)
  };
}, [dependencies]); // Dependency array - effect runs when these change


13. Timer Component

import { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return <div>Countdown: {count}</div>;
}

14. useMemo, useCallback, React.memo
useMemo: Memoizes a calculated value to avoid expensive recalculations

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

useCallback: Memoizes a function to prevent unnecessary recreations
const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);

React.memo: Memoizes a component to prevent unnecessary re-renders
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});

15. Custom Memoization Function
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Usage
const factorial = memoize(n => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
});


16. Custom Input Hook
import { useState } from 'react';

function useInput(initialValue = '', validationFn = null) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);
  
  const onChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    
    if (validationFn) {
      setError(validationFn(newValue));
    }
  };
  
  const reset = () => {
    setValue(initialValue);
    setError(null);
  };
  
  return {
    value,
    onChange,
    error,
    reset,
    bind: {
      value,
      onChange
    }
  };
}

// Usage
function MyForm() {
  const name = useInput('', value => !value ? 'Name is required' : null);
  
  return (
    <form>
      <input type="text" {...name.bind} />
      {name.error && <div>{name.error}</div>}
    </form>
  );
}


17. Higher-Order Components (HOC)
HOC is a function that takes a component and returns a new component with additional props or functionality.

function withLogger(WrappedComponent) {
  return function(props) {
    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted`);
      return () => console.log(`${WrappedComponent.name} unmounted`);
    }, []);
    
    return <WrappedComponent {...props} />;
  };
}

// Usage
const EnhancedComponent = withLogger(MyComponent);

18. Compound Component Pattern
Example (like HTML <select> and <option>):

<Tabs>
  <TabList>
    <Tab>First</Tab>
    <Tab>Second</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>First panel</TabPanel>
    <TabPanel>Second panel</TabPanel>
  </TabPanels>
</Tabs>

19. React Router Questions

Common React Router concepts:

<BrowserRouter>: Uses HTML5 history API
<Route>: Renders UI when path matches
<Link>: Navigation without page reload
useParams: Access URL parameters
useNavigate: Programmatic navigation
Nested routes and dynamic routing


20. How Redux Works
Single source of truth (store)
State is read-only (only changed by dispatching actions)
Changes are made with pure functions (reducers)


1. Difference between class component and function component
2. State and props
3. How to use lifecycle methods in function component

Lifecycle Methods in Function Components (Using Hooks)
Class Component Lifecycle	Function Component Equivalent
componentDidMount	useEffect(() => {}, [])
componentDidUpdate	useEffect(() => {}, [deps])
componentWillUnmount	useEffect(() => { return () => {} }, [])
shouldComponentUpdate	React.memo() or useMemo

  
export default function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleToggle = () => {
    setIsRunning((prev) => {
      if (prev) setCount(0); // Reset count when stopping
      return !prev;
    });
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Time : {count}</p>
      <button onClick={handleToggle}>{isRunning ? 'Reset' : 'Start'}</button>
    </div>
  );
}
