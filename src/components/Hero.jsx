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
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          <span className="text-sm font-medium">Available for new projects</span>
        </div>

        {/* Main Heading with Typewriter Effect */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="block text-white mb-2 typewriter-text">Full-Stack</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 gradient-text">
            Development
          </span>
          <span className="block text-3xl sm:text-4xl lg:text-5xl font-light text-gray-300 mt-4 fade-in-text">
            Excellence
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl sm:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          We are a team of passionate developers delivering cutting-edge web applications, 
          mobile solutions, and digital experiences that drive business growth.
        </p>

        {/* CTA Buttons with Magnetic Effects */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="magnetic-btn group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-cyan-500/25 overflow-hidden"
          >
            <span className="relative z-10">Get Started Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
          </button>
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="magnetic-btn group relative px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm hover:bg-white/10 overflow-hidden"
          >
            <span className="relative z-10">View Our Work</span>
            <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
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