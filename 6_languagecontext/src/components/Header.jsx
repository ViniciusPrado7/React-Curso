import React from 'react'
import { useLanguage } from './LanguageContext'

const Header = () => {
    const { language, switchLanguage } = useLanguage()

  return (
    <header>
        <h1>
            {language === "pt" ? 'Olá Mundo!' : 'Hello, World'}
        </h1>
        <button onClick={switchLanguage}>
            {language === "pt" ? 'Mudar para Ingês' : "Switch Portuguese"}
        </button>
    </header>
  )
}

export default Header