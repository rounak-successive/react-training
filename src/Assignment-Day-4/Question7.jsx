// 7.Design a search filter component that consists of an input field. As the user types into the input, use controlled components to filter a list of items displayed below. The list should dynamically update to show only items matching the search query.

import { useState } from 'react'

const SearchFilter = () => {
  const itemsList = [
    'book',
    'pen',
    'chair',
    'table',
    'lamp',
    'computer',
    'shirt',
    'shoes',
    'phone',
    'water bottle',
  ]

  const [searchInput, setSearchInput] = useState('')
  const [displayedList, setDisplayedList] = useState(itemsList)

  const handleChange = (event) => {
    const { value } = event.target
    setSearchInput(value)
    setDisplayedList(itemsList.filter((item) => item.includes(value)))
  }
  return (
    <>
      <label htmlFor='search'>Search: </label>
      <input
        type='text'
        value={searchInput}
        id='search'
        onChange={handleChange}
        placeholder='Search items...'
      />
      <ul>
        {displayedList.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default SearchFilter
