// 2. Extend the previous application to demonstrate the use of nested contexts.
// Create a new context to manage user preferences (e.g., theme preference).
// Modify the parent component to provide both the authentication and preferences contexts.
// Create a child component that consumes both contexts.
// Allow the user to change their theme preference (light/dark) using a button in the child component.
// Display the theme preference in the UI and adjust the component's styling accordingly.

import { useContext, createContext, useState } from 'react'

const AuthenticationContext = createContext(),
  ThemeContext = createContext()

const Question2Container = () => {
  const [authenticationStatus, setAuthenticationStatus] = useState('logged out')
  const changeAuthenticationStatus = () => {
    setAuthenticationStatus((prevState) =>
      prevState === 'logged out' ? 'logged in' : 'logged out'
    )
  }
  const [theme, setTheme] = useState('light')
  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }
  return (
    <AuthenticationContext.Provider
      value={{ authenticationStatus, changeAuthenticationStatus }}
    >
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <h1
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
          }}
        >
          Parent Component
        </h1>
        <Child />
      </ThemeContext.Provider>
    </AuthenticationContext.Provider>
  )
}
const Child = () => {
  const { authenticationStatus, changeAuthenticationStatus } = useContext(
    AuthenticationContext
  )
  const { theme, changeTheme } = useContext(ThemeContext)

  const themeColors = {
    light: {
      primary: 'black',
      secondary: 'gold',
      tertiary: 'blue',
    },
    dark: {
      background: 'black',
      primary: 'darkgreen',
      secondary: 'darkgoldenrod',
      tertiary: 'darkorange',
    },
  }

  const containerStyle = {
    marginTop: '20px',
    backgroundColor: themeColors[theme].background,
    padding: '20px',
    borderRadius: '10px',
    color: themeColors[theme].primary,
  }

  const buttonStyle = {
    padding: '12px 24px',
    backgroundColor: themeColors[theme].tertiary,
    color: 'white',
    border: `2px solid ${themeColors[theme].primary}`,
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  }

  return (
    <section style={containerStyle}>
      <h2
        style={{
          fontSize: '28px',
          fontWeight: 'bold',
        }}
      >
        Child Component
      </h2>
      <div
        style={{
          fontSize: '16px',
          marginBottom: '30px',
        }}
      >
        <button onClick={changeAuthenticationStatus} style={buttonStyle}>
          {' '}
          {authenticationStatus === 'logged in' ? 'Logout' : 'Login'}
        </button>
        <h2>
          {authenticationStatus === 'logged in'
            ? 'Welcome,Rounak'
            : 'Please Log In'}
        </h2>
      </div>
      <button onClick={changeTheme} style={buttonStyle}>
        Toggle Theme
      </button>
    </section>
  )
}

export default Question2Container
