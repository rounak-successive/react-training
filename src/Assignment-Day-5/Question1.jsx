// 1.Create a React component that fetches data from a public API (e.g., JSONPlaceholder) and displays it on the page. Use the fetch function to make the request.

import { useState } from 'react'

const Question1Container = () => {
  const [data, setData] = useState('')
  const fetchData = async () => {
    setData('')
    const newData = await fetch('https://catfact.ninja/fact')
      .then((response) => response.json())
      .then((data) => data.fact)
    setData(newData)
  }
  return (
    <>
      <h1>{data}</h1>
      <button onClick={fetchData}>Fetch Data</button>
    </>
  )
}

export default Question1Container
