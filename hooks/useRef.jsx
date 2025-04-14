// useRef
// whast is useRef simple way
// useref is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).

//Keeps a reference to a DOM element or a persistent variable without causing re-renders.

import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default InputFocus;

// 📌 Key Points:
// Used for DOM manipulation and persistent values.
// Does not trigger re-renders.
