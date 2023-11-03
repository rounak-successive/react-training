// 3.Create a component with controlled input field and a button. When the user enters a specific value into the input (e.g., "show"), a new component should be rendered below the input, displaying a message. Otherwise, nothing should be displayed.

import { useState } from 'react'

const Question3Container = () => {
  const [inputCommand, setInputCommand] = useState('')
  const [flag, setFlag] = useState(false)
  const handleClick = () => {
    if (inputCommand === 'show') setFlag(true)
  }
  return (
    <div>
      <input
        type='text'
        placeholder='Enter your Command'
        value={inputCommand}
        onChange={(e) => setInputCommand(e.target.value)}
      />
      {flag && <h3>Welcome User</h3>}
      <button onClick={handleClick}>Run</button>
    </div>
  )
}

export default Question3Container
