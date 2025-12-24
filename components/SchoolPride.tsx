/**
 * SchoolPride Component - Connects boxing program to Aquinas admissions
 * Enhanced with gritty boxing aesthetic
 */

export default function SchoolPride() {
  return (
    <section id="school-pride" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-maroon-950 via-black to-maroon-950 text-white relative overflow-hidden">
      {/* Gritty texture */}
      <div className="absolute inset-0 bg-concrete opacity-30" />

      {/* Diagonal stripes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-2 bg-gold-500 transform -skew-y-3" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gold-500 transform skew-y-3" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-gold-500 border-2 border-black">
            <span className="text-black font-black text-sm uppercase tracking-widest">Aquinas Institute</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tight">
            More Than Boxing,
            <br />
            It's an <span className="text-gold-500">Aquinas</span> Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-bold">
            Our boxing program is part of an exceptional education that forges champions in the ring and leaders in life.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Academic Excellence */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 border-2 border-gold-500/30 hover:border-gold-500 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gold-500/10 transform rotate-45 translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500" />

            <div className="w-16 h-16 bg-gold-500 flex items-center justify-center mb-6 border-4 border-black relative z-10">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="square" strokeLinejoin="miter" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-3 uppercase tracking-tight text-gold-400">Academic Excellence</h3>
            <p className="text-gray-300 leading-relaxed">
              Student-athletes maintain strong academics with dedicated tutoring and study halls. Boxing teaches time management and discipline that dominates the classroom.
            </p>
          </div>

          {/* Character Building */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 border-2 border-gold-500/30 hover:border-gold-500 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gold-500/10 transform rotate-45 translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500" />

            <div className="w-16 h-16 bg-gold-500 flex items-center justify-center mb-6 border-4 border-black relative z-10">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="square" strokeLinejoin="miter" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-3 uppercase tracking-tight text-gold-400">Character Forged</h3>
            <p className="text-gray-300 leading-relaxed">
              Learn respect, perseverance, and sportsmanship. Our coaches are warriors who forge students into unstoppable leaders.
            </p>
          </div>

          {/* Community & Brotherhood */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 border-2 border-gold-500/30 hover:border-gold-500 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gold-500/10 transform rotate-45 translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500" />

            <div className="w-16 h-16 bg-gold-500 flex items-center justify-center mb-6 border-4 border-black relative z-10">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="square" strokeLinejoin="miter" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-3 uppercase tracking-tight text-gold-400">Warrior Brotherhood</h3>
            <p className="text-gray-300 leading-relaxed">
              Join a tradition spanning generations. Alumni stay connected, mentor current fighters, and form unbreakable bonds.
            </p>
          </div>
        </div>

        {/* Stats Banner - More aggressive */}
        <div className="bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 p-1 mb-12 shadow-2xl">
          <div className="bg-black p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-5xl md:text-6xl font-black text-gold-400 mb-2" style={{textShadow: '0 0 20px rgba(234, 179, 8, 0.5)'}}>98%</div>
                <div className="text-xs md:text-sm font-black text-gray-400 uppercase tracking-wider">College Bound</div>
              </div>
              <div className="border-l border-r border-maroon-900">
                <div className="text-5xl md:text-6xl font-black text-gold-400 mb-2" style={{textShadow: '0 0 20px rgba(234, 179, 8, 0.5)'}}>$2M+</div>
                <div className="text-xs md:text-sm font-black text-gray-400 uppercase tracking-wider">Scholarships</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-black text-gold-400 mb-2" style={{textShadow: '0 0 20px rgba(234, 179, 8, 0.5)'}}>15:1</div>
                <div className="text-xs md:text-sm font-black text-gray-400 uppercase tracking-wider">Student Ratio</div>
              </div>
              <div className="border-l border-maroon-900">
                <div className="text-5xl md:text-6xl font-black text-gold-400 mb-2" style={{textShadow: '0 0 20px rgba(234, 179, 8, 0.5)'}}>90+</div>
                <div className="text-xs md:text-sm font-black text-gray-400 uppercase tracking-wider">Years Strong</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action - Aggressive */}
        <div className="text-center bg-gradient-to-br from-black to-maroon-950 p-12 border-4 border-gold-500 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-gold-500/10 via-transparent to-transparent" />

          <h3 className="text-3xl sm:text-4xl font-black mb-4 uppercase tracking-tight relative z-10">
            Ready to Join the <span className="text-gold-500">Fight?</span>
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-bold relative z-10">
            Discover how our boxing program and elite education can transform your student into a champion.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <a
              href="https://www.aquinasinstitute.com/apps/pages/index.jsp?uREC_ID=4373201&type=d"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-12 py-5 bg-gold-500 hover:bg-gold-400 text-black font-black text-xl uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-black overflow-hidden"
            >
              <span className="relative z-10">Learn Admissions</span>
              <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>
            <a
              href="https://www.aquinasinstitute.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-12 py-5 bg-black hover:bg-gray-900 text-gold-400 font-black text-xl uppercase tracking-wider transition-all duration-300 border-2 border-gold-500 hover:border-gold-400 overflow-hidden"
            >
              <span className="relative z-10">Visit Aquinas</span>
              <div className="absolute inset-0 bg-gold-500/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>
          </div>
          <p className="mt-6 text-gray-400 text-sm font-bold uppercase tracking-wider relative z-10">
            Financial Aid Available • Contact Admissions
          </p>
        </div>
      </div>
    </section>
  );
}
