import { useEffect } from 'react'
import AOS from 'aos'

import './App.css'

import Navbar from './components/Navbar/Navbar.tsx'
import Hero from './components/Hero/Hero.tsx'
import KeywordsMarquee from './components/KeywordsMarquee/KeywordsMarquee.tsx'
import Experience from './components/Experience/Experience.tsx'
import LearningJourney from './components/LearningJourney/LearningJourney.tsx'
import GeneralInfo from './components/GeneralInfo/GeneralInfo.tsx'
import Projects from './components/Projects/Projects.tsx'
import Certification from './components/Certification/Certification.tsx'
import Education from './components/Education/Education.tsx'
import Skills from './components/Skills/Skills.tsx'
import Utills from './components/Utills/Utills.tsx'
import Footer from './components/Footer/Footer.tsx'



function App() {

  useEffect(() => {
      AOS.init({
        duration: 1500,
        once: true,
      })
    }, [])

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <KeywordsMarquee />
      <main className="container pb-5">
        <div className="row justify-content-center align-items-start g-4">
          <div className="col-12 col-lg-3">
            <GeneralInfo />
          </div>
          <div className="col-12 col-lg-9">
            <Experience />
            <LearningJourney />
            <Projects />
            <Certification />
            <Education />
            <Skills />
            <Utills />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
