import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedBackground from './AnimatedBackground'

const Hero = () => {
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const statsRef = useRef(null)
  const floatingElementsRef = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Hero entrance animation with more creative effects
    const tl = gsap.timeline()
    
    // Animate background with morphing effect
    tl.from('.hero-bg', {
      scale: 1.2,
      opacity: 0,
      duration: 2.5,
      ease: 'power3.out'
    })
    
    // Animate floating elements with wave motion
    tl.from('.floating-element', {
      y: 150,
      opacity: 0,
      rotation: 180,
      duration: 2,
      stagger: 0.3,
      ease: 'back.out(1.7)'
    }, '-=2')
    
    // Animate main content with typewriter effect
    tl.from('.hero-content h1', {
      y: 80,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out'
    }, '-=1.5')
    
    tl.from('.hero-content p', {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    }, '-=1')
    
    tl.from('.hero-content .flex', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5')
    
    // Animate stats with counting effect
    tl.from('.stat-item', {
      scale: 0,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    }, '-=0.5')
    
    // Continuous floating animation with wave motion
    gsap.to('.floating-element', {
      y: -30,
      rotation: 5,
      duration: 4,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    })
    
    // Parallax effect on scroll
    gsap.to('.hero-bg', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-bg',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
    
    // Add magnetic effect to buttons
    gsap.utils.toArray('.hero-content button').forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.1,
          rotation: 2,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    })
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Particles */}
      <AnimatedBackground />
      
      {/* Creative Background with multiple gradients */}
      <div className="hero-bg absolute inset-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800"></div>
        
        {/* Overlay gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-purple-600/30"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-pink-500/20 via-transparent to-cyan-500/20"></div>
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      </div>

      {/* Creative floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="floating-element absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"></div>
        <div className="floating-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
        <div className="floating-element absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-green-400/20 to-teal-500/20 rounded-full blur-2xl"></div>
        <div className="floating-element absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-rose-400/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="hero-content relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          <span className="text-sm font-medium">Available for new projects</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="block text-white mb-2">Full-Stack</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
            Development
          </span>
          <span className="block text-3xl sm:text-4xl lg:text-5xl font-light text-gray-300 mt-4">
            Excellence
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl sm:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
          We are a team of passionate developers delivering cutting-edge web applications, 
          mobile solutions, and digital experiences that drive business growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
          >
            <span className="relative z-10">Get Started Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10"
          >
            <span className="relative z-10">View Our Work</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="stat-item group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
            <div className="text-gray-300 font-medium">Projects Completed</div>
          </div>
          <div className="stat-item group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
            <div className="text-gray-300 font-medium">Years Experience</div>
          </div>
          <div className="stat-item group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
            <div className="text-gray-300 font-medium">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Creative Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-white/60 hover:text-white transition-colors duration-300">
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
