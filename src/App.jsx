import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Header'
import ButtonGradient from './Components/ButtonGradient'
import AboutMe from './Components/AboutSection'
import ToolsSection from './Components/ToolsSection'

function App() {

  return (
    <>
      <Navbar />
      <AboutMe />
      <ToolsSection />
    </>
  )
}

export default App
