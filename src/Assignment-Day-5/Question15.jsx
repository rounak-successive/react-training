// 15.Build an HOC called withLogger that logs the events of a component (e.g., mounting, unmounting, updating). Apply this HOC to a component and display the logs in the browser console.

import { useEffect, useState } from 'react'

const DemoComponent = ({ setFlag }) => {
  const toggleState = () => {
    setFlag((prevState) => !prevState)
  }
  return <button onClick={toggleState}>Change State</button>
}

const withLogger = (Component) => {
  return function LoggedComponent(props) {
    const [flag, setFlag] = useState(false)
    useEffect(() => {
      console.log('Mounted')

      return () => console.log('Unmounted')
    }, [])

    useEffect(() => console.log('Updated'), [flag])

    return <Component {...props} setFlag={setFlag} />
  }
}

export default withLogger(DemoComponent)
