/**
 * Legacy Component - Historic moments and legendary visits
 * Features Muhammad Ali visit and Mission Bouts history
 */

'use client';

import { useState } from 'react';

export default function Legacy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const historicMoments = [
    {
      id: 1,
      year: "1994",
      title: "Muhammad Ali Visits Aquinas",
      description: "The Greatest himself visited our program, inspiring generations of young boxers and cementing Aquinas' place in boxing history.",
      videoUrl: "https://www.youtube.com/watch?v=-KJ0V6NUEqw",
      icon: "🥊",
      featured: true,
    },
    {
      id: 2,
      year: "1932",
      title: "First Mission Bouts",
      description: "The legendary Mission Bouts tradition began, combining competitive boxing with charitable giving to support the Basilian Fathers' mission work in Colombia and Mexico.",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=400&fit=crop",
      icon: "🏆",
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
            For over 90 years, Aquinas Boxing has shaped champions, built character, and created moments that live forever in Rochester history.
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
                      1994
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
          {/* Section Header - Gritty Style */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-6 py-2 bg-maroon-900 border-2 border-gold-500">
              <span className="text-gold-400 font-black text-sm uppercase tracking-widest">Historic Battles</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              <span className="text-gold-500">Legendary</span> Moments
            </h3>
            <div className="w-24 h-2 bg-gold-500 mx-auto mt-4 shadow-lg" style={{boxShadow: '0 0 20px rgba(234, 179, 8, 0.5)'}} />
          </div>

          <div className="flex justify-center">
            {historicMoments.slice(1).map((moment) => (
              <div
                key={moment.id}
                className="group relative bg-gradient-to-br from-gray-900 to-black border-2 border-gold-500/30 hover:border-gold-500 transition-all duration-300 overflow-hidden shadow-2xl max-w-2xl w-full"
              >
                {/* Top tape effect */}
                <div className="h-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />

                <div className="relative">
                  {/* Icon badge - top left */}
                  <div className="absolute top-4 left-4 z-20 w-16 h-16 bg-maroon-900 border-2 border-gold-500 flex items-center justify-center shadow-xl">
                    <div className="text-4xl">{moment.icon}</div>
                  </div>

                  {/* Year badge - top right */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="px-4 py-2 bg-gold-500 border-2 border-black text-black font-black text-sm uppercase shadow-xl">
                      {moment.year}
                    </div>
                  </div>

                  {/* Background Image with heavy overlay */}
                  <div className="relative h-56 overflow-hidden bg-gray-900">
                    <img
                      src={moment.image}
                      alt={moment.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>
                    {/* Gritty texture overlay */}
                    <div className="absolute inset-0 bg-concrete opacity-15" />
                  </div>

                  {/* Content */}
                  <div className="p-8 bg-gradient-to-br from-black to-gray-900">
                    <h4 className="text-2xl sm:text-3xl font-black mb-4 text-gold-400 group-hover:text-gold-300 transition-colors uppercase tracking-tight">
                      {moment.title}
                    </h4>
                    <div className="w-16 h-1 bg-gold-500 mb-4" />
                    <p className="text-gray-300 leading-relaxed font-semibold border-l-2 border-maroon-800 pl-4">
                      {moment.description}
                    </p>

                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="group/btn relative w-full px-6 py-4 bg-gold-500 hover:bg-gold-400 text-black font-black uppercase tracking-wider transition-all duration-300 shadow-xl border-2 border-black mt-6 overflow-hidden"
                    >
                      <span className="relative z-10">Read Full Story</span>
                      <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                    </button>
                  </div>
                </div>

                {/* Bottom tape effect */}
                <div className="h-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />
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
            <p className="text-gray-400">Building Champions Since 1932</p>
          </div>
        </div>

        <div className="mt-16 text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-3">Explore Our Complete History</h3>
          <p className="text-gray-400 mb-6">
            Dive into our video archives and stories spanning over 90 years
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

      {/* Modal for Mission Bouts Full Story */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-black border-4 border-gold-500 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top tape effect */}
            <div className="h-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />

            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 bg-maroon-900 hover:bg-maroon-800 border-2 border-gold-500 flex items-center justify-center transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="mb-8">
                <div className="inline-block px-4 py-2 bg-gold-500 border-2 border-black mb-4">
                  <span className="text-black font-black text-sm uppercase tracking-wider">1932</span>
                </div>
                <h3 className="text-4xl sm:text-5xl font-black text-gold-400 uppercase tracking-tight mb-4">
                  The Mission Bouts Origin Story
                </h3>
                <div className="w-24 h-2 bg-gold-500" />
              </div>

              {/* Full Story Content */}
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-xl font-bold text-white border-l-4 border-gold-500 pl-6">
                  It all started with a fight between two students. Not in anger, but in sport—a display of skill, determination, and raw competitive spirit that captured the imagination of the Basilian Fathers at Aquinas Institute.
                </p>

                <p className="text-lg border-l-2 border-maroon-800 pl-6">
                  The year was 1932. In the depths of the Great Depression, when hope was scarce and resources were scarcer, the Basilian Fathers faced a challenge: how to fund their vital missionary work in Colombia and Mexico when families could barely afford to feed themselves.
                </p>

                <p className="text-lg border-l-2 border-maroon-800 pl-6">
                  Watching those two students box, one of the Fathers had a revelation. What if they could turn this into something bigger? What if the fighting spirit of Aquinas' young men could become a force for good—not just building character in the ring, but building hope thousands of miles away?
                </p>

                <p className="text-lg border-l-2 border-maroon-800 pl-6">
                  Thus, the <strong className="text-gold-400">Mission Bouts</strong> were born—a creative and unprecedented fundraising idea. They would organize a boxing tournament unlike any other. This wasn't just about crowning champions or proving toughness. Every punch thrown, every round fought, every drop of sweat would serve a higher calling: supporting the Basilian Fathers' missionary work in impoverished communities across Latin America.
                </p>

                <p className="text-lg border-l-2 border-maroon-800 pl-6">
                  The concept was simple but powerful: young boxers would train with discipline, compete with honor, and fight for a cause beyond the ring. The proceeds from the event would fund schools, churches, and community programs in impoverished areas of Latin America, bringing hope and education to communities in desperate need.
                </p>

                <p className="text-lg border-l-2 border-maroon-800 pl-6">
                  That first Mission Bouts event in 1932 was more than a boxing tournament—it was a statement. It declared that athletic excellence and charitable service weren't separate pursuits but complementary values. It showed that young men could be fierce competitors and compassionate servants simultaneously.
                </p>

                <p className="text-lg border-l-2 border-maroon-800 pl-6">
                  The tradition took root immediately. Year after year, as the Depression gave way to World War II, and as decades rolled on through countless social changes, the Mission Bouts endured. Each March, the gymnasium would fill with spectators—students, families, alumni, and community members—all united in supporting both the fighters and the mission.
                </p>

                <p className="text-lg border-l-2 border-maroon-800 pl-6">
                  The Basilian Fathers used the funds to build schools in remote Colombian villages, establish community centers in Mexican towns, and provide educational opportunities for children who had none. Every jab practiced, every combination perfected, every bout fought contributed to changing lives thousands of miles away.
                </p>

                <p className="text-xl font-bold text-white border-l-4 border-gold-500 pl-6 mt-8">
                  Over 90 years later, the Mission Bouts continue this proud tradition—still combining competitive excellence with charitable purpose, still building champions who understand that true strength means lifting others up.
                </p>

                <p className="text-lg text-gold-400 font-black uppercase tracking-wide text-center mt-8">
                  Fight for Glory. Fight for Others. Fight for the Mission.
                </p>
              </div>
            </div>

            {/* Bottom tape effect */}
            <div className="h-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />
          </div>
        </div>
      )}
    </section>
  );
}
