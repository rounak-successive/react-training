// 18.Design a custom hook named useLocalStorage to interact with local storage.
// Create a useLocalStorage hook that allows storing and retrieving data from local storage.
// Implement methods for setting, getting, and removing data using the hook.
// Utilize the localStorage API within the hook to manage data.
// Develop a component that uses the useLocalStorage hook to manage user preferences.

import { useState, useEffect } from 'react'

const useLocalStorage = () => {
  const setData = (key, value) => localStorage.setItem(key, value)

  const getData = (key) => localStorage.getItem(key)

  const removeItem = (key) => localStorage.removeItem(key)

  return { setData, getData, removeItem }
}

const UserPreferences = () => {
  const { setData, removeItem } = useLocalStorage()
  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('english')

  useEffect(() => {
    if (theme !== '') setData('theme', theme)
  }, [setData, theme])

  useEffect(() => {
    if (language !== '') setData('language', language)
  }, [language, setData])

  const handleThemeChange = (event) => {
    setTheme(event.target.value)
  }

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value)
  }

  const clearThemePreference = () => {
    removeItem('theme')
    setTheme('')
  }

  const clearLanguagePreference = () => {
    removeItem('language')
    setLanguage('')
  }

  return (
    <div>
      <h2>User Preferences</h2>
      <div>
        <h3>Theme Preference:</h3>
        <select value={theme} onChange={handleThemeChange}>
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
        </select>
        <button onClick={clearThemePreference}>Clear Theme Preference</button>
        {theme && <p>Current Theme: {theme}</p>}
      </div>
      <div>
        <h3>Language Preference:</h3>
        <select value={language} onChange={handleLanguageChange}>
          <option value='english'>English</option>
          <option value='spanish'>Spanish</option>
        </select>
        <button onClick={clearLanguagePreference}>
          Clear Language Preference
        </button>
        {language && <p>Current Language: {language}</p>}
      </div>
    </div>
  )
}

export default UserPreferences
