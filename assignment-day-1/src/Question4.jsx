// 4. Create a functional component named Counter that displays a count and two buttons: "Increment" and "Decrement".
// Implement event handlers for the "Increment" and "Decrement" buttons to increase and decrease the count.
// Display the updated count on the screen.

import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const handleIncrement = () => setCount(count + 1)
  const handleDecrement = () => setCount(count - 1)

  return (
    <>
      <h3>The current count is: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>{' '}
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default Counter
