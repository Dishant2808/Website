import { useState } from 'react'
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
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <LoadingAnimation />
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
