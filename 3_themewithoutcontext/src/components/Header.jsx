import React,{useState} from 'react'

const Header = ({theme, toggleTheme}) => {

  return (
    <header>
        <h1>App Theme:{theme} </h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  )
}

export default Header