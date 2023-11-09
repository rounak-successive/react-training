// 4.You are given a simple form component (LoginForm) that contains input fields for username and password, as well as a submit button. Create test cases to verify that the form fields can be filled, and the submit button works correctly.

import { useState } from 'react'

const LoginForm = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const handleClick = (event) => {
    if (userName === 'Rounak' && password === 'abc123') {
      alert(`Welcome ${userName}`)
    } else {
      event.preventDefault()
      alert('Invalid Username or Password')
    }
  }

  return (
    <form>
      <input
        type='text'
        name='userName'
        placeholder='Enter your User Name'
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <input
        type='password'
        name='password'
        placeholder='Enter your Password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type='submit' onClick={handleClick}>
        Submit
      </button>
    </form>
  )
}

export default LoginForm
