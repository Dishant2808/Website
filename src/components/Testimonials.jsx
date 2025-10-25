import { testimonials, stats } from '../data/testimonials'

const Testimonials = () => {

  return (
    <section className="testimonials-section py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 mb-4">
            <span className="text-blue-600 font-semibold">Client Testimonials</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-3">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Krishna WebWorks.
          </p>
        </div>

        {/* Testimonials Grid with Professional Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-stagger"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Quote Icon with Animation */}
              <div className="flex justify-end mb-4">
                <svg className="w-6 h-6 text-blue-200 animate-scale-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              
              {/* Project Badge with Animation */}
              <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 animate-text-reveal">
                {testimonial.project}
              </div>
              
              {/* Rating with Staggered Animation */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 animate-scale-bounce" style={{animationDelay: `${i * 0.1}s`}} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              
              {/* Content with Slide Animation */}
              <p className="text-gray-700 mb-4 leading-relaxed animate-slide-stagger">
                "{testimonial.content}"
              </p>
              
              {/* Author with Animation */}
              <div className="flex items-center animate-slide-stagger">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover mr-3 animate-scale-bounce"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 animate-text-reveal">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 animate-text-reveal" style={{animationDelay: '0.1s'}}>{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section with Professional Animations */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 animate-slide-stagger">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group animate-slide-stagger" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300 animate-text-glow`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium animate-text-reveal">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
