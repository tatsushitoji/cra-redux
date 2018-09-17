import * as React from 'react'
import {
  onIncrement,
  onDecrement,
  onReset,
} from '../../modules/counter'

export const Counter = ({ counter, dispatch }) => (
  <div>
    <p>count: {counter.count}</p>
    <button onClick={() => dispatch(onIncrement())}>Increment</button>
    <button onClick={() => dispatch(onDecrement())}>Decrement</button>
    <button onClick={() => dispatch(onReset())}>Reset</button>
  </div>
)
