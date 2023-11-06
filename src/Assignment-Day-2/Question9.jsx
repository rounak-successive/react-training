// 9.Create a theme switcher application using the useContext hook.
// Create a context to manage the current theme (e.g., light or dark).
// Provide a button to toggle between the two themes.
// Use the useContext hook to access the theme value and update it.
// Apply different styles and colors to components based on the selected theme.

import React, { createContext, useState } from 'react'
import Theme from './Theme'

export const Context = createContext()

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState('light')

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <Context.Provider value={{ currentTheme, toggleTheme }}>
        <Theme />
      </Context.Provider>
    </div>
  )
}

export default ThemeSwitcher
