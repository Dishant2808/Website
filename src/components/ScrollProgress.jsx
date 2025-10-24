import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ScrollProgress = () => {
  const progressRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Create progress bar
    const progressBar = document.createElement('div')
    progressBar.className = 'scroll-progress'
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 4px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
      z-index: 9999;
      transition: width 0.1s ease;
    `
    document.body.appendChild(progressBar)

    // Update progress on scroll
    const updateProgress = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.body.offsetHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      
      gsap.to(progressBar, {
        width: `${scrollPercent}%`,
        duration: 0.1,
        ease: 'power2.out'
      })
    }

    // Add scroll listener
    window.addEventListener('scroll', updateProgress)

    // Add scroll-triggered animations
    gsap.from('.scroll-progress', {
      scaleX: 0,
      duration: 0.5,
      ease: 'power2.out'
    })

    return () => {
      window.removeEventListener('scroll', updateProgress)
      progressBar.remove()
    }
  }, [])

  return null
}

export default ScrollProgress
