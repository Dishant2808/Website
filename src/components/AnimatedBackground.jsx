import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const AnimatedBackground = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create floating particles
    const createParticle = () => {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        pointer-events: none;
      `
      container.appendChild(particle)
      return particle
    }

    // Create multiple particles
    const particles = []
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle())
    }

    // Animate particles
    particles.forEach((particle, index) => {
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      })

      gsap.to(particle, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        duration: Math.random() * 10 + 5,
        ease: 'none',
        repeat: -1,
        yoyo: true,
        delay: index * 0.1
      })
    })

    // Mouse interaction
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      
      const deltaX = (clientX - centerX) / centerX
      const deltaY = (clientY - centerY) / centerY

      gsap.to(particles, {
        x: `+=${deltaX * 20}`,
        y: `+=${deltaY * 20}`,
        duration: 0.5,
        ease: 'power2.out'
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      particles.forEach(particle => particle.remove())
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ overflow: 'hidden' }}
    />
  )
}

export default AnimatedBackground
