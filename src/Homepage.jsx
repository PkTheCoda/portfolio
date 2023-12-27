import Navbar from './Components/Header'
import AboutMe from './Components/AboutSection'
import ToolsSection from './Components/ToolsSection'
import { Projects } from './Components/Projects'
import ContactSection from './Components/ContactSection'
import { Analytics } from '@vercel/analytics/react';
import WavyLine from './Components/WavyLine'

function Homepage() {

  return (
    <>
      <Navbar />
      <AboutMe />
      <ToolsSection />
      <Projects />
      <WavyLine />
      <ContactSection />
      <Analytics />
    </>
  )
}

export default Homepage
