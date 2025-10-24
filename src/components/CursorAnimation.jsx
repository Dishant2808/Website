import { useEffect } from 'react'
import { gsap } from 'gsap'

const CursorAnimation = () => {
  useEffect(() => {
    // Create custom cursor
    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: linear-gradient(45deg, #3b82f6, #8b5cf6);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
      transition: transform 0.1s ease;
    `
    document.body.appendChild(cursor)

    // Create cursor trail
    const trail = document.createElement('div')
    trail.className = 'cursor-trail'
    trail.style.cssText = `
      position: fixed;
      width: 8px;
      height: 8px;
      background: rgba(59, 130, 246, 0.3);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
    `
    document.body.appendChild(trail)

    // Mouse move animation
    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.1,
        ease: 'power2.out'
      })

      gsap.to(trail, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    // Hover effects
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 2,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove)
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .service-card, .portfolio-item, .team-member')
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    })

    // Hide default cursor
    document.body.style.cursor = 'none'

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      })
      document.body.style.cursor = 'auto'
      cursor.remove()
      trail.remove()
    }
  }, [])

  return null
}

export default CursorAnimation
