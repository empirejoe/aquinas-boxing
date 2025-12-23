/**
 * About Component - Program description and Mission Bouts information
 */

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            About <span className="text-maroon-800">Aquinas Boxing</span>
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* The Program */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-4 border-maroon-800">
            <h3 className="text-2xl font-bold text-maroon-900 mb-4 flex items-center gap-2">
              <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              The Boxing Program
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Aquinas Institute Boxing Program is a cornerstone of athletic tradition in Rochester, NY. 
              For decades, we have cultivated champions not just in the ring, but in life.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our program emphasizes the core values of <strong className="text-maroon-800">discipline</strong>, 
              <strong className="text-maroon-800"> respect</strong>, and 
              <strong className="text-maroon-800"> perseverance</strong>. 
              Student-athletes learn proper technique, conditioning, and the mental toughness required to compete at the highest level.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're a seasoned boxer or stepping into the ring for the first time, Aquinas Boxing 
              provides a supportive environment where athletes grow, compete, and succeed together.
            </p>
          </div>

          {/* Mission Bouts */}
          <div className="bg-gradient-to-br from-maroon-900 to-maroon-800 p-8 rounded-xl shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Mission Bouts
            </h3>
            <p className="text-gray-100 leading-relaxed mb-4">
              The <strong className="text-gold-400">Mission Bouts</strong> are more than just competitions — 
              they are a Rochester tradition that brings together the community in support of our student-athletes.
            </p>
            <p className="text-gray-100 leading-relaxed mb-4">
              Founded on the principles of charity and community service, Mission Bouts showcase the very best 
              of amateur boxing while raising funds and awareness for important causes in our region.
            </p>
            <p className="text-gray-100 leading-relaxed mb-6">
              Each year, hundreds of fans pack the venue to witness thrilling matches, celebrate athletic excellence, 
              and support the mission that makes these bouts so special.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-maroon-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400">75+</div>
                <div className="text-sm text-gray-300">Years of Tradition</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400">100+</div>
                <div className="text-sm text-gray-300">Student Athletes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400">1000+</div>
                <div className="text-sm text-gray-300">Community Members</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-gold-50 p-8 rounded-xl border-2 border-gold-400">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Interested in Joining the Team?
          </h3>
          <p className="text-gray-700 mb-6">
            Learn more about tryouts, training schedules, and how to become part of the Aquinas Boxing legacy.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-maroon-800 hover:bg-maroon-900 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
