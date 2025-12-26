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
    <section id="legacy" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, gold 1px, transparent 1px), radial-gradient(circle at 80% 80%, gold 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-5 py-2 bg-gradient-to-r from-gold-50 to-gold-100 text-gold-600 font-semibold rounded-full text-sm tracking-wide shadow-sm">
              Our Legacy
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            A <span className="text-gold-600">Tradition</span> of Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 90 years, Aquinas Boxing has shaped champions, built character, and created moments that live forever in Rochester history.
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-6xl">🥊</span>
                  <div className="px-4 py-2 bg-gradient-to-r from-gold-400 to-gold-600 text-white font-semibold rounded-full text-sm shadow-md">
                    1994
                  </div>
                </div>
                <h3 className="text-4xl font-bold mb-4 text-gray-900">
                  Muhammad Ali Visits Aquinas
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  The Greatest himself visited our program, inspiring generations of young boxers and cementing Aquinas' place in boxing history. This legendary moment captured the heart and spirit of what Aquinas Boxing represents.
                </p>
                <p className="text-lg text-gold-600 mt-4 font-medium">
                  ← Watch the historic footage
                </p>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
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

        <div className="mb-20">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-gold-50 to-gold-100 rounded-full shadow-sm">
              <span className="text-gold-600 font-semibold text-sm tracking-wide">Historic Battles</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
              <span className="text-gold-600">Legendary</span> Moments
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-4 rounded-full" />
          </div>

          <div className="flex justify-center">
            {historicMoments.slice(1).map((moment) => (
              <div
                key={moment.id}
                className="group relative bg-white rounded-2xl hover:shadow-xl transition-all duration-300 overflow-hidden shadow-lg max-w-2xl w-full border border-gray-200"
              >
                {/* Top accent */}
                <div className="h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />

                <div className="relative">
                  {/* Icon badge - top left */}
                  <div className="absolute top-4 left-4 z-20 w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center shadow-lg">
                    <div className="text-4xl">{moment.icon}</div>
                  </div>

                  {/* Year badge - top right */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="px-4 py-2 bg-gradient-to-r from-gold-400 to-gold-600 text-white font-semibold text-sm rounded-full shadow-md">
                      {moment.year}
                    </div>
                  </div>

                  {/* Background Image */}
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img
                      src={moment.image}
                      alt={moment.title}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 bg-white">
                    <h4 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 group-hover:text-gold-600 transition-colors">
                      {moment.title}
                    </h4>
                    <div className="w-16 h-1 bg-gold-500 mb-4 rounded-full" />
                    <p className="text-gray-600 leading-relaxed border-l-4 border-gold-400 pl-4 bg-gray-50 py-2 rounded-r-lg">
                      {moment.description}
                    </p>

                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full px-6 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg mt-6"
                    >
                      Read Full Story
                    </button>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <div className="relative">
            <div className="text-8xl text-gold-400/20 absolute -top-8 left-0">"</div>
            <blockquote className="text-2xl md:text-3xl font-semibold italic text-gray-800 relative z-10 py-8">
              Aquinas Boxing doesn't just create champions in the ring. It shapes young people into leaders, scholars, and men and women of character.
            </blockquote>
            <div className="text-8xl text-gold-400/20 absolute -bottom-8 right-0">"</div>
          </div>
          <div className="mt-8">
            <p className="text-xl text-gold-600 font-semibold">— Aquinas Boxing Coaching Staff</p>
            <p className="text-gray-500">Building Champions Since 1932</p>
          </div>
        </div>

        <div className="mt-16 text-center bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Explore Our Complete History</h3>
          <p className="text-gray-600 mb-6">
            Dive into our video archives and stories spanning over 90 years
          </p>
          <a
            href="https://www.youtube.com/@AQ1902/search?query=boxing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
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
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10 group"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="mb-8">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full text-white font-semibold text-sm shadow-md mb-4">
                  <span>1932</span>
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                  The Mission Bouts Origin Story
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full" />
              </div>

              {/* Full Story Content */}
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-xl font-semibold text-gray-900 border-l-4 border-gold-500 pl-6 bg-gold-50 py-3 rounded-r-lg">
                  It all started with a fight between two students. Not in anger, but in sport—a display of skill, determination, and raw competitive spirit that captured the imagination of the Basilian Fathers at Aquinas Institute.
                </p>

                <p className="text-lg border-l-4 border-gray-300 pl-6 bg-gray-50 py-2 rounded-r-lg">
                  The year was 1932. In the depths of the Great Depression, when hope was scarce and resources were scarcer, the Basilian Fathers faced a challenge: how to fund their vital missionary work in Colombia and Mexico when families could barely afford to feed themselves.
                </p>

                <p className="text-lg border-l-4 border-gray-300 pl-6 bg-gray-50 py-2 rounded-r-lg">
                  Watching those two students box, one of the Fathers had a revelation. What if they could turn this into something bigger? What if the fighting spirit of Aquinas' young men could become a force for good—not just building character in the ring, but building hope thousands of miles away?
                </p>

                <p className="text-lg border-l-4 border-gray-300 pl-6 bg-gray-50 py-2 rounded-r-lg">
                  Thus, the <strong className="text-gold-600">Mission Bouts</strong> were born—a creative and unprecedented fundraising idea. They would organize a boxing tournament unlike any other. This wasn't just about crowning champions or proving toughness. Every punch thrown, every round fought, every drop of sweat would serve a higher calling: supporting the Basilian Fathers' missionary work in impoverished communities across Latin America.
                </p>

                <p className="text-lg border-l-4 border-gray-300 pl-6 bg-gray-50 py-2 rounded-r-lg">
                  The concept was simple but powerful: young boxers would train with discipline, compete with honor, and fight for a cause beyond the ring. The proceeds from the event would fund schools, churches, and community programs in impoverished areas of Latin America, bringing hope and education to communities in desperate need.
                </p>

                <p className="text-lg border-l-4 border-gray-300 pl-6 bg-gray-50 py-2 rounded-r-lg">
                  That first Mission Bouts event in 1932 was more than a boxing tournament—it was a statement. It declared that athletic excellence and charitable service weren't separate pursuits but complementary values. It showed that young men could be fierce competitors and compassionate servants simultaneously.
                </p>

                <p className="text-lg border-l-4 border-gray-300 pl-6 bg-gray-50 py-2 rounded-r-lg">
                  The tradition took root immediately. Year after year, as the Depression gave way to World War II, and as decades rolled on through countless social changes, the Mission Bouts endured. Each March, the gymnasium would fill with spectators—students, families, alumni, and community members—all united in supporting both the fighters and the mission.
                </p>

                <p className="text-lg border-l-4 border-gray-300 pl-6 bg-gray-50 py-2 rounded-r-lg">
                  The Basilian Fathers used the funds to build schools in remote Colombian villages, establish community centers in Mexican towns, and provide educational opportunities for children who had none. Every jab practiced, every combination perfected, every bout fought contributed to changing lives thousands of miles away.
                </p>

                <p className="text-xl font-semibold text-gray-900 border-l-4 border-gold-500 pl-6 bg-gold-50 py-3 rounded-r-lg mt-8">
                  Over 90 years later, the Mission Bouts continue this proud tradition—still combining competitive excellence with charitable purpose, still building champions who understand that true strength means lifting others up.
                </p>

                <p className="text-lg text-gold-600 font-semibold text-center mt-8">
                  Fight for Glory. Fight for Others. Fight for the Mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
