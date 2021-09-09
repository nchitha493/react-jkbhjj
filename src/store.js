import * as redux from 'redux';

export const COUNTER_INCREMENT = 'counter/increment';
export const COUNTER_DECREMENT = 'counter/decrement';

const initialState = {
  count: 0
};
const couterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT: {
      return { ...state, count: state.count + 1 };
      break;
    }
    case COUNTER_DECREMENT: {
      return { ...state, count: state.count - 1 };
      break;
    }
    default: {
      return state;
    }
  }
};
const arrayReducer = (state = [], action) => {
  switch (action.type) {
    case 'push': {
      const data = [...state];
      data = data.push(action.value);
      return [...data];
      break;
    }
    case 'pop': {
      const data = [...state];
      data = data.pop();
      return [...data];
      break;
    }
    default: {
      return state;
    }
  }
};

const combineReducer = (state = {}, action) => {
  return {
    counter: couterReducer(state.counter, action),
    tester: arrayReducer(state.tester, action)
  };
};
const store = redux.createStore(combineReducer);

store.dispatch({ type: COUNTER_INCREMENT });
export default store;
