/**
 * About Component - Program description and Mission Bouts information
 * Enhanced with gritty boxing aesthetic
 */

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-5"
          style={{ filter: 'grayscale(50%) brightness(1.2)' }}
        >
          <source src="/boxing-training.mp4" type="video/mp4" />
          <source src="https://static.videezy.com/system/resources/previews/000/005/529/original/Blackwhite_4.mp4" type="video/mp4" />
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-gold-50 to-gold-100 rounded-full shadow-sm">
            <span className="text-gold-600 font-semibold text-sm tracking-wide">About Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            The <span className="text-gold-600">Program</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full" />
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* The Program */}
          <div className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden group hover:shadow-xl transition-shadow">
            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gold-100/50 rounded-bl-full group-hover:scale-110 transition-transform duration-500" />

            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l-2.5 1.5L7 11l-2.5-1.5L9 8l2.5 1.5L9 12zm0-10a8 8 0 100 16 8 8 0 000-16z"/>
                </svg>
              </div>
              The Fight
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg font-semibold text-gray-900">
                The only Catholic high school in America with a boxing program. This isn't just a sport—it's a way of life.
              </p>
              <p className="border-l-4 border-gold-400 pl-4 bg-gray-50 py-2 rounded-r-lg">
                Since <strong className="text-gold-600">1932</strong>, we've been forging warriors in the ring and leaders in life.
                Every jab, every round, every drop of sweat builds character that lasts a lifetime.
              </p>
              <p className="border-l-4 border-gold-400 pl-4 bg-gray-50 py-2 rounded-r-lg">
                Our program demands <strong className="text-gold-600">discipline</strong>,
                teaches <strong className="text-gold-600">respect</strong>, and
                rewards <strong className="text-gold-600">heart</strong>.
                From first-timers to future champions, every fighter gets pushed to their limit and beyond.
              </p>
              <p className="font-semibold text-gray-900 text-lg pt-2">
                Step in the ring. Find out what you're made of.
              </p>
            </div>
          </div>

          {/* Mission Bouts */}
          <div className="bg-gradient-to-br from-gold-50 to-white p-8 shadow-lg rounded-2xl relative overflow-hidden border border-gold-200">
            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-t-2xl" />

            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              Mission Bouts
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg font-semibold text-gray-900">
                More than a fight. A mission.
              </p>
              <p className="border-l-4 border-gold-500 pl-4 bg-white py-2 rounded-r-lg">
                Every March since <strong className="text-gold-600">1932</strong>, the best of Aquinas step into the ring
                for something bigger than themselves. The <strong className="text-gold-600">Mission Bouts</strong> aren't
                just about winning—they're about giving back.
              </p>
              <p className="border-l-4 border-gold-500 pl-4 bg-white py-2 rounded-r-lg">
                Proceeds support the <strong className="text-gold-600">Basilian Fathers' mission work</strong> in Colombia
                and Mexico. Every punch thrown, every round fought, helps change lives across the world.
              </p>
              <p className="font-semibold text-gray-900 text-lg">
                Fight for glory. Fight for others.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gold-200">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-br from-gold-500 to-gold-600 bg-clip-text text-transparent">
                  90+
                </div>
                <div className="text-xs text-gray-600 font-medium mt-1">Years Strong</div>
              </div>
              <div className="text-center border-l border-r border-gold-200">
                <div className="text-4xl font-bold bg-gradient-to-br from-gold-500 to-gold-600 bg-clip-text text-transparent">
                  100+
                </div>
                <div className="text-xs text-gray-600 font-medium mt-1">Fighters</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-br from-gold-500 to-gold-600 bg-clip-text text-transparent">
                  1K+
                </div>
                <div className="text-xs text-gray-600 font-medium mt-1">Fans</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white p-10 rounded-2xl shadow-lg relative overflow-hidden border border-gray-200">
          {/* Subtle gradient accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold-50/50 via-transparent to-transparent" />

          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 relative z-10">
            Got What It <span className="text-gold-600">Takes?</span>
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto relative z-10">
            Learn about tryouts, training schedules, and how to join the legacy. Champions aren't born—they're built.
          </p>
          <a
            href="https://www.aquinasinstitute.com/apps/pages/aquinas-boxing-program"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold text-lg rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 z-10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
