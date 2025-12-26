/**
 * Events Component - Upcoming events calendar
 * Enhanced with gritty boxing aesthetic
 */

export default function Events() {
  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 via-gray-50 to-white relative overflow-hidden">
      {/* Subtle background image */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2000')",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-gold-50 to-gold-100 rounded-full shadow-sm">
            <span className="text-gold-600 font-semibold text-sm tracking-wide">The Schedule</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Upcoming <span className="text-gold-600">Fights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mark your calendar—these are battles you don't want to miss
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Main CTA Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 mb-12">
          {/* Top accent */}
          <div className="h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />

          <div className="p-10 md:p-16 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated on <span className="text-gold-600">All Events</span>
            </h3>

            <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
              Get the latest schedules for Mission Bouts, training camps, tryouts, and special events.
            </p>

            <p className="text-base text-gray-500 mb-8 max-w-xl mx-auto">
              All event information, dates, times, and locations are posted and updated in real-time on our Facebook page.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://www.facebook.com/AquinasMissionBouts/events"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                View Events on Facebook
              </a>

              <a
                href="https://www.facebook.com/AquinasMissionBouts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200"
              >
                Follow Our Page
              </a>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />
        </div>

        {/* Supporting info */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center">
            <div className="text-4xl mb-3">🥊</div>
            <h4 className="text-gray-900 font-semibold mb-2">Mission Bouts</h4>
            <p className="text-sm text-gray-600">Annual championship event every March</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center">
            <div className="text-4xl mb-3">📅</div>
            <h4 className="text-gray-900 font-semibold mb-2">Training & Tryouts</h4>
            <p className="text-sm text-gray-600">Regular schedules posted on Facebook</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center">
            <div className="text-4xl mb-3">⭐</div>
            <h4 className="text-gray-900 font-semibold mb-2">Special Events</h4>
            <p className="text-sm text-gray-600">Alumni nights, exhibitions, and more</p>
          </div>
        </div>
      </div>
    </section>
  );
}
