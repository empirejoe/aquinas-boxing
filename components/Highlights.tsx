/**
 * Highlights Component - Fight highlights and memorable moments
 * Video gallery showcasing the excitement and talent of Aquinas boxing
 */

export default function Highlights() {
  const highlights = [
    {
      id: 1,
      title: "Championship Knockout - Mission Bouts 2024",
      thumbnail: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=400&fit=crop",
      duration: "2:34",
      views: "12.5K",
      category: "Match Highlights",
    },
    {
      id: 2,
      title: "Training Day: Behind the Scenes",
      thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
      duration: "5:12",
      views: "8.2K",
      category: "Training",
    },
    {
      id: 3,
      title: "Student Spotlight: From Rookie to Champion",
      thumbnail: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&h=400&fit=crop",
      duration: "4:45",
      views: "15.3K",
      category: "Stories",
    },
    {
      id: 4,
      title: "Mission Bouts 2023 - Full Event Recap",
      thumbnail: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=400&fit=crop",
      duration: "12:20",
      views: "24.1K",
      category: "Events",
    },
    {
      id: 5,
      title: "Coach's Corner: Technique Tuesday",
      thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
      duration: "3:55",
      views: "6.7K",
      category: "Training",
    },
    {
      id: 6,
      title: "Alumni Return: Where Are They Now?",
      thumbnail: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&h=400&fit=crop",
      duration: "8:30",
      views: "9.8K",
      category: "Stories",
    },
  ];

  return (
    <section id="highlights" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-red-600 font-bold rounded-full text-sm uppercase tracking-wider animate-pulse">
              🔴 Featured Content
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Watch the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Action</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the intensity, skill, and heart of Aquinas Boxing through our highlight reels and exclusive content
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1200&h=600&fit=crop"
              alt="Featured Highlight"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-center justify-center">
              <button className="w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-2xl">
                <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-red-600 rounded-full text-sm font-semibold">
                  Featured
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  Match Highlights
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Mission Bouts 2024 - Epic Championship Round
              </h3>
              <div className="flex items-center gap-4 text-gray-300 text-sm">
                <span>15:45</span>
                <span>•</span>
                <span>48.2K views</span>
                <span>•</span>
                <span>2 days ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden mb-3 shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 backdrop-blur-sm rounded text-xs font-semibold">
                  {video.duration}
                </div>
                {/* Category Badge */}
                <div className="absolute top-2 left-2 px-2 py-1 bg-red-600 rounded text-xs font-semibold">
                  {video.category}
                </div>
              </div>
              <h3 className="text-white font-bold mb-1 group-hover:text-red-500 transition-colors line-clamp-2">
                {video.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {video.views} views
              </p>
            </div>
          ))}
        </div>

        {/* YouTube Channel CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-10 shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Want More? Subscribe to Our Channel!
          </h3>
          <p className="text-xl text-red-100 mb-6">
            Get notified when we upload new fight highlights, training tips, and exclusive behind-the-scenes content
          </p>
          <a
            href="https://www.youtube.com/@AQ1902/search?query=boxing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 text-red-600 font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
