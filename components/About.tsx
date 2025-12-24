/**
 * About Component - Program description and Mission Bouts information
 * Enhanced with gritty boxing aesthetic
 */

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          style={{ filter: 'grayscale(10%) brightness(1)' }}
        >
          <source src="/boxing-training.mp4" type="video/mp4" />
          <source src="https://static.videezy.com/system/resources/previews/000/005/529/original/Blackwhite_4.mp4" type="video/mp4" />
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Concrete texture overlay */}
      <div className="absolute inset-0 bg-concrete opacity-15 pointer-events-none" />

      {/* Diagonal stripe accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-maroon-950/30 to-transparent transform skew-x-12" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-maroon-900 border-2 border-gold-500">
            <span className="text-gold-400 font-black text-sm uppercase tracking-widest">About Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 uppercase tracking-tight">
            The <span className="text-gold-500 text-distressed">Program</span>
          </h2>
          <div className="w-32 h-2 bg-gold-500 mx-auto mb-6 shadow-lg"
            style={{
              boxShadow: '0 0 20px rgba(234, 179, 8, 0.5)'
            }}
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* The Program */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 border-l-4 border-gold-500 shadow-2xl relative overflow-hidden group">
            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gold-500/10 transform rotate-45 translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500" />

            <h3 className="text-3xl font-black text-gold-400 mb-6 flex items-center gap-3 uppercase tracking-tight">
              <svg className="w-10 h-10 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l-2.5 1.5L7 11l-2.5-1.5L9 8l2.5 1.5L9 12zm0-10a8 8 0 100 16 8 8 0 000-16z"/>
              </svg>
              The Fight
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg font-semibold">
                The only Catholic high school in America with a boxing program. This isn't just a sport—it's a way of life.
              </p>
              <p className="border-l-2 border-maroon-800 pl-4">
                Since <strong className="text-gold-400">1932</strong>, we've been forging warriors in the ring and leaders in life.
                Every jab, every round, every drop of sweat builds character that lasts a lifetime.
              </p>
              <p className="border-l-2 border-maroon-800 pl-4">
                Our program demands <strong className="text-gold-400 uppercase">discipline</strong>,
                teaches <strong className="text-gold-400 uppercase">respect</strong>, and
                rewards <strong className="text-gold-400 uppercase">heart</strong>.
                From first-timers to future champions, every fighter gets pushed to their limit and beyond.
              </p>
              <p className="font-bold text-white text-lg pt-2">
                Step in the ring. Find out what you're made of.
              </p>
            </div>
          </div>

          {/* Mission Bouts */}
          <div className="bg-gradient-to-br from-maroon-950 via-maroon-900 to-black p-8 shadow-2xl text-white border-2 border-gold-500/30 relative overflow-hidden">
            {/* Corner tape effect */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />

            <h3 className="text-3xl font-black mb-6 flex items-center gap-3 uppercase tracking-tight">
              <svg className="w-10 h-10 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
              <span className="text-gold-400">Mission Bouts</span>
            </h3>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p className="text-lg font-bold text-white">
                More than a fight. A mission.
              </p>
              <p className="border-l-2 border-gold-500 pl-4">
                Every March since <strong className="text-gold-400">1932</strong>, the best of Aquinas step into the ring
                for something bigger than themselves. The <strong className="text-gold-400">Mission Bouts</strong> aren't
                just about winning—they're about giving back.
              </p>
              <p className="border-l-2 border-gold-500 pl-4">
                Proceeds support the <strong className="text-gold-400">Basilian Fathers' mission work</strong> in Colombia
                and Mexico. Every punch thrown, every round fought, helps change lives across the world.
              </p>
              <p className="font-bold text-white text-lg">
                Fight for glory. Fight for others.
              </p>
            </div>

            {/* Key Stats - More aggressive styling */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t-2 border-gold-500/40">
              <div className="text-center">
                <div className="text-4xl font-black text-gold-400" style={{textShadow: '0 0 10px rgba(234, 179, 8, 0.5)'}}>
                  90+
                </div>
                <div className="text-xs text-gray-400 uppercase font-bold tracking-wider mt-1">Years Strong</div>
              </div>
              <div className="text-center border-l border-r border-maroon-800">
                <div className="text-4xl font-black text-gold-400" style={{textShadow: '0 0 10px rgba(234, 179, 8, 0.5)'}}>
                  100+
                </div>
                <div className="text-xs text-gray-400 uppercase font-bold tracking-wider mt-1">Fighters</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-gold-400" style={{textShadow: '0 0 10px rgba(234, 179, 8, 0.5)'}}>
                  1K+
                </div>
                <div className="text-xs text-gray-400 uppercase font-bold tracking-wider mt-1">Fans</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action - More aggressive */}
        <div className="mt-16 text-center bg-gradient-to-br from-black via-maroon-950 to-black p-10 border-4 border-gold-500 shadow-2xl relative overflow-hidden">
          {/* Spotlight effect */}
          <div className="absolute inset-0 bg-gradient-radial from-gold-500/10 via-transparent to-transparent opacity-50" />

          <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tight relative z-10">
            Got What It <span className="text-gold-500">Takes?</span>
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-bold relative z-10">
            Learn about tryouts, training schedules, and how to join the legacy. Champions aren't born—they're built.
          </p>
          <a
            href="https://www.aquinasinstitute.com/apps/pages/aquinas-boxing-program"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-12 py-5 bg-gold-500 hover:bg-gold-400 text-black font-black text-xl uppercase tracking-wider transition-all duration-300 shadow-2xl hover:shadow-gold-500/50 transform hover:scale-105 border-2 border-black group overflow-hidden z-10"
          >
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
        </div>
      </div>
    </section>
  );
}
