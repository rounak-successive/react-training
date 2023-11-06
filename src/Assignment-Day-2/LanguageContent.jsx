import { useContext } from 'react'
import { LanguageContext } from './Question10'

const LanguageContent = () => {
  const { currentLanguage, changeLanguage } = useContext(LanguageContext)

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h2>
        {currentLanguage === 'english'
          ? 'Hello, how are you?'
          : '¡Hola, ¿cómo estás?'}
      </h2>
      <p>{currentLanguage === 'english' ? 'Goodbye!' : '¡Adiós!'}</p>
      <p>
        {currentLanguage === 'english'
          ? ' Did you know? The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion!'
          : '¿Sabías que? La torre Eiffel puede ser 15 cm más alta durante el verano debido a la expansión térmica.'}
      </p>
      <button onClick={changeLanguage}>
        {currentLanguage === 'english'
          ? 'Switch to Spanish'
          : 'Cambiar a Inglés'}
      </button>
    </div>
  )
}

export default LanguageContent
