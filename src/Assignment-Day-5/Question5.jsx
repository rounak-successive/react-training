// 5.Create a React component that fetches data from a public API (e.g., JSONPlaceholder) using Axios and displays it on the page.

import { useState } from 'react'
import axios from 'axios'

const Question5Container = () => {
  const [data, setData] = useState('')

  const fetchData = async () => {
    setData('')
    const newData = await axios
      .get('https://catfact.ninja/fact')
      .then((response) => response.data)
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

export default Question5Container
