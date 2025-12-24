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
        return <span className="px-3 py-1 bg-gold-500 text-black text-xs font-black uppercase border border-black">Open</span>;
      case 'upcoming':
        return <span className="px-3 py-1 bg-maroon-900 text-gold-400 text-xs font-black uppercase border border-gold-500">Soon</span>;
      default:
        return null;
    }
  };

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Boxing training background image */}
      <div
        className="absolute inset-0 opacity-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2000')",
          backgroundBlendMode: 'soft-light'
        }}
      />

      {/* Gritty texture */}
      <div className="absolute inset-0 bg-concrete opacity-25" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-gold-500 border-2 border-black">
            <span className="text-black font-black text-sm uppercase tracking-widest">The Schedule</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 uppercase tracking-tight">
            Upcoming <span className="text-gold-500">Fights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-bold">
            Mark your calendar—these are battles you don't want to miss
          </p>
          <div className="w-32 h-2 bg-gold-500 mx-auto mt-6 shadow-lg" style={{boxShadow: '0 0 20px rgba(234, 179, 8, 0.5)'}} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gradient-to-br from-gray-900 to-black border-2 border-gold-500/30 hover:border-gold-500 transition-all duration-300 overflow-hidden group relative"
            >
              {/* Top tape */}
              <div className="h-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight group-hover:text-gold-400 transition-colors">{event.title}</h3>
                  {getStatusBadge(event.status)}
                </div>
                <div className="inline-block px-3 py-1 bg-maroon-900 border border-gold-500 mb-4">
                  <p className="text-sm font-black text-gold-400 uppercase">
                    {event.type}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-8 h-8 bg-gold-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="square" strokeLinejoin="miter" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="font-bold text-lg">{event.date}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-8 h-8 bg-gold-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="square" strokeLinejoin="miter" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="font-bold">{event.time}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-8 h-8 bg-gold-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="square" strokeLinejoin="miter" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="square" strokeLinejoin="miter" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="font-bold">{event.location}</span>
                  </div>
                </div>

                <a
                  href="https://www.facebook.com/AquinasMissionBouts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative w-full px-6 py-4 bg-gold-500 hover:bg-gold-400 text-black font-black uppercase tracking-wider transition-all duration-300 shadow-xl border-2 border-black block text-center overflow-hidden"
                >
                  <span className="relative z-10">Learn More on Facebook</span>
                  <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                </a>
              </div>

              {/* Bottom tape */}
              <div className="h-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-br from-maroon-950 to-black p-10 border-4 border-gold-500 shadow-2xl">
          <h3 className="text-3xl font-black text-white mb-3 uppercase tracking-tight">
            Never Miss a <span className="text-gold-500">Fight</span>
          </h3>
          <p className="text-gray-300 mb-8 font-bold text-lg">
            Follow us on Facebook for real-time updates, fight schedules, and special events.
          </p>
          <a
            href="https://www.facebook.com/AquinasMissionBouts/events"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block px-12 py-5 bg-gold-500 hover:bg-gold-400 text-black font-black text-xl uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-black overflow-hidden"
          >
            <span className="relative z-10">View All Events</span>
            <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
        </div>
      </div>
    </section>
  );
}
