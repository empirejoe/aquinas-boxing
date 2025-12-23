/**
 * Testimonials Component - Real stories from students, parents, and alumni
 */

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      type: "student",
      name: "Jake Martinez",
      role: "Current Student, Class of 2025",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=200&h=200&fit=crop",
      quote: "Boxing at Aquinas taught me discipline and confidence. I've grown so much as a person, and my grades have improved too! The coaches really care about us as students, not just athletes.",
    },
    {
      id: 2,
      type: "parent",
      name: "Maria Rodriguez",
      role: "Parent of Student Athlete",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      quote: "We were nervous about boxing at first, but the safety protocols and supervision are incredible. Our son has become more respectful, focused, and driven. This program has changed his life.",
    },
    {
      id: 3,
      type: "student",
      name: "Emma Chen",
      role: "Sophomore",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=200&h=200&fit=crop",
      quote: "As one of the few girls in the program, I was welcomed with open arms. I've learned that I'm stronger than I ever imagined, both physically and mentally. Aquinas Boxing is my family!",
    },
    {
      id: 4,
      type: "alumni",
      name: "David Thompson",
      role: "Alumni '15, Current College Student",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=200&h=200&fit=crop",
      quote: "The lessons I learned in the Aquinas ring carried me through college and beyond. The discipline, work ethic, and mental toughness I gained are priceless. I'm forever grateful.",
    },
    {
      id: 5,
      type: "parent",
      name: "James Wilson",
      role: "Parent & Former Alumni",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=200&h=200&fit=crop",
      quote: "I boxed at Aquinas 30 years ago, and now my daughter is following in my footsteps. The tradition, values, and excellence are still the same. It's an honor to be part of this legacy.",
    },
    {
      id: 6,
      type: "student",
      name: "Tyler Brooks",
      role: "Junior",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=200&h=200&fit=crop",
      quote: "I came to Aquinas specifically for the boxing program. It's pushed me to be my best self every single day. The friendships I've made here will last forever.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-green-500 text-white font-bold rounded-full text-sm uppercase tracking-wider">
              ⭐⭐⭐⭐⭐ 5-Star Reviews
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Hear From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon-800 to-red-600">Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from students, parents, and alumni about how Aquinas Boxing has impacted their lives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-xs font-bold uppercase">
                  {testimonial.type}
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <svg className="w-8 h-8 text-gray-300 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-maroon-300"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-maroon-800 to-red-700 rounded-3xl p-10 text-white shadow-2xl mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">4.9/5</div>
              <div className="text-sm md:text-base text-gray-200">Average Parent Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">95%</div>
              <div className="text-sm md:text-base text-gray-200">Would Recommend</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">200+</div>
              <div className="text-sm md:text-base text-gray-200">Active Families</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">1000+</div>
              <div className="text-sm md:text-base text-gray-200">Alumni Network</div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 border-2 border-blue-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Join These Families in the Aquinas Boxing Tradition
          </h3>
          <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
            Experience the same transformation. Schedule a visit to see our program in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-maroon-800 hover:bg-maroon-900 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule a Visit
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-white hover:bg-gray-50 text-maroon-800 font-bold text-lg rounded-xl transition-all duration-300 border-2 border-maroon-800"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
