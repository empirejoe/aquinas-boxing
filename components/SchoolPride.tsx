/**
 * SchoolPride Component - Connects boxing program to Aquinas admissions
 * Appeals to parents considering Aquinas for their children
 */

export default function SchoolPride() {
  return (
    <section id="school-pride" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gold-500 text-black font-bold rounded-full text-sm uppercase tracking-wider">
              Aquinas Institute
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            More Than a Boxing Program,
            <br />
            It's an <span className="text-gold-400">Aquinas Education</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Our boxing program is just one part of the exceptional Aquinas experience that prepares students for success in life.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Academic Excellence */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
            <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
              <svg className="w-8 h-8 text-maroon-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Academic Excellence</h3>
            <p className="text-gray-300">
              Student-athletes maintain strong academics with dedicated tutoring and study halls. Boxing teaches time management and discipline that translates to the classroom.
            </p>
          </div>

          {/* Character Building */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
            <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center mb-6 transform -rotate-3">
              <svg className="w-8 h-8 text-maroon-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Character Building</h3>
            <p className="text-gray-300">
              Learn respect, perseverance, and sportsmanship. Our coaches are mentors who help students grow into leaders on and off the canvas.
            </p>
          </div>

          {/* Community & Brotherhood */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
            <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
              <svg className="w-8 h-8 text-maroon-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Lifelong Brotherhood</h3>
            <p className="text-gray-300">
              Join a tradition that spans generations. Alumni stay connected, mentor current students, and form bonds that last a lifetime.
            </p>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-gold-500 to-gold-400 rounded-3xl p-8 mb-12 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-maroon-900 mb-2">98%</div>
              <div className="text-sm md:text-base font-semibold text-maroon-800">College Acceptance</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-maroon-900 mb-2">$2M+</div>
              <div className="text-sm md:text-base font-semibold text-maroon-800">Scholarships Awarded</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-maroon-900 mb-2">15:1</div>
              <div className="text-sm md:text-base font-semibold text-maroon-800">Student-Teacher Ratio</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-maroon-900 mb-2">75+</div>
              <div className="text-sm md:text-base font-semibold text-maroon-800">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
          <h3 className="text-3xl font-bold mb-4">
            Considering Aquinas for Your Child?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how our boxing program and comprehensive education can help your student achieve their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.aquinasinstitute.com/admissions"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-maroon-900 font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Schedule a Campus Tour
            </a>
            <a
              href="https://www.aquinasinstitute.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-xl transition-all duration-300 border-2 border-white/30"
            >
              Visit Aquinas Institute
            </a>
          </div>
          <p className="mt-6 text-gray-400 text-sm">
            Financial aid and scholarships available. Contact admissions@aquinas.org
          </p>
        </div>
      </div>
    </section>
  );
}
