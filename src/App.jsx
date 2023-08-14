import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Header'
import ButtonGradient from './Components/ButtonGradient'
import AboutMe from './Components/AboutSection'

function App() {

  return (
    <>
      <Navbar />
      <AboutMe />
    </>
  )
}

export default App
