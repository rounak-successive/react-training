// 5.Construct a select dropdown menu with multiple options. Control the selected option using state. When an option is selected, display a message showing the selected value.

import { useState } from 'react'

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleSelectionChange = (event) => {
    setSelectedOption(event.target.value)
  }

  return (
    <div>
      <h2>Select your Country:</h2>
      <select value={selectedOption} onChange={handleSelectionChange}>
        <option value=''>-- Please Select --</option>
        <option value='USA'>USA</option>
        <option value='Canada'>Canada</option>
        <option value='Germany'>Germany</option>
        <option value='India'>India</option>
        <option value='China'>China</option>
      </select>
      {selectedOption && <p>You have selected: {selectedOption}</p>}
    </div>
  )
}

export default DropdownMenu
