// 1. Create a React component with an input field. Implement it as a controlled component where the input value is controlled by the component's state. When the user types into the input field, the component's state should update accordingly.

import { useState } from 'react'

const ControlledComponent = () => {
  const [input, setInput] = useState('')
  return (
    <div>
      <input
        type='text'
        value={input}
        placeholder='Enter a message'
        onChange={(event) => setInput(event.target.value)}
      />
      <h3>Your message is: {input}</h3>
    </div>
  )
}

export default ControlledComponent
