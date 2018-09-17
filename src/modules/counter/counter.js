// action type
const COUNTER_INCREMENT = 'counter/increment'
const COUNTER_DECREMENT = 'counter/decrement'
const COUNTER_RESET = 'counter/reset'

const initialState = {
  count: 0,
}

// reducer
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case COUNTER_DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    case COUNTER_RESET:
      return initialState
    default:
      return state
  }
}

// action-creator
export const onIncrement = () => ({ type: COUNTER_INCREMENT })
export const onDecrement = () => ({ type: COUNTER_DECREMENT })
export const onReset = () => ({ type: COUNTER_RESET })
