import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/layout/LoadingScreen'
import ParticlesBackground from './components/layout/ParticlesBackground'
import Navbar from './components/layout/Navbar'
import BackToTop from './components/layout/BackToTop'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen">
          <ParticlesBackground />
          <div className="relative z-10">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Certifications />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
          </div>
        </div>
      )}
    </>
  )
}

export default App
