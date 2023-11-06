// 13.create two components: Parent and Child.
// In the Parent component, maintain a count state.
// Pass a callback function from the Parent to the Child that increments the count.
// Use the useCallback hook in the Parent to memoize the callback function with a dependency on the count state.
// Display the count in the Child component.
// Implement a button in the Child component that resets the count to zero when clicked.

import { useState, useCallback } from 'react'

const Parent = () => {
  const [count, setCount] = useState(0)
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [count])

  return (
    <div>
      <h1>This is in the Parent Component</h1>
      <Child
        count={count}
        setCount={setCount}
        handleIncrement={handleIncrement}
      />
    </div>
  )
}

const Child = ({ count, setCount, handleIncrement }) => {
  const reset = () => {
    setCount(0)
  }

  const countStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  }

  return (
    <div>
      <h2>This is in the Child Component</h2>
      <p style={countStyle}>The Current Value of Count is: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Parent
