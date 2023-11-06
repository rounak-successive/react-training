// 4.Enhance the previous application by adding protected routes that require authentication.
// Create a login page with a form that accepts a username and password.
// Implement authentication logic (e.g., hardcode a username and password for now).
// Secure the About page so that it can only be accessed by authenticated users.
// Redirect unauthenticated users to the login page.
// Display a message on the Home page welcoming the authenticated user.

import { Routes, Route, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import NotFound from '../NotFound'
import About from './About'

const Home = ({ loggedIn }) => {
  const navigate = useNavigate()
  const navigateToAbout = () => {
    if (loggedIn) navigate('about')
    else {
      navigate('login')
    }
  }

  return (
    <div style={{ alignContent: 'center' }}>
      <h2>Welcome to Home Page {loggedIn}</h2>
      {loggedIn && <h3>Welcome Rounak</h3>}
      <button onClick={navigateToAbout}>Go to About </button>
    </div>
  )
}

const Login = ({ setLoggedIn }) => {
  const navigate = useNavigate()
  const userNameRef = useRef(),
    passwordRef = useRef()
  const validUserName = 'Rounak',
    validPassword = 'abc123'
  const handleSubmit = () => {
    const userName = userNameRef.current.value,
      passWord = passwordRef.current.value
    if (userName === validUserName && passWord === validPassword) {
      setLoggedIn(true)
      navigate('../about')
    } else {
      alert('Enter Valid Username and Password')
    }
  }
  return (
    <>
      <h2>Please Login first</h2>
      <form>
        <input placeholder='Enter Username' type='text' ref={userNameRef} />
        <input placeholder='Enter Password' type='password' ref={passwordRef} />
        <button type='submit' onClick={handleSubmit}>
          Login
        </button>
      </form>
    </>
  )
}

const Question4Container = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <Routes>
      <Route path='/' element={<Home loggedIn={loggedIn} />} />
      <Route path='/login' element={<Login setLoggedIn={setLoggedIn} />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Question4Container
