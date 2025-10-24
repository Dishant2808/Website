import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingAnimation from './components/LoadingAnimation'
import CursorAnimation from './components/CursorAnimation'
import ScrollProgress from './components/ScrollProgress'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Global button animations
    gsap.utils.toArray('button').forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.2,
          ease: 'power2.out'
        })
      })
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.2,
          ease: 'power2.out'
        })
      })
    })
    
    // Smooth scrolling for navigation links
    gsap.utils.toArray('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const target = document.querySelector(link.getAttribute('href'))
        if (target) {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: target, offsetY: 80 },
            ease: 'power2.inOut'
          })
        }
      })
    })
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <LoadingAnimation />
      <CursorAnimation />
      <ScrollProgress />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <Services />
      <Features />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
