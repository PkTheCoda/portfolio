import HeroMain from './Components/HeroMain'
import AboutMe from './Components/AboutSection'
import ToolsSection from './Components/ToolsSection'
import { Projects } from './Components/Projects'
import ContactSection from './Components/ContactSection'
import { Analytics } from '@vercel/analytics/react';
import WavyLine from './Components/WavyLine'
import Header from './Components/Header'

function Homepage() {

  return (
    <>
      <Header />
      <HeroMain />
      <AboutMe />
      <ToolsSection />
      <Projects />
      <WavyLine />
      <ContactSection />
    </>
  )
}

export default Homepage
