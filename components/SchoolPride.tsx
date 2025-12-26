/**
 * SchoolPride Component - Connects boxing program to Aquinas admissions
 * Enhanced with gritty boxing aesthetic
 */

export default function SchoolPride() {
  return (
    <section id="school-pride" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-gold-50 to-gold-100 rounded-full shadow-sm">
            <span className="text-gold-600 font-semibold text-sm tracking-wide">Aquinas Institute</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            More Than Boxing,
            <br />
            It's an <span className="text-gold-600">Aquinas</span> Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our boxing program is part of an exceptional education that forges champions in the ring and leaders in life.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Academic Excellence */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group border border-gray-200">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gold-100/50 rounded-bl-full group-hover:scale-110 transition-transform duration-500" />

            <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center mb-6 relative z-10 shadow-md">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Academic Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              Student-athletes maintain strong academics with dedicated tutoring and study halls. Boxing teaches time management and discipline that dominates the classroom.
            </p>
          </div>

          {/* Character Building */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group border border-gray-200">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gold-100/50 rounded-bl-full group-hover:scale-110 transition-transform duration-500" />

            <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center mb-6 relative z-10 shadow-md">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Character Forged</h3>
            <p className="text-gray-600 leading-relaxed">
              Learn respect, perseverance, and sportsmanship. Our coaches are warriors who forge students into unstoppable leaders.
            </p>
          </div>

          {/* Community & Brotherhood */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group border border-gray-200">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gold-100/50 rounded-bl-full group-hover:scale-110 transition-transform duration-500" />

            <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center mb-6 relative z-10 shadow-md">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Warrior Brotherhood</h3>
            <p className="text-gray-600 leading-relaxed">
              Join a tradition spanning generations. Alumni stay connected, mentor current fighters, and form unbreakable bonds.
            </p>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-2xl p-8 mb-12 shadow-lg border border-gold-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-gold-500 to-gold-600 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-xs md:text-sm font-medium text-gray-600">College Bound</div>
            </div>
            <div className="border-l border-r border-gold-200">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-gold-500 to-gold-600 bg-clip-text text-transparent mb-2">$2M+</div>
              <div className="text-xs md:text-sm font-medium text-gray-600">Scholarships</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-gold-500 to-gold-600 bg-clip-text text-transparent mb-2">15:1</div>
              <div className="text-xs md:text-sm font-medium text-gray-600">Student Ratio</div>
            </div>
            <div className="border-l border-gold-200">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-gold-500 to-gold-600 bg-clip-text text-transparent mb-2">90+</div>
              <div className="text-xs md:text-sm font-medium text-gray-600">Years Strong</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white p-12 rounded-2xl shadow-lg border border-gray-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold-50/50 via-transparent to-transparent" />

          <h3 className="text-3xl sm:text-4xl font-bold mb-4 relative z-10 text-gray-900">
            Ready to Join the <span className="text-gold-600">Fight?</span>
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto relative z-10">
            Discover how our boxing program and elite education can transform your student into a champion.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <a
              href="https://www.aquinasinstitute.com/apps/pages/index.jsp?uREC_ID=4373201&type=d"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Learn Admissions
            </a>
            <a
              href="https://www.aquinasinstitute.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold text-lg rounded-lg transition-all duration-300 border-2 border-gray-300 hover:border-gold-500 shadow-md hover:shadow-lg"
            >
              Visit Aquinas
            </a>
          </div>
          <p className="mt-6 text-gray-500 text-sm font-medium relative z-10">
            Financial Aid Available • Contact Admissions
          </p>
        </div>
      </div>
    </section>
  );
}
