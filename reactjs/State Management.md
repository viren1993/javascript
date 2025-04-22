🌐 Module 4: State Management in React

State management in React refers to handling data that determines how your application behaves and renders. It involves passing data between components and deciding where that data should live.

✅ 1. State vs Props
State : 
- Data that belongs to a component
- Mutable (via setState/useState)
- Owned and managed by the component
- Dynamic data that can change

Props 
- Data passed from parent to child
- Immutable (read-only)
- Owned by parent, used by child
- Configuration/data for child components

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

function App() {
  return <Counter />; // Passing no props here
}

Q: What's the key difference between state and props?
A: Props are read-only and passed down; state is local and mutable.

2. Props Drilling Problem

Definition:
Props drilling happens when you pass data through many layers of components just to reach a deeply nested component.

Problem:
Makes code hard to read and maintain.
Causes unnecessary re-renders of intermediate components.

Q: How would you avoid props drilling?
A: By using Context API or state management libraries like Redux.

✅ 3. Context API

React Context API allows sharing state between components without passing props manually at every level.

Key Concepts:

createContext() – Create the context
Provider – Supplies the value
Consumer – Accesses the value (or use useContext Hook)

import React, { createContext, useState, useContext } from 'react';
import './style.css';

const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={theme === 'light' ? 'light' : 'dark'}>
      <h1>Context API : </h1>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Theme: {theme}
    </button>
  );
}


