/**
 * Streaming Component - Embed Hudl streaming page
 * Enhanced with gritty boxing aesthetic
 */

export default function Streaming() {
  return (
    <section id="streaming" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Boxing ring background image */}
      <div
        className="absolute inset-0 opacity-25 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=2000')",
          backgroundBlendMode: 'overlay'
        }}
      />

      {/* Gritty texture */}
      <div className="absolute inset-0 bg-concrete opacity-20" />

      {/* Spotlight effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 bg-red-600 border-2 border-black">
            <span className="text-white font-black text-sm uppercase tracking-widest">Live Streaming</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 uppercase tracking-tight">
            Watch the <span className="text-gold-500">Action</span> Live
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-bold">
            Watch live streams during Mission Bouts and major events
          </p>
          <p className="text-sm text-neutral-400 mt-2">
            Live streams available during scheduled events • Check our Facebook for event announcements
          </p>
        </div>

        {/* Hudl Live Stream Clickable Banner */}
        <a
          href="https://fan.hudl.com/usa/ny/rochester/organization/17897/aquinas-institute-high-school"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block w-full bg-gradient-to-br from-black via-gray-900 to-black border-4 border-gold-500 hover:border-gold-400 shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden"
        >
          {/* Corner posts effect */}
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-gold-500 border-2 border-black z-10" />
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-gold-500 border-2 border-black z-10" />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gold-500 border-2 border-black z-10" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-gold-500 border-2 border-black z-10" />

          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-radial from-gold-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative py-20 px-8 text-center">
            {/* Hudl Logo Text - Large and Bold */}
            <div className="mb-6">
              <h3 className="text-7xl sm:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-gold-400 transition-colors duration-300" style={{textShadow: '0 0 40px rgba(234, 179, 8, 0.3)'}}>
                HUDL
              </h3>
              <div className="w-32 h-2 bg-gold-500 mx-auto mb-6" />
            </div>

            {/* Call to Action */}
            <p className="text-2xl sm:text-3xl font-black text-gold-400 uppercase tracking-wide mb-4">
              Watch Live Fights
            </p>
            <p className="text-lg text-gray-400 font-bold uppercase tracking-wider">
              Click to Open Stream
            </p>

            {/* Animated Arrow */}
            <div className="mt-8 transform group-hover:translate-x-2 transition-transform duration-300">
              <svg className="w-12 h-12 mx-auto text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="square" strokeLinejoin="miter" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          {/* Shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </a>

        {/* Direct Link */}
        <div className="text-center mt-8">
          <a
            href="https://fan.hudl.com/usa/ny/rochester/organization/17897/aquinas-institute-high-school"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-maroon-900 hover:bg-maroon-800 text-white font-black text-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-gold-500 overflow-hidden"
          >
            <span className="relative z-10">Open Full Screen</span>
            <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="square" strokeLinejoin="miter" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <div className="absolute inset-0 bg-gold-500/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
        </div>
      </div>
    </section>
  );
}
