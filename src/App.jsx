import { useContext, useEffect, useState } from 'react';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeContext } from './context/ThemeContext'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'

function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  console.log(theme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NavBar />
      <Home />
    </ThemeContext.Provider>
  )
}

export default App
