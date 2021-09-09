import React from 'react';
import './style.css';
import store, { COUNTER_DECREMENT, COUNTER_INCREMENT } from './store';
export default function App() {
  const increment = () => {
    store.dispatch({ type: COUNTER_INCREMENT });
    console.log(store.getState().count);
  };
  const decrement = () => {
    store.dispatch({ type: COUNTER_DECREMENT });
    console.log(store.getState().count);
  };
  return (
    <div>
      <button onClick={increment}> Increment </button>
      <button onClick={decrement}> Decrement </button>
    </div>
  );
}
