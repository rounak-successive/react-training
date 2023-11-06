import { useContext } from 'react'
import { Context } from './Question9'

const Theme = () => {
  const { currentTheme, toggleTheme } = useContext(Context)
  const themeColors = {
    light: {
      background: 'lightblue',
      primary: 'black',
      secondary: 'gold',
      tertiary: 'coral',
    },
    dark: {
      background: 'black',
      primary: 'darkgreen',
      secondary: 'darkgoldenrod',
      tertiary: 'darkorange',
    },
  }

  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: themeColors[currentTheme].background,
    padding: '20px',
    borderRadius: '10px',
    color: themeColors[currentTheme].primary,
  }

  const buttonStyle = {
    padding: '12px 24px',
    backgroundColor: themeColors[currentTheme].tertiary,
    color: 'white',
    border: `2px solid ${themeColors[currentTheme].primary}`,
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  }

  return (
    <div style={containerStyle}>
      <h2
        style={{
          fontSize: '36px',
          fontWeight: 'bold',
        }}
      >
        Theme Change Example
      </h2>
      <p
        style={{
          fontSize: '16px',
          marginBottom: '30px',
        }}
      >
        Observe how the theme changes the appearance
      </p>
      <button onClick={toggleTheme} style={buttonStyle}>
        Toggle Theme
      </button>
    </div>
  )
}

export default Theme
