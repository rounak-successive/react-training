// 1.create two components: a parent component that acts as a provider and a child component that consumes the context.
// Create a context to manage a user's authentication status (logged in or out).
// Implement a login button in the child component that, when clicked, updates the authentication status in the context to "logged in."
// Display a message in the child component based on the user's authentication status. If the user is logged in, show "Welcome, [username]!" Otherwise, display "Please log in."

import { useContext, createContext, useState } from 'react'

const ParentContext = createContext()
const Parent = () => {
  const [authenticationStatus, setAuthenticationStatus] = useState('logged out')
  const changeAuthenticationStatus = () => {
    setAuthenticationStatus((prevState) =>
      prevState === 'logged out' ? 'logged in' : 'logged out'
    )
  }
  return (
    <ParentContext.Provider
      value={{ authenticationStatus, changeAuthenticationStatus }}
    >
      <h2>Welcome to the Parent Component</h2>
      <Child />
    </ParentContext.Provider>
  )
}
const Child = () => {
  const { authenticationStatus, changeAuthenticationStatus } =
    useContext(ParentContext)
  return (
    <>
      <p>Welcome to the Child Component</p>
      <button onClick={changeAuthenticationStatus}>
        {' '}
        {authenticationStatus === 'logged in' ? 'Logout' : 'Login'}
      </button>
      <h2>
        {authenticationStatus === 'logged in'
          ? 'Welcome,Rounak'
          : 'Please Log In'}
      </h2>
    </>
  )
}

export default Parent
