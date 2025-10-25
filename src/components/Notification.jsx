import { useEffect, useState } from 'react'
import { gsap } from 'gsap'

const Notification = ({ message, type = 'success', isVisible, onClose }) => {
  const [show, setShow] = useState(isVisible)

  useEffect(() => {
    setShow(isVisible)
    
    if (isVisible) {
      // Animate in
      gsap.fromTo('.notification', 
        { 
          y: -100, 
          opacity: 0, 
          scale: 0.8 
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.5,
          ease: 'back.out(1.7)'
        }
      )

      // Auto close after 5 seconds
      const timer = setTimeout(() => {
        handleClose()
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [isVisible])

  const handleClose = () => {
    gsap.to('.notification', {
      y: -100,
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        setShow(false)
        onClose()
      }
    })
  }

  if (!show) return null

  const getIcon = () => {
    if (type === 'success') {
      return (
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    } else if (type === 'error') {
      return (
        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )
    } else {
      return (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  }

  const getBgColor = () => {
    if (type === 'success') return 'bg-green-50 border-green-200'
    if (type === 'error') return 'bg-red-50 border-red-200'
    return 'bg-blue-50 border-blue-200'
  }

  const getTextColor = () => {
    if (type === 'success') return 'text-green-800'
    if (type === 'error') return 'text-red-800'
    return 'text-blue-800'
  }

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm w-full">
      <div className={`notification ${getBgColor()} border rounded-lg shadow-lg p-4 flex items-start space-x-3`}>
        <div className="flex-shrink-0">
          {getIcon()}
        </div>
        <div className="flex-1">
          <p className={`text-sm font-medium ${getTextColor()}`}>
            {message}
          </p>
        </div>
        <button
          onClick={handleClose}
          className="flex-shrink-0 ml-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Notification
