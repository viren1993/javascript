//Higher-Order Component (HOC) in React

// 1️⃣ What is a Higher-Order Component (HOC)?
// A Higher-Order Component (HOC) is a function that takes a component as an argument and returns a new enhanced component.
// It is used for code reusability and logic sharing in React applications.

// 💡 Think of HOC as a "wrapper" that adds additional functionality to a component.

///2️⃣ Why Use HOC?

// HOCs are useful for:
// ✅ Code reusability (e.g., adding authentication, permissions, logging)
// ✅ Separation of concerns (keeping components clean and focused)
// ✅ Avoiding duplicate logic across multiple components

//3️⃣ How to Implement HOC?
// A Higher-Order Component is simply a function that takes a component and returns a new enhanced component.

// ✅ Basic Syntax:
// const withExtraInfo = (WrappedComponent) => {
//     return function EnhancedComponent(props) {
//       return <WrappedComponent {...props} extraInfo="This is extra info" />;
//     };
//   };
 

//4️⃣ Practical Example
//   import React from "react";

  const withLoading = (WrappedComponent) => {
    return function EnhancedComponent({ isLoading, ...props }) {
      if (isLoading) {
        return <h2>Loading...</h2>;
      }
      return <WrappedComponent {...props} />;
    };
  };
  
  export default withLoading;


//   7️⃣ Summary
// What? → HOC is a function that takes a component and returns an enhanced component.
// Why? → To reuse logic, separate concerns, and avoid duplicating code.
// How? → By wrapping components inside an HOC function.
// Why HOCs over Hooks? → When applying shared behavior across multiple component
  