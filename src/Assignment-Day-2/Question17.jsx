// 17.Build a custom hook named useClipboard for copying text to the clipboard.
// Implement a useClipboard hook that takes a text value as a parameter.
// Use the document.execCommand API to copy the provided text to the clipboard.
// Return a success status and methods to trigger the copying action.
// Develop a component that uses the useClipboard hook to provide a copy button for text.

import { useState } from 'react'

const useClipboard = (text) => {
  const [successState, setSuccessState] = useState(false)
  const copyToClipBoard = () => {
    const temporayTextArea = document.createElement('textarea')
    temporayTextArea.innerText = text
    document.body.appendChild(temporayTextArea)
    temporayTextArea.select()
    document.execCommand('copy')
    temporayTextArea.remove()
    setSuccessState(true)
  }
  return {
    successState,
    copyToClipBoard,
  }
}

const CopyTextComponent = () => {
  const [textToCopy, setTextToCopy] = useState('')
  const { successState, copyToClipBoard } = useClipboard(textToCopy)

  return (
    <div>
      <input
        type='text'
        value={textToCopy}
        placeholder='Enter the text to be copied'
        onChange={(event) => setTextToCopy(event.target.value)}
      />
      <button onClick={copyToClipBoard}>Copy</button>

      {successState && <span>Text copied to clipboard!</span>}
    </div>
  )
}

export default CopyTextComponent
