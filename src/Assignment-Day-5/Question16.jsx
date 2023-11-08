// 16.Develop an HOC named withDataFetching that fetches data from an API and passes it as props to a component. Use this HOC to retrieve and display data in a component.

import React, { useState, useEffect } from 'react'
import axios from 'axios'

const withDataFetching = (WrappedComponent) => {
  const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/get-news',
    params: {
      tconst: 'tt0944947',
      limit: '25',
    },
    headers: {
      'X-RapidAPI-Key': 'e23e23b505msh762e4188dbf3778p14f067jsndafaa77ddaf2',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
    },
  }

  const fetchData = async () => {
    return await axios.request(options)
  }

  return function WithDataFetching(props) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
      setIsLoading(true)
      fetchData()
        .then((response) => {
          setData(response?.data?.items)
          setIsLoading(false)
        })
        .catch((error) => {
          setError(error)
          setIsLoading(false)
        })
    }, [])

    if (isLoading) {
      return <p>Loading...</p>
    }

    if (error) {
      return <p>Error: {error.message}</p>
    } else {
      return <WrappedComponent data={data} {...props} />
    }
  }
}

const DisplayData = ({ data }) => {
  return (
    <div>
      <h1>Displaying Fetched Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.head}</li>
        ))}
      </ul>
    </div>
  )
}

const DataDisplayWithDataFetching = withDataFetching(DisplayData)

export default DataDisplayWithDataFetching
