// 6.Create a functional component called Clock.
// Use the useState hook to manage a state variable named time initialized to the current time.
// Use the useEffect hook to update the time state every second to display the current time.
// Render the current time in a <p> element.
// When the component unmounts, clear the interval to stop updating the time.

import { useState, useEffect } from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <p style={{ fontSize: 'larger', textAlign: 'center' }}>
      The Current Time is :{time.toLocaleString().split(',')[1]}
    </p>
  )
}

export default Clock
