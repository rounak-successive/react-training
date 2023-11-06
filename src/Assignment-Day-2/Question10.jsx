// 10.Develop a language switcher application using the useContext hook.
// Create a context to manage the current language (e.g., English or Spanish).
// Provide buttons to switch between languages.
// Use the useContext hook to access the current language value.
// Display different language versions of the application's content.

import { createContext, useState } from 'react'
import LanguageContent from './LanguageContent'

export const LanguageContext = createContext()

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState('english')

  const changeLanguage = () => {
    setCurrentLanguage(currentLanguage === 'english' ? 'spanish' : 'english')
  }

  return (
    <div>
      <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
        <LanguageContent />
      </LanguageContext.Provider>
    </div>
  )
}

export default LanguageSwitcher
