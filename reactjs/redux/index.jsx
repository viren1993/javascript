// Redux - Global State Management in React
// Redux is a state management library used to manage global state in React applications. 
// It helps when multiple components need access to the same data without prop drilling.

// why redux
// 🔹 Problem: Managing state becomes complex when passing props through multiple components (props drilling).
// ✅ Predictable state – Centralized store
// ✅ Efficient updates – Components update only when necessary
// ✅ Time travel debugging – Debugging state changes

// Redux Flow:

// Store – Holds the global state.
// Actions – Describe what happened (e.g., ADD_TODO).
// Reducers – Update state based on actions.
// Dispatch – Sends actions to reducers


// 4️⃣ Redux Toolkit (RTK) - Simplified Redux
// Redux Toolkit (RTK) is the official, recommended way to write Redux logic.
// ✔ Uses configureStore() instead of createStore()
// ✔ Includes createSlice() for reducers
// ✔ Includes built-in redux-thunk for async logic

