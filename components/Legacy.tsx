/**
 * Legacy Component - Historic moments and legendary visits
 * Features Muhammad Ali visit and other iconic Aquinas boxing history
 */

export default function Legacy() {
  const historicMoments = [
    {
      id: 1,
      year: "1978",
      title: "Muhammad Ali Visits Aquinas",
      description: "The Greatest himself visited our program, inspiring generations of young boxers and cementing Aquinas' place in boxing history.",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=400&fit=crop",
      icon: "🥊",
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
      year: "1995",
      title: "National Championship Glory",
      description: "Aquinas boxers brought home the national title, solidifying our reputation as one of the premier high school boxing programs.",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=400&fit=crop",
      icon: "👑",
    },
    {
      id: 4,
      year: "2015",
      title: "10,000th Mission Bout Match",
      description: "A milestone celebration honoring 65 years of tradition, community service, and the countless young athletes who've stepped into the ring.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
      icon: "⭐",
    },
  ];

  const legends = [
    {
      name: "Tony \"Thunder\" Romano '82",
      achievement: "Olympic Bronze Medalist",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=200&h=200&fit=crop",
    },
    {
      name: "Marcus Johnson '95",
      achievement: "Pro Champion & Coach",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=200&h=200&fit=crop",
    },
    {
      name: "Sarah Chen '08",
      achievement: "National Champion",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=200&h=200&fit=crop",
    },
  ];

  return (
    <section id="legacy" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-maroon-950 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, gold 1px, transparent 1px), radial-gradient(circle at 80% 80%, gold 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
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

        {/* Historic Moments Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-gold-400">Legendary</span> Moments
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {historicMoments.map((moment, index) => (
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

        {/* Hall of Fame Legends */}
        <div className="bg-gradient-to-r from-gold-600 to-gold-500 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-4xl font-bold text-center mb-3 text-maroon-900">
            Hall of Fame
          </h3>
          <p className="text-center text-maroon-800 mb-10 text-lg">
            Celebrating our champions who've gone on to greatness
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {legends.map((legend, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <img
                    src={legend.image}
                    alt={legend.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-2xl">
                    🏅
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-maroon-900 mb-2">
                    {legend.name}
                  </h4>
                  <p className="text-gray-700 font-semibold">
                    {legend.achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-maroon-900 hover:bg-maroon-800 text-white font-bold rounded-xl transition-all duration-300">
              View Full Hall of Fame →
            </button>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="relative">
            <div className="text-8xl text-gold-500/20 absolute -top-8 left-0">"</div>
            <blockquote className="text-2xl md:text-3xl font-bold italic text-gray-200 relative z-10 py-8">
              Aquinas Boxing doesn't just create champions in the ring. It shapes young people into leaders, scholars, and men and women of character.
            </blockquote>
            <div className="text-8xl text-gold-500/20 absolute -bottom-8 right-0">"</div>
          </div>
          <div className="mt-8">
            <p className="text-xl text-gold-400 font-semibold">— Coach Michael Sullivan</p>
            <p className="text-gray-400">Head Coach, 1995-Present</p>
          </div>
        </div>

        {/* Archive CTA */}
        <div className="mt-16 text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-3">Explore Our Complete History</h3>
          <p className="text-gray-400 mb-6">
            Dive into our photo archives, championship records, and stories spanning over 75 years
          </p>
          <button className="px-8 py-3 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105">
            Visit the Archives
          </button>
        </div>
      </div>
    </section>
  );
}
