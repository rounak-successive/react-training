// 14.Create an HOC named withAuth that restricts access to a specific component to authenticated users only. Implement this HOC on a sample component and demonstrate how it protects routes.

import { useState, useRef, createContext, useContext } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

const AuthenticationContext = createContext({})

const Home = () => {
  return (
    <div style={{ alignContent: 'center' }}>
      <h2>Welcome, Users. This is the Home Page</h2>
    </div>
  )
}

const Login = () => {
  const { setAuthenticated } = useContext(AuthenticationContext)
  const navigate = useNavigate()

  const userNameRef = useRef()
  const passwordRef = useRef()
  const validUserName = 'Rounak'
  const validPassword = 'abc123'

  const handleSubmit = () => {
    const userName = userNameRef.current.value
    const passWord = passwordRef.current.value
    if (userName === validUserName && passWord === validPassword) {
      setAuthenticated(true)
      navigate('..')
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
        <button type='button' onClick={handleSubmit}>
          Login
        </button>
      </form>
    </>
  )
}

const withAuth = (WrappedComponent) => {
  return function AuthenticatedComponent(props) {
    const { isAuthenticated } = useContext(AuthenticationContext)

    if (isAuthenticated) {
      return <WrappedComponent {...props} />
    } else {
      return <Navigate to='login' />
    }
  }
}

const Question14Container = () => {
  const [isAuthenticated, setAuthenticated] = useState(false)
  const AuthenticatedHome = withAuth(Home)
  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated, setAuthenticated }}
    >
      <Routes>
        <Route path='/' element={<AuthenticatedHome />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </AuthenticationContext.Provider>
  )
}

export default Question14Container
