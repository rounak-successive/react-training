// 2.Implement error handling for the fetch request. Display an error message if the request fails and provide a way for the user to retry the request.

import { useState } from 'react'

const Question2Container = () => {
  const [data, setData] = useState('')
  const [error, setError] = useState('')

  const fetchData = async () => {
    setData('')
    try {
      const newData = await fetch('https://catfact.ninja/fact')
        .then((response) => response.json())
        .then((data) => data.fact)
      setData(newData)
      setError('')
    } catch (error) {
      setError('We have encountered some unexpected error. Please try again.')
    }
  }

  return (
    <>
      {error ? <p>{error}</p> : <h1>{data}</h1>}
      <button onClick={fetchData}>Fetch Data</button>
    </>
  )
}

export default Question2Container
