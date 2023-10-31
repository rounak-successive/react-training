// 5.Create a functional component called CounterWithStep.
// Use the useState hook to manage a state variable named count initialized to 0.
// Render the current value of count in a <p> element.
// Add two buttons, one for incrementing the count and another for decrementing it.
// Add an input field where the user can specify a step value.
// Update the count using the specified step value when the buttons are clicked.

import { useState } from 'react'

const CounterWithStep = () => {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  const handleIncrement = (step = 1) => setCount(count + step)
  const handleDecrement = (step = 1) => setCount(count - step)

  return (
    <>
      <input
        type='number'
        placeholder=' Enter Step'
        onChange={(event) => setStep(Number(event.target.value))}
      />
      <p>The current count is: {count}</p>
      <button onClick={() => handleIncrement(step)}>Increment</button>{' '}
      <button onClick={() => handleDecrement(step)}>Decrement</button>
    </>
  )
}

export default CounterWithStep
