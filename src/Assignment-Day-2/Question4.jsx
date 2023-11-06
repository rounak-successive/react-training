// 4.Create a functional component called RandomNumberGenerator.
// Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
// Render the current value of randomNumber.
// Add a button that generates a new random number and updates the state when clicked.

import { useState } from 'react'

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1
}
const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber())

  return (
    <>
      Random number is : {randomNumber}
      <br></br>
      <button onClick={() => setRandomNumber(generateRandomNumber())}>
        Generate Random Number
      </button>
    </>
  )
}

export default RandomNumberGenerator
