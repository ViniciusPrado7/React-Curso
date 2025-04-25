import { useState } from 'react'
import './App.css'
import { LanguageProvider } from './components/LanguageContext'
import Header from './components/Header'

function App() {

  return (
    <>
      <LanguageProvider>
        <Header />
      </LanguageProvider>
    </>
  )
}

export default App
