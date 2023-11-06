// 8.Use the useEffect hook to manage the current slide and transition.
// Add few images atleast 10 in public folder to populate the slideshow.
// Allow users to pause, play the slideshow.
// Include a time interval option to control the automatic slideshow progression.

import { useState, useEffect, useRef } from 'react'

const imageURLS = []
for (let i = 1; i <= 10; i++) {
  imageURLS.push(process.env.PUBLIC_URL + `/${i}.jpg`)
}

const Slideshow = () => {
  const timerRef = useRef(null)
  const [urlIndex, setUrlIndex] = useState(0)
  const [timeInterval, setTimeInterval] = useState(1)
  const [animationState, setAnimationState] = useState(false)

  useEffect(() => {
    if (animationState) {
      timerRef.current = setInterval(() => {
        setUrlIndex((prevIndex) => {
          if (prevIndex === imageURLS.length - 1) return 0
          else return prevIndex + 1
        })
      }, 1000 * (timeInterval || 1))
    }

    return () => {
      clearTimeout(timerRef.current)
    }
  }, [timeInterval, animationState])

  return (
    <>
      <div>
        <img
          style={{
            padding: '40px',
            margin: '20px',
            backgroundSize: 'cover',
            width: '960px',
            height: '540px',
            border: '2px solid black',
          }}
          src={process.env.PUBLIC_URL + imageURLS[urlIndex]}
          alt='Slide'
        />
      </div>

      <input
        type='number'
        placeholder='Enter Interval in Seconds'
        min='1'
        onChange={(event) => {
          const inputValue = Number(event.target.value)
          if (inputValue < 1) {
            event.target.setCustomValidity('Value must be 1 or greater')
            event.target.reportValidity()
          } else {
            event.target.setCustomValidity('')
            setTimeInterval(inputValue)
          }
        }}
      />

      <button onClick={() => setAnimationState(true)}>Play</button>
      <button onClick={() => setAnimationState(false)}>Pause</button>
    </>
  )
}

export default Slideshow
