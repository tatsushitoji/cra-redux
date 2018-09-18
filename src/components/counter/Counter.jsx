import * as React from 'react'

export const Counter = ({
  countValue,
  onIncrement,
  onDecrement,
  onReset,
}) => (
    <div>
      <p>count: {countValue}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  )
