/**
 * Events Component - Upcoming events calendar with modern grid layout
 */

export default function Events() {
  // Placeholder events data - can be replaced with API or CMS later
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
        return <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Registration Open</span>;
      case 'upcoming':
        return <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">Upcoming</span>;
      default:
        return null;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Championship':
        return 'text-red-600';
      case 'Training':
        return 'text-blue-600';
      case 'Tryouts':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Upcoming <span className="text-maroon-800">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mark your calendar for exciting matches, training sessions, and community events
          </p>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {events.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-maroon-300"
            >
              <div className="bg-gradient-to-r from-maroon-800 to-maroon-700 p-6 text-white">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold">{event.title}</h3>
                  {getStatusBadge(event.status)}
                </div>
                <p className="text-sm font-semibold text-red-600 bg-white px-2 py-1 rounded inline-block">
                  {event.type}
                </p>
              </div>

              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-maroon-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold">{event.date}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-maroon-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-maroon-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>

                <button className="mt-6 w-full px-4 py-3 bg-gold-500 hover:bg-gold-600 text-black font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-maroon-50 p-8 rounded-xl border-2 border-maroon-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Never Miss an Event
          </h3>
          <p className="text-gray-700 mb-6">
            Subscribe to our calendar to receive updates about upcoming matches, training sessions, and special events.
          </p>
          <button className="px-8 py-3 bg-maroon-800 hover:bg-maroon-900 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
            Subscribe to Calendar
          </button>
        </div>
      </div>
    </section>
  );
}
