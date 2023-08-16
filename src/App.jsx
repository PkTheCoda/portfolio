import './App.css'
import Navbar from './Components/Header'
import AboutMe from './Components/AboutSection'
import ToolsSection from './Components/ToolsSection'
import { Projects } from './Components/Projects'
import ContactSection from './Components/ContactSection'
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
    <>

      <Navbar />
      <AboutMe />
      <ToolsSection />
      <Projects />
      <ContactSection />
      <Analytics />

    </>
  )
}

export default App
