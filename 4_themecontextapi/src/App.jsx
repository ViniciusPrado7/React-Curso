import React from 'react'
import { ThemeProvider, useTheme } from './components/ThemeContext'


import './App.css'
import Header from './components/Header'
import Content from './components/Content'

const ThemedApp = () => {
  const {theme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Header></Header>
      <Content></Content>
    </div>
  )
}

function App() {

  return (
    <ThemeProvider>
      <ThemedApp></ThemedApp>
    </ThemeProvider>
  )
}

export default App
