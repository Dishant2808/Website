import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Pricing = () => {
  const [hoveredPlan, setHoveredPlan] = useState(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Animate pricing cards on scroll
    gsap.from('.pricing-card', {
      scrollTrigger: {
        trigger: '.pricing-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
      ease: 'power3.out'
    })
    
    // Hover animations
    gsap.utils.toArray('.pricing-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -20,
          scale: 1.05,
          duration: 0.4,
          ease: 'power2.out'
        })
      })
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out'
        })
      })
    })
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const plans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "per project",
      description: "Perfect for small businesses and startups",
      features: [
        "Responsive Website Design",
        "Up to 5 Pages",
        "Basic SEO Optimization",
        "Contact Form",
        "1 Month Support",
        "Mobile Optimization"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "per project",
      description: "Ideal for growing businesses",
      features: [
        "Custom Web Application",
        "Up to 15 Pages",
        "Advanced SEO",
        "E-commerce Integration",
        "3 Months Support",
        "Performance Optimization",
        "Analytics Setup",
        "Content Management"
      ],
      popular: true,
      color: "purple"
    },
    {
      name: "Enterprise",
      price: "$15,999",
      period: "per project",
      description: "Complete digital transformation",
      features: [
        "Full-Stack Application",
        "Unlimited Pages",
        "Custom Features",
        "API Development",
        "6 Months Support",
        "Advanced Analytics",
        "Security Implementation",
        "Scalability Planning",
        "Team Training"
      ],
      popular: false,
      color: "indigo"
    }
  ]

  return (
    <section className="pricing-section py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your project. No hidden fees, no surprises. 
            Just transparent pricing for exceptional results.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative bg-white rounded-2xl shadow-lg p-8 border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500 scale-105' 
                  : 'border-gray-200 hover:border-purple-300'
              }`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
              </div>
              
              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <button 
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              Every project is unique. Contact us for a personalized quote tailored to your specific requirements.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
