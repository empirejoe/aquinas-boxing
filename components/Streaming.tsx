/**
 * Streaming Component - Embed Hudl streaming page
 * Links to: https://fan.hudl.com/usa/ny/rochester/organization/17897/aquinas-institute-high-school
 */

export default function Streaming() {
  return (
    <section id="streaming" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Watch Live on <span className="text-red-600">Hudl</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Catch all the action from Aquinas Boxing matches and Mission Bouts live and on-demand
          </p>
        </div>

        {/* Responsive Iframe Container */}
        <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-black" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src="https://fan.hudl.com/usa/ny/rochester/organization/17897/aquinas-institute-high-school"
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Aquinas Boxing Hudl Stream"
          />
        </div>

        {/* Direct Link */}
        <div className="text-center mt-8">
          <a
            href="https://fan.hudl.com/usa/ny/rochester/organization/17897/aquinas-institute-high-school"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-maroon-800 hover:bg-maroon-900 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Open Full Screen
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
