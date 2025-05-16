Module 5: Redux & Middleware (Complete Notes)

✅ Redux Core Concepts:

## **What is Redux?
Redux is a predictable state container for JavaScript apps. It helps you manage and centralize application state.


## ** why redux
✅ Problem: Managing state becomes complex when passing props through multiple components (props drilling).
✅ Predictable state – Centralized store
✅ Efficient updates – Components update only when necessary
✅ Time travel debugging – Debugging state changes

## **  Redux Flow:

Store – Holds the global state.
Actions – Describe what happened (e.g., ADD_TODO).
Reducers – Update state based on actions.
Dispatch – Sends actions to reducers

## **  Core Building Blocks
# **  Store:
Entire state tree of the application.

import { configureStore } from '@redux/toolkit'

const store = configureStore({
    reducer : youreducer;
})

# ** Actions:
Plain JavaScript objects that describe what happened.

const ADD_TODO = 'ADD_TODO';
const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text
});

# ** Reducers:
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

🌀 Redux Thunk

What:
Thunk is a middleware that lets you write async logic inside actions.

export const fetchData = () => async (dispatch) => {
  const response = await fetch('/api/data');
  const data = await response.json();
  dispatch({ type: 'SET_DATA', payload: data });
};

Interview Qs:

Q: When would you use Thunk?
I use Thunk when I need to handle simple async logic, like fetching data from an API, submitting a form, or chaining dispatches.
It’s perfect for scenarios where the async flow is linear and not too complex, and I want to keep logic close to the action creator.

Q: Can Thunk return another function?
Yes — that’s exactly what it does. Thunk replaces the action with a function that receives dispatch (and optionally getState).
This function allows you to perform async operations, and dispatch other actions manually based on the results.

export const fetchData = () => async (dispatch, getState) => {
  const response = await fetch('/api/data');
  const data = await response.json();
  dispatch({ type: 'SET_DATA', payload: data });
};

⚡ Redux Saga

What:
Redux Saga is a middleware that uses generator functions (function*) to manage complex side effects in a declarative way. You write "sagas" that can pause, resume, cancel, debounce, or retry tasks.

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

 Q: When would you use Redux Saga over Thunk?
I choose Redux Saga when dealing with complex async flows — like race conditions, background syncing, polling, or when I need to cancel, delay, or retry effects.
Saga is ideal for large apps where side effects become harder to manage with nested thunks.

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


| Concept        | Redux Thunk                      | Redux Saga                            |
| -------------- | -------------------------------- | ------------------------------------- |
| Type           | Middleware                       | Middleware                            |
| Style          | Imperative (do this, then that)  | Declarative (describe what to do)     |
| Use            | Simpler, small-scale async logic | Complex, scalable async workflows     |
| Syntax         | Functions (thunks)               | Generator functions (ES6 `function*`) |
| Learning Curve | Easy                             | Steeper                               |
| Popularity     | Widely used                      | Used for advanced apps                |

🧠 1. Redux Thunk
✅ What is Redux Thunk?
Redux Thunk is a middleware that lets you write action creators that return functions (thunks) instead of plain action objects. These functions can contain asynchronous logic.

📌 In simple terms: it helps you handle async operations like API calls in Redux.

❓ Why Use Redux Thunk?
You want a simple way to handle side effects (like fetch()).
You need access to dispatch and getState inside async functions.
Works great for small to medium complexity apps.

🛠️ How It Works
const action = { type: "FETCH_DATA" };
dispatch(action);
const fetchData = () => {
  return (dispatch, getState) => {
    dispatch({ type: "FETCH_START" });

    fetch('/api/data')
      .then(res => res.json())
      .then(data => dispatch({ type: "FETCH_SUCCESS", payload: data }))
      .catch(error => dispatch({ type: "FETCH_ERROR", error }));
  };
};

dispatch(fetchData());

⚙️ 2. Redux Saga
✅ What is Redux Saga?
Redux Saga is a middleware library that uses generator functions (function*) to handle side effects like data fetching, background tasks, or retry logic.

📌 Think of Sagas as watchers: they listen for actions and handle complex async workflows.

❓ Why Use Redux Saga?
You need to handle complex or long-running async logic.
You want more control (e.g., cancellation, debouncing, parallel effects).
You prefer clean separation of logic (Sagas live outside of components and are testable).

// saga.js
import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchDataSaga(action) {
  try {
    const data = yield call(fetch, '/api/data');
    const json = yield call([data, 'json']);
    yield put({ type: 'FETCH_SUCCESS', payload: json });
  } catch (error) {
    yield put({ type: 'FETCH_ERROR', error });
  }
}

export function* watchFetchData() {
  yield takeEvery('FETCH_REQUEST', fetchDataSaga);
}

import createSagaMiddleware from 'redux-saga';
import { watchFetchData } from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchFetchData);

| Use Case                              | Use Which?  | Why?                                         |
| ------------------------------------- | ----------- | -------------------------------------------- |
| Simple API call                       | Redux Thunk | Less code, easier setup                      |
| API call with error handling          | Both        | Thunk is easier; Saga gives more structure   |
| Retry on failure                      | Redux Saga  | Can pause, retry, and control flow elegantly |
| Canceling API requests                | Redux Saga  | Built-in cancellation support                |
| Debounce input (e.g., search box)     | Redux Saga  | Clean and readable implementation            |
| Orchestrating complex async workflows | Redux Saga  | Better suited for parallel, race, delays     |
