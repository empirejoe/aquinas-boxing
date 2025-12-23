/**
 * Hero Component - Full-screen hero banner with background image
 * Features: AI-generated boxing background, headline, CTA buttons
 */

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2340&auto=format&fit=crop')`,
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Aquinas Boxing
        </h1>
        
        {/* Tagline */}
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-400 mb-8">
          Tradition. Discipline. Heart.
        </p>
        
        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          Home of the Aquinas Institute Boxing Program and the legendary Mission Bouts
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#streaming" 
            className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Watch Live (Hudl)
          </a>
          <a 
            href="#swag-store" 
            className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-600 text-black font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Shop Swag
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
