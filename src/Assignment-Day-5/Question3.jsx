// 3. Add a loading indicator (e.g., a spinner) to the component. Display it while the data is being fetched and hide it once the data is loaded.

import { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'

const Question3Container = () => {
  const [data, setData] = useState('')
  const [isLoading, setLoading] = useState(false)
  const fetchData = async () => {
    setLoading(true)
    setData('')
    const newData = await fetch('https://catfact.ninja/fact')
      .then((response) => response.json())
      .then((data) => data.fact)
    setData(newData)
    setLoading(false)
  }
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>{data}</h1>
      {isLoading && <CircularProgress style={{ marginBottom: '5px' }} />}
      <Button variant='contained' onClick={fetchData}>
        Fetch Data
      </Button>
    </Box>
  )
}

export default Question3Container
