import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Certifications from './components/Certifications/Certifications'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import styles from './App.module.css'

function App() {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark'
    document.documentElement.setAttribute('data-theme', theme)
  }, [])

  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.main}>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
