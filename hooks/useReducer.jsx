// 4️⃣ useReducer Hook

// Alternative to useState for complex state logic.
// what is usereducer
// - useReducer is a Hook that is used for state management.
// - useReducer is usually preferable to useState when you have complex state logic that involves 
// multiple sub-values or when the next state depends on the previous one.

import { useReducer } from "react";

const render = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":   
            return { count: state.count - 1 };
        default:
            return state; 
    }
}

function Counter() {
    const [state, dispatch] = useReducer(render, { count: 0 });

    return (
        <div>
            <p>Counter : {}</p>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
        </div>
    )
}

export default Counter;

// 📌 Key Points
// Best for complex state logic with multiple updates.
// Uses a reducer function similar to Redux.
// 

