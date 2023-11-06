// 7.Create a functional component called Notification.
// Use the useState hook to manage a state variable named message initialized to an empty string.
// Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
// Render the notification message in a <div> element.
// After 5 seconds, clear the message to hide the notification.

import { useState, useEffect } from 'react'

const Notification = () => {
  const [message, setMessage] = useState('')
  const [notificaton, setNotification] = useState('')
  useEffect(() => {
    setNotification('Message Changed')
    const timeout = setTimeout(() => setNotification(''), 5000)

    return () => clearTimeout(timeout)
  }, [message])

  return (
    <>
      <div
        style={{
          textAlign: 'center',
          fontSize: '18px',
        }}
      >
        {notificaton}
      </div>
      <button
        style={{ display: 'block', margin: '0 auto' }}
        onClick={() => setMessage(Date.now())}
      >
        Change Message
      </button>
    </>
  )
}

export default Notification
