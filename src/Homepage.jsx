import HeroMain from './Components/HeroMain'
import AboutMe from './Components/AboutSection'
import ToolsSection from './Components/ToolsSection'
import { Projects } from './Components/Projects'
import ContactSection from './Components/ContactSection'
import { Analytics } from '@vercel/analytics/react';
import WavyLine from './Components/WavyLine'
import Header from './Components/Header'
import { Helmet } from 'react-helmet';

function Homepage() {

  return (
    <div>
        <Helmet>
          <html lang='en'></html>
          <title>Pranav Konjeti - Web Developer & Freelancer</title>
          <meta charSet='utf-8'/>
          <meta name="description" content="I'm Pranav, a 16-year-old web developer & freelancer with 3M+ website views & $4K+ in funding. Explore my portfolio for my work and experience."/>
        </Helmet>

        <Header />
        <HeroMain />
        <AboutMe />
        <ToolsSection />
        <Projects />
        <WavyLine />
        <ContactSection />
    </div>
  )
}

export default Homepage
