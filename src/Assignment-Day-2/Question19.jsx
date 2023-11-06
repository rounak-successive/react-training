// 19.Build a custom hook named useTimer for creating countdown timers.
// Create a useTimer hook that takes a countdown duration as a parameter.
// Use setInterval to decrement the timer at regular intervals.
// Return the current timer value and methods to start, pause, and reset the timer.
// Develop a component that utilizes the useTimer hook to display and control a countdown.

import { useState, useEffect } from 'react'

const useTimer = (countdownDuration) => {
  const [timer, setTimer] = useState(countdownDuration)
  const [isActive, setIsActive] = useState(false)

  const startTimer = () => {
    setIsActive(true)
  }

  const pauseTimer = () => {
    setIsActive(false)
  }

  const resetTimer = () => {
    setTimer(countdownDuration)
  }

  useEffect(() => {
    let interval

    if (countdownDuration && isActive) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 0) {
            clearInterval(interval)
            setIsActive(false)
            return 0
          }
          return prevTimer - 1
        })
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isActive, countdownDuration])

  return { timer, startTimer, pauseTimer, resetTimer }
}

const TimerComponent = () => {
  const [inputDuration, setInputDuration] = useState(60)
  const { timer, startTimer, pauseTimer, resetTimer } = useTimer(inputDuration)

  const handleInputChange = (event) => {
    setInputDuration(Number(event.target.value))
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`
  }

  return (
    <div>
      <h2>Countdown Timer</h2>
      <input
        type='number'
        value={inputDuration}
        onChange={handleInputChange}
        min={1}
        placeholder='Enter duration in seconds'
      />
      <p>{formatTime(timer)}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default TimerComponent
