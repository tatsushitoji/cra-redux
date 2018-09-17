import { createStore, combineReducers } from 'redux';
import { counterReducer } from './modules/counter';

export const store = createStore(
  combineReducers({
    counter: counterReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);