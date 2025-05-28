🔰 Module 1: React Fundamentals (Core Concepts)

✅ 1. Functional vs Class Components
- Class Components: ES6 classes that extend React.Component, have lifecycle methods, and use this.state.
- Functional Components: Simple JS functions, introduced with hooks to manage state and side-effects.

## ** In Functional Components (With Hooks)
| Method                    | When It's Called                                  | Use Case                           |
| ------------------------- | ------------------------------------------------- | ---------------------------------- |
| `constructor()`           | When component is created                         | Set initial state, bind methods    |
| `componentDidMount()`     | After component is rendered to the DOM            | Fetch data, setup subscriptions    |
| `componentDidUpdate()`    | After component updates (props/state change)      | Act on DOM changes, fetch new data |
| `componentWillUnmount()`  | Just before the component is removed from the DOM | Cleanup (timers, subscriptions)    |
| `shouldComponentUpdate()` | Before re-render; allows you to cancel rendering  | Performance optimization           |

Q : What's the difference between class and functional components?
A: Class components use this, have lifecycle methods, and were the only way to manage state before Hooks. Functional components are cleaner, and with Hooks, can manage state and lifecycle without classes.

JSX & Virtual DOM

JSX: JavaScript XML – syntactic sugar to write HTML-like code in JS.
Virtual DOM: A lightweight JS representation of the real DOM used by React to efficiently update the UI.

Q: What is JSX?
A: JSX is a syntax extension that lets you write HTML tags inside JavaScript. It gets compiled to React.createElement() calls.

What is the Virtual DOM and how does it improve performance?
- The Virtual DOM is an in-memory copy of the real DOM. React compares Virtual DOM versions (diffing) and only applies real changes (reconciliation), making updates faster.

Reconciliation is the process React uses to update the DOM efficiently when the state or props of a component change.
🔍 Why is Reconciliation Needed?
React builds a virtual DOM — a lightweight copy of the real DOM. When something changes:

A new virtual DOM is created.
React compares it to the previous virtual DOM.
Only the differences (diff) are updated in the real DOM.
This process of comparing the old and new virtual DOM and applying minimal updates is called reconciliation.

⚙️ How Does Reconciliation Work?
React uses a diffing algorithm based on these assumptions:

Elements of different types (e.g., <div> vs <p>) produce different trees — React will destroy the old and build new.
Elements of the same type are updated in-place (only attributes/text are changed).
Keys are critical when diffing lists — they help identify which items changed, were added, or removed.

✅ 3. Props vs State
Props	                     State
Immutable	                 Mutable
Passed from parent	         Local to component
Used to render content	     Used to manage internal data

Q: What is the main difference between props and state?
A: Props are read-only and passed from parent to child. State is mutable and maintained within a component.

✅ 4. Controlled vs Uncontrolled Components
Controlled Component: React controls form input using useState.
Uncontrolled Component: Uses ref to access DOM values directly.

✅ 5. Event Handling in React
- Events are camelCased (onClick, onChange)
- No need for addEventListener
- Use event object (e) to get value

Q: How do you handle events in React?
A: Events in React are handled via props like onClick. You define handler functions and bind them to JSX tags.

✅ 6. Conditional Rendering
if/else
Ternary (condition ? x : y)
&& operator

✅ 7. List Rendering with Keys
Use .map() to loop through arrays
Each child should have a unique key prop

Q: Why is the key prop important in lists?
A: Keys help React identify which items have changed, are added, or removed. It optimizes re-renders.

🧠 2. How React Runs Internally (Step-by-Step)
➤ Step 1: Browser loads index.html
<!-- public/index.html -->
<body>
  <div id="root"></div>
</body>


This is the only HTML file.
React will inject all your components inside this <div id="root">.

➤ Step 2: ReactDOM.createRoot() runs
const root = ReactDOM.createRoot(document.getElementById('root'));

It attaches the virtual DOM system to the real DOM’s #root div.

Step 3: root.render(<App />) renders the first React component
<App /> is your root React component.

React calls App() and recursively renders everything inside it.

function App() {
  return (
    <div>
      <Navbar />
      <MainPage />
    </div>
  );
}

✅ Bonus: Static void main() Equivalent in React?
// main.js / index.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


