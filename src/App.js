import React from 'react';
import './style.css';
import store, { COUNTER_DECREMENT, COUNTER_INCREMENT } from './store';
export default function App() {
  const increment = () => {
    store.dispatch({ type: COUNTER_INCREMENT });
    console.log(store.getState());
  };
  const decrement = () => {
    store.dispatch({ type: COUNTER_DECREMENT });
    console.log(store.getState());
  };
  const push = () => {
    store.dispatch({ type: 'push', value: Math.random() });
    console.log(store.getState());
  };
  const pop = () => {
    store.dispatch({ type: 'pop' });
    console.log(store.getState());
  };
  return (
    <div>
      <button onClick={increment}> Increment </button>
      <button onClick={decrement}> Decrement </button>
      <button onClick={push}> PUSH </button>
      <button onClick={pop}> POP </button>
    </div>
  );
}
