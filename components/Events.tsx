/**
 * Events Component - Upcoming events calendar
 * Enhanced with gritty boxing aesthetic
 */

export default function Events() {
  // Placeholder events data
  const events = [
    {
      id: 1,
      title: "Mission Bouts 2026",
      date: "March 15, 2026",
      time: "7:00 PM",
      location: "Blue Cross Arena",
      type: "Championship",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Fall Training Camp",
      date: "September 1, 2025",
      time: "4:00 PM",
      location: "Aquinas Institute Gym",
      type: "Training",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Team Tryouts",
      date: "August 20, 2025",
      time: "3:30 PM",
      location: "Aquinas Institute Gym",
      type: "Tryouts",
      status: "registration-open",
    },
    {
      id: 4,
      title: "Alumni Exhibition Night",
      date: "December 10, 2025",
      time: "6:00 PM",
      location: "Aquinas Institute",
      type: "Special Event",
      status: "upcoming",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'registration-open':
        return <span className="px-3 py-1.5 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xs font-semibold rounded-full shadow-md">Open</span>;
      case 'upcoming':
        return <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">Soon</span>;
      default:
        return null;
    }
  };

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background image */}
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2000')",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative border border-gray-200"
            >
              {/* Top accent */}
              <div className="h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-gold-600 transition-colors">{event.title}</h3>
                  {getStatusBadge(event.status)}
                </div>
                <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-gold-50 to-gold-100 rounded-full mb-4">
                  <p className="text-sm font-medium text-gold-600">
                    {event.type}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-lg">{event.date}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="font-medium">{event.time}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="font-medium">{event.location}</span>
                  </div>
                </div>

                <a
                  href="https://www.facebook.com/AquinasMissionBouts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg block text-center"
                >
                  Learn More on Facebook
                </a>
              </div>

              {/* Bottom accent */}
              <div className="h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />
            </div>
          ))}
        </div>

        <div className="text-center bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-3">
            Never Miss a <span className="text-gold-600">Fight</span>
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Follow us on Facebook for real-time updates, fight schedules, and special events.
          </p>
          <a
            href="https://www.facebook.com/AquinasMissionBouts/events"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
}
