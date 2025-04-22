Module 5: Redux & Middleware (Complete Notes)

✅ Redux Core Concepts:

1. What is Redux?
Redux is a predictable state container for JavaScript apps. It helps you manage and centralize application state.

2. Why Redux?

Centralized store for consistent state across components
Easier debugging and time-travel (via Redux DevTools)
Better testability
Ideal for large apps with complex state interactions

🔧 Core Building Blocks
🔹 Store:
Entire state tree of the application.

import { configureStore } from '@redux/toolkit'

const store = configureStore({
    reducer : youreducer;
})

🔹 Actions:
Plain JavaScript objects that describe what happened.

const ADD_TODO = 'ADD_TODO';
const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text
});

🔹 Reducers:
Functions that take current state and an action, and return new state.

function todoReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    default:
      return state;
  }
}

🚀 Redux Toolkit (RTK)

Why RTK?

Reduces boilerplate
Built-in support for Immer and Thunk
Includes createSlice, configureStore, etc.

import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

🔁 Redux Middleware
Middleware intercepts actions before they reach the reducer. Useful for logging, async calls, etc.

🌀 Redux Thunk

What:
Thunk is a middleware that lets you write async logic inside actions.

export const fetchData = () => async (dispatch) => {
  const response = await fetch('/api/data');
  const data = await response.json();
  dispatch({ type: 'SET_DATA', payload: data });
};

Interview Qs:

When would you use Thunk?
Can Thunk return another function?

⚡ Redux Saga

What:
Saga uses generator functions to handle side effects (e.g., API calls, delays).

Benefits:
Better control over complex async flows
Declarative effects
Cancellation, debouncing, etc.

Example:

import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchDataSaga() {
  const data = yield call(() => fetch('/api').then(res => res.json()));
  yield put({ type: 'SET_DATA', payload: data });
}

function* watchFetchData() {
  yield takeEvery('FETCH_DATA', fetchDataSaga);
}

Interview Qs:

Why Saga over Thunk?
What is call, put, and takeEvery?
How do you handle retries or cancellations?

💾 Redux Persist

What:
Persists Redux state across page reloads using localStorage or sessionStorage.

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

🔍 Practical Example: Product Cart with RTK + Thunk

Create productSlice with actions to fetch and store product data.
Use createAsyncThunk for API calls.
Configure store with middleware.
Connect to React components via useDispatch, useSelector.
Optionally add Redux Persist to retain cart items.

📌 Interview Questions Summary

Theoretical:

What are the main parts of Redux?
Difference between Redux and Context API?
Why use Redux Toolkit?

Practical:

How do you fetch data with Thunk?
How do you handle async flows in Saga?
How do you persist Redux state?


