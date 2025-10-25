import { heroData } from '../data/hero.js';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Creative Background with multiple gradients */}
      <div className="hero-bg absolute inset-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800"></div>
        
        {/* Overlay gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-purple-600/30"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-pink-500/20 via-transparent to-cyan-500/20"></div>
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        
        {/* Creative animated waves */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="wave wave-1 absolute -top-20 left-0 w-full h-40 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl"></div>
          <div className="wave wave-2 absolute -top-10 left-0 w-full h-32 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-2xl"></div>
          <div className="wave wave-3 absolute -top-5 left-0 w-full h-24 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl"></div>
        </div>
      </div>

        {/* Creative floating elements with enhanced animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-element floating-1 absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="floating-element floating-2 absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"></div>
          <div className="floating-element floating-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
          <div className="floating-element floating-4 absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-green-400/20 to-teal-500/20 rounded-full blur-2xl"></div>
          <div className="floating-element floating-5 absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-rose-400/20 to-pink-500/20 rounded-full blur-3xl"></div>
          
          {/* Additional creative particles */}
          <div className="particle particle-1 absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full"></div>
          <div className="particle particle-2 absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full"></div>
          <div className="particle particle-3 absolute bottom-1/3 left-1/3 w-5 h-5 bg-pink-400 rounded-full"></div>
          <div className="particle particle-4 absolute bottom-1/4 right-1/4 w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="particle particle-5 absolute top-1/2 left-1/6 w-3 h-3 bg-green-400 rounded-full"></div>
          <div className="particle particle-6 absolute top-2/3 right-1/6 w-4 h-4 bg-orange-400 rounded-full"></div>
        </div>

      {/* Main Content */}
      <div className="hero-content relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
          <span className={`w-2 h-2 ${heroData.badge.dotColor} rounded-full mr-2 animate-pulse`}></span>
          <span className="text-sm font-medium">{heroData.badge.text}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="block text-white mb-2 animate-fade-in">{heroData.heading.line1}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 gradient-text animate-fade-in" style={{animationDelay: '0.3s'}}>
            {heroData.heading.line2}
          </span>
          <span className="block text-3xl sm:text-4xl lg:text-5xl font-light text-gray-300 mt-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
            {heroData.heading.line3}
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl sm:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          {heroData.description}
        </p>

        {/* CTA Buttons with Magnetic Effects */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          {heroData.buttons.map((button, index) => (
            <button 
              key={index}
              onClick={() => document.getElementById(button.action)?.scrollIntoView({ behavior: 'smooth' })}
              className={`magnetic-btn group relative px-8 py-4 ${
                button.type === 'primary' 
                  ? `bg-gradient-to-r ${button.gradient} text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-cyan-500/25 overflow-hidden`
                  : `border-2 ${button.border} text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm hover:bg-white/10 overflow-hidden`
              }`}
            >
              <span className="relative z-10">{button.text}</span>
              {button.type === 'primary' ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                </>
              ) : (
                <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
              )}
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          {heroData.stats.map((stat, index) => (
            <div key={index} className="stat-item group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className={`text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>{stat.value}</div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero