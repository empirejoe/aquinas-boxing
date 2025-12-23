/**
 * Legacy Component - Historic moments and legendary visits
 * Features Muhammad Ali visit and Mission Bouts history
 */

export default function Legacy() {
  const historicMoments = [
    {
      id: 1,
      year: "1978",
      title: "Muhammad Ali Visits Aquinas",
      description: "The Greatest himself visited our program, inspiring generations of young boxers and cementing Aquinas' place in boxing history.",
      videoUrl: "https://www.youtube.com/watch?v=-KJ0V6NUEqw",
      icon: "🥊",
      featured: true,
    },
    {
      id: 2,
      year: "1950",
      title: "First Mission Bouts",
      description: "The legendary Mission Bouts tradition began, combining competitive boxing with charitable giving for the Rochester community.",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&h=400&fit=crop",
      icon: "🏆",
    },
    {
      id: 3,
      year: "2024",
      title: "Mission Bouts Continues Strong",
      description: "Decades later, Mission Bouts remains a cornerstone of Rochester boxing, continuing the tradition of excellence and community service.",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=400&fit=crop",
      icon: "⭐",
    },
  ];

  return (
    <section id="legacy" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-maroon-950 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, gold 1px, transparent 1px), radial-gradient(circle at 80% 80%, gold 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gold-500 text-black font-bold rounded-full text-sm uppercase tracking-wider">
              Our Legacy
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            A <span className="text-gold-400">Tradition</span> of Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            For over 75 years, Aquinas Boxing has shaped champions, built character, and created moments that live forever in Rochester history.
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-gradient-to-br from-gold-600 to-gold-500 rounded-3xl p-2">
            <div className="bg-gray-900 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-6xl">🥊</span>
                    <div className="px-4 py-2 bg-gold-500 text-black font-bold rounded-full text-sm">
                      1978
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold mb-4 text-gold-400">
                    Muhammad Ali Visits Aquinas
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    The Greatest himself visited our program, inspiring generations of young boxers and cementing Aquinas' place in boxing history. This legendary moment captured the heart and spirit of what Aquinas Boxing represents.
                  </p>
                  <p className="text-lg text-gold-400 mt-4 font-semibold">
                    ← Watch the historic footage
                  </p>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/-KJ0V6NUEqw"
                    title="Muhammad Ali Visits Aquinas Institute"
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-gold-400">Legendary</span> Moments
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {historicMoments.slice(1).map((moment) => (
              <div
                key={moment.id}
                className="group relative bg-gradient-to-br from-maroon-900/50 to-black/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gold-500/20 hover:border-gold-500/60 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="absolute top-4 left-4 z-10">
                  <div className="text-6xl">{moment.icon}</div>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-4 py-2 bg-gold-500 text-black font-bold rounded-full text-sm">
                    {moment.year}
                  </div>
                </div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-3 text-gold-400 group-hover:text-gold-300 transition-colors">
                    {moment.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {moment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="relative">
            <div className="text-8xl text-gold-500/20 absolute -top-8 left-0">"</div>
            <blockquote className="text-2xl md:text-3xl font-bold italic text-gray-200 relative z-10 py-8">
              Aquinas Boxing doesn't just create champions in the ring. It shapes young people into leaders, scholars, and men and women of character.
            </blockquote>
            <div className="text-8xl text-gold-500/20 absolute -bottom-8 right-0">"</div>
          </div>
          <div className="mt-8">
            <p className="text-xl text-gold-400 font-semibold">— Aquinas Boxing Coaching Staff</p>
            <p className="text-gray-400">Building Champions Since 1950</p>
          </div>
        </div>

        <div className="mt-16 text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-3">Explore Our Complete History</h3>
          <p className="text-gray-400 mb-6">
            Dive into our video archives and stories spanning over 75 years
          </p>
          <a
            href="https://www.youtube.com/@AQ1902/search?query=boxing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Visit the Video Archives
          </a>
        </div>
      </div>
    </section>
  );
}
