import { useEffect, useState } from 'react'
import { gsap } from 'gsap'

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const tl = gsap.timeline()
    
    // Loading animation
    tl.to('.loading-spinner', {
      rotation: 360,
      duration: 1,
      ease: 'power2.inOut',
      repeat: -1
    })
    
    // Hide loading after 2 seconds
    setTimeout(() => {
      tl.to('.loading-overlay', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          setIsLoading(false)
        }
      })
    }, 2000)
  }, [])

  if (!isLoading) return null

  return (
    <div className="loading-overlay fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 z-50 flex items-center justify-center pointer-events-none">
      <div className="text-center text-white">
        <div className="loading-spinner w-16 h-16 border-4 border-white/30 border-t-white rounded-full mb-4 mx-auto"></div>
        <h2 className="text-2xl font-bold mb-2">Krishna WebWorks</h2>
        <p className="text-lg opacity-90">Loading amazing experiences...</p>
      </div>
    </div>
  )
}

export default LoadingAnimation
