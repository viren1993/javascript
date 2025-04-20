###  **5. Redux: Global State Management**

Why Use Redux?
In React applications, managing state across multiple components can become complex as the application grows. Redux provides a centralized store to manage the global state, ensuring consistency and predictability throughout the application. This centralized approach simplifies debugging and testing by offering a single source of truth for the state.​

What is Redux?
Redux is a predictable state container for JavaScript applications. It manages the state of an application using a single immutable state tree, which can only be changed by dispatching actions that describe the changes. Reducers specify how the state transitions in response to these actions.​

How Redux Works
Actions: Plain JavaScript objects that describe what happened.​
Reducers: Pure functions that take the current state and an action, and return the next state.​
Store: Holds the application state and allows access to state, dispatching of actions, and registration of listeners.​

Redux Toolkit (RTK)
Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It simplifies the setup process and provides utilities to reduce boilerplate code. RTK includes utilities like createSlice and createAsyncThunk to streamline reducers and handle asynchronous actions. ​

Middleware in Redux
Redux Thunk: Allows action creators to return a function instead of an action object. This is useful for handling asynchronous operations like API calls. ​
Redux Saga: Manages side effects using generator functions, making it easier to test and handle complex asynchronous tasks. ​
Redux Persist: Persists and rehydrates the Redux store, allowing the state to be saved to and retrieved from storage, such as localStorage. ​

#### **Core React Concepts**

1. What is the virtual DOM and how does React use it?
The Virtual DOM is a lightweight JavaScript representation of the real DOM. React uses it to optimize rendering by
- Updating a virtual copy of the DOM when state/props change.
- Comparing (diffing) the new virtual DOM with the previous one.
- Updating only the changed elements in the actual DOM (reconciliation).

2. What are controlled vs uncontrolled components?
- Controlled Component: The form element’s value is controlled by React state (useState or this.state), and updates via onChange.
- Uncontrolled Component: The form element maintains its own internal state. You use ref to access values.

3. Explain React’s reconciliation process.
- Reconciliation is the process React uses to update the DOM efficiently:
- It compares the new Virtual DOM tree with the previous one (diffing).
- Finds the minimum number of changes.
- Applies only those changes to the real DOM. React uses a heuristic based on element types and keys to decide whether to update or replace elements.

4. What are the key differences between class components and functional components?
- Class Component	
  ES6 class	| this.state | Lifecycle methods (componentDidMount) | Heavier | Older versions	
- Functional Component
  JavaScript function | useState hook | useEffect, useLayoutEffect | Lighter | Modern React (post v16.8)

5. How does React handle re-rendering? How can you optimize it?
 - React re-renders a component when its state or props change.
 - Optimization techniques:
    - React.memo to memoize components
    - useMemo to memoize values
    - useCallback to memoize functions
    - shouldComponentUpdate or PureComponent (in class components)
    - Avoid unnecessary props drilling and use Context or state management libraries.

6. React Hooks
hooks is a function that lets you hook into react state and lifecycle features from function components
- useState - Manages local state in functional components.
const [state, setState] = useState(initialValue);

- useEffect - Runs side effects like data fetching, subscriptions, or manual DOM manipulation.
useEffect(() => {
  // side effect
  return () => {
    // cleanup
  };
}, [dependencies]);

- useContext - Accesses the value of a React Context without nesting.
const ThemeContext = React.createContext('light');
const theme = useContext(ThemeContext);

- useRef - Creates a mutable reference that persists across renders.
const inputRef = useRef(null);
<input ref={inputRef} />
<button onClick={() => inputRef.current.focus()}>Focus</button>

- useMemo - Memoizes a computed value to avoid unnecessary recalculations.
const memoizedValue = useMemo(() => computeValue(a, b), [a, b]);

- useCallback - Memoizes a function to prevent re-creation on every render.
const handleClick = useCallback(() => {
  console.log('Clicked');
}, []);


DOM is the actual structure of a webpage, while Virtual DOM is an abstraction of the real DOM that React uses to optimize updates by only changing parts of the real DOM that need to be updated.

•  Controlled Component: The component's input values are controlled by React state.
•  Uncontrolled Component: The component manages its input values internally.
•  Custom Hook: A reusable function that encapsulates logic, state, and side effects to be used in different components.
•  Stateless Component: A component that does not manage state, typically just renders UI based on props.
•  Stateful Component: A component that manages its own state and can change UI based on that state

Redux Elements
1.	Store:
o	The central repository that holds the state of the application. The store is created using the createStore function and can only be updated by dispatching actions.
2.	Actions:
o	Plain JavaScript objects that describe what happened in the application. Actions must have a type property, and they can also contain additional data. They are dispatched to the store.
3.	Reducers:
o	Functions that specify how the state changes in response to actions. Reducers take the current state and an action as arguments and return a new state.
4.	Dispatch:
o	A function that sends actions to the Redux store. It’s used to trigger a state change.
5.	Middleware:
o	Custom logic that can be applied to actions before they reach the reducer. Commonly used middleware includes redux-thunk for handling asynchronous actions and redux-logger for logging actions.
6.	Selectors:
o	Functions that extract and return specific parts of the state from the Redux store. They help encapsulate the logic of accessing state.
7.	Provider:
o	A component that makes the Redux store available to the rest of your app. It wraps your application, allowing components to access the store using the connect function or the useSelector and useDispatch hooks.
8.	Connect:
o	A higher-order function that connects React components to the Redux store, allowing them to access state and dispatch actions as props.
9.	useSelector and useDispatch:
o	Hooks provided by the react-redux library. useSelector lets you access Redux state directly, while useDispatch allows you to dispatch actions from functional components.






