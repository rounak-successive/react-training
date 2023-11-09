// 3.Create a React component named Counter that displays a number and two buttons, one for incrementing the number and another for decrementing it. Write tests using React Testing Library to ensure that the component behaves as expected.

import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const handleIncrement = () => setCount(count + 1)
  const handleDecrement = () => setCount(count - 1)

  return (
    <>
      <p>The current count is: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default Counter
