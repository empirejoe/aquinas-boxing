/**
 * Hero Component - Full-screen hero with viewable sizzle reel video
 * Features: Boxing sizzle reel, clean readable design, real grit
 */

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-neutral-900 overflow-hidden py-16"
    >
      {/* Gritty boxing background image */}
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2000')",
          backgroundBlendMode: 'multiply'
        }}
      />

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/60 to-neutral-900/70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-1.5 bg-neutral-800 border border-neutral-700">
            <span className="text-gold-400 font-bold text-xs uppercase tracking-wide">
              Est. 1932 • Rochester, NY
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-4 tracking-tight uppercase leading-none">
            Aquinas <span className="text-gold-500">Boxing</span>
          </h1>

          {/* Subheadline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight mb-4">
            Building <span className="text-gold-500">Champions</span> Since 1932
          </h2>

          {/* Tagline */}
          <div className="inline-block mb-6 px-6 py-2 border-l-2 border-r-2 border-gold-500">
            <p className="text-xl sm:text-2xl font-bold text-neutral-200 uppercase">
              Tradition. Discipline. Heart.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-24 bg-neutral-700"></div>
          <div className="mx-4 w-2 h-2 bg-gold-500 rotate-45"></div>
          <div className="h-px w-24 bg-neutral-700"></div>
        </div>

        {/* Featured Sizzle Reel Video */}
        <div className="mb-16">
          <div className="max-w-6xl mx-auto">
            {/* Video Title */}
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 uppercase tracking-tight">
                More Than a Sport. It's a <span className="text-gold-500">Legacy</span>.
              </h3>
              <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                From the first bell to the final round, Aquinas Boxing transforms young athletes into disciplined champions.
                Watch the intensity, feel the dedication, and witness the tradition that's been forging leaders for over 90 years.
              </p>
            </div>

            {/* Video Container */}
            <div className="relative w-full bg-black shadow-2xl border-4 border-neutral-800" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.aquinasinstitute.com/apps/embed/?v=374814"
                title="Aquinas Boxing Program Sizzle Reel"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Link */}
            <div className="text-center mt-6">
              <a
                href="https://www.aquinasinstitute.com/apps/video/watch.jsp?v=374814"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-gold-400 transition-colors font-semibold uppercase tracking-wide"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Open Full Screen
              </a>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <a
            href="#streaming"
            className="w-full sm:w-auto px-8 py-4 bg-maroon-900 hover:bg-maroon-800 text-white font-bold text-base uppercase tracking-wide transition-all duration-200 border border-maroon-700 hover:border-gold-500 text-center"
          >
            Watch Live Fights
          </a>
          <a
            href="#swag-store"
            className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold text-base uppercase tracking-wide transition-all duration-200 border border-gold-600 text-center"
          >
            Shop Gear
          </a>
        </div>
      </div>
    </section>
  );
}
