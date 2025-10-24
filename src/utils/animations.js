import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Hero section animations
export const heroAnimations = () => {
  const tl = gsap.timeline()
  
  // Animate background elements
  tl.from('.hero-bg', {
    scale: 1.1,
    opacity: 0,
    duration: 2,
    ease: 'power2.out'
  })
  
  // Animate floating elements
  tl.from('.floating-element', {
    y: 100,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: 'back.out(1.7)'
  }, '-=1.5')
  
  // Animate main content
  tl.from('.hero-content', {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  }, '-=1')
  
  // Animate stats
  tl.from('.stat-item', {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'back.out(1.7)'
  }, '-=0.5')
  
  // Continuous floating animation for background elements
  gsap.to('.floating-element', {
    y: -20,
    duration: 3,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1
  })
}

// Scroll-triggered animations for sections
export const scrollAnimations = () => {
  // Services section
  gsap.from('.service-card', {
    scrollTrigger: {
      trigger: '.service-card',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  })
  
  // Portfolio section
  gsap.from('.portfolio-item', {
    scrollTrigger: {
      trigger: '.portfolio-item',
      start: 'top 85%',
      end: 'bottom 15%',
      toggleActions: 'play none none reverse'
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'back.out(1.7)'
  })
  
  // Team section
  gsap.from('.team-member', {
    scrollTrigger: {
      trigger: '.team-member',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    },
    y: 80,
    opacity: 0,
    duration: 1.2,
    stagger: 0.1,
    ease: 'power3.out'
  })
  
  // Contact section
  gsap.from('.contact-form', {
    scrollTrigger: {
      trigger: '.contact-form',
      start: 'top 85%',
      end: 'bottom 15%',
      toggleActions: 'play none none reverse'
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })
  
  gsap.from('.contact-info', {
    scrollTrigger: {
      trigger: '.contact-info',
      start: 'top 85%',
      end: 'bottom 15%',
      toggleActions: 'play none none reverse'
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })
}

// Interactive hover animations
export const hoverAnimations = () => {
  // Service cards hover
  gsap.utils.toArray('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })
  
  // Portfolio items hover
  gsap.utils.toArray('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        y: -15,
        scale: 1.03,
        duration: 0.4,
        ease: 'power2.out'
      })
    })
    
    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
    })
  })
  
  // Team members hover
  gsap.utils.toArray('.team-member').forEach(member => {
    member.addEventListener('mouseenter', () => {
      gsap.to(member, {
        y: -8,
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
    
    member.addEventListener('mouseleave', () => {
      gsap.to(member, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })
}

// Button animations
export const buttonAnimations = () => {
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
    
    button.addEventListener('mousedown', () => {
      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        ease: 'power2.out'
      })
    })
    
    button.addEventListener('mouseup', () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.1,
        ease: 'power2.out'
      })
    })
  })
}

// Text reveal animations
export const textRevealAnimations = () => {
  gsap.utils.toArray('.text-reveal').forEach(text => {
    gsap.from(text, {
      scrollTrigger: {
        trigger: text,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
  })
}

// Loading animation
export const loadingAnimation = () => {
  const tl = gsap.timeline()
  
  tl.from('.loading-spinner', {
    rotation: 0,
    duration: 1,
    ease: 'power2.inOut'
  })
  
  tl.to('.loading-spinner', {
    rotation: 360,
    duration: 1,
    ease: 'power2.inOut',
    repeat: -1
  })
}

// Parallax scrolling effects
export const parallaxAnimations = () => {
  gsap.utils.toArray('.parallax-element').forEach(element => {
    gsap.to(element, {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
  })
}

// Initialize all animations
export const initAnimations = () => {
  heroAnimations()
  scrollAnimations()
  hoverAnimations()
  buttonAnimations()
  textRevealAnimations()
  parallaxAnimations()
}
