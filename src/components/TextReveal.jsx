import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const TextReveal = ({ children, className = '', delay = 0 }) => {
  const textRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const text = textRef.current
    if (!text) return

    // Split text into words for animation
    const words = text.textContent.split(' ')
    text.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ')

    // Set initial state
    gsap.set('.word', { opacity: 0, y: 50 })

    // Animate words on scroll
    gsap.to('.word', {
      scrollTrigger: {
        trigger: text,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: delay,
      ease: 'power3.out'
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [delay])

  return (
    <div ref={textRef} className={`text-reveal ${className}`}>
      {children}
    </div>
  )
}

export default TextReveal
