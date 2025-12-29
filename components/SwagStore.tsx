/**
 * SwagStore Component - Links to official Aquinas merchandise
 * Features real products available through official school stores
 */

export default function SwagStore() {
  // Real products available at official stores
  const products = [
    {
      id: 1,
      name: "Mission Bouts T-Shirt",
      price: "Available",
      image: "https://i.ebayimg.com/images/g/yQkAAOSwWIVmQZrB/s-l1600.jpg",
      description: "Official Mission Bouts commemorative tee",
      badge: "Boxing Program",
      store: "DiMarco Bookstore",
      storeUrl: "https://www.aquinasinstitute.com/apps/pages/the-dimarco-family-bookstore",
    },
    {
      id: 2,
      name: "Nike Aquinas Hoodie",
      price: "Available",
      image: "https://cache.bsnsports.com/comp/render?filename=NKCJ1611063.FF.png&type=combo&f=jpeg&w=500&h=500&bc=f9f9f9&design=V4_GN044_SQ_F1&var=%27Q2F0ZWdvcnk9RmFuIEdlYXIsQWN0aXZpdHk9LE4xPTIxODQyMCAgTU1GX1NRLFQxPUxJJ0wgSVJJU0gsQzE9NjA5NjY4MyxDMj0xNjcxMTQyMixDMz02MDk2Njgz%27&x=330&y=222&oh=440&ow=330",
      description: "Nike Club Fleece Hoodie with Lil' Irish logo",
      badge: "Best Seller",
      store: "BSN Sports",
      storeUrl: "https://sideline.bsnsports.com/schools/new_york/rochester/aquinas-institute",
    },
    {
      id: 3,
      name: "Aquinas Nike Tee",
      price: "Available",
      image: "https://cache.bsnsports.com/comp/render?filename=NKDV7299091.FF.png&type=combo&f=jpeg&w=500&h=500&bc=f9f9f9&design=V4_GN002_SQ_LC_F1&var=%27Q2F0ZWdvcnk9RmFuIEdlYXIsQWN0aXZpdHk9LE4xPTIxODQyMCAgTU1GX1NRLFQxPUFRVUlOQVMsQzE9NjA5NjY4MyxDMj0xNjcxMTQyMixDMz02MDk2Njgz%27&x=316&y=220&oh=500&ow=375",
      description: "Nike Team Legend short sleeve tee with Aquinas branding",
      badge: "Spirit Wear",
      store: "BSN Sports",
      storeUrl: "https://sideline.bsnsports.com/schools/new_york/rochester/aquinas-institute",
    },
    {
      id: 4,
      name: "Nike Fleece Pants",
      price: "Available",
      image: "https://cache.bsnsports.com/comp/render?filename=NKCJ1616063.FF.png&type=combo&f=jpeg&w=500&h=500&bc=f9f9f9&design=V3_GN055_SQ&var=%27Q2F0ZWdvcnk9RmFuIEdlYXIsQWN0aXZpdHk9LE4xPTIxODQyMCAgTU1GX1NRLFQxPUFRVUlOQVMsVDI9TEknTCBJUklTSCxDMT02MDk2NjgzLEMyPTEwMDY2MzI5LEMzPTYwOTY2ODM%3D%27&x=346&y=242&oh=90&ow=90",
      description: "Nike Club Fleece pants with Aquinas Lil' Irish branding",
      badge: "Team Gear",
      store: "BSN Sports",
      storeUrl: "https://sideline.bsnsports.com/schools/new_york/rochester/aquinas-institute",
    },
    {
      id: 5,
      name: "Women's Aquinas Crew",
      price: "Available",
      image: "https://cache.bsnsports.com/comp/render?filename=NKHF6896063.FF.png&type=combo&f=jpeg&w=500&h=500&bc=f9f9f9&design=V3_GN061_SQ&var=%27Q2F0ZWdvcnk9RmFuIEdlYXIsQWN0aXZpdHk9LE4xPTIxODQyMCAgTU1GX1NRLFQxPUFRVUlOQVMsQzE9NjA5NjY4MyxDMj0xNjcxMTQyMixDMz02MDk2Njgz%27&x=290&y=244&oh=448&ow=336",
      description: "Nike Phoenix Fleece pullover crew with Aquinas logo",
      badge: "Women's",
      store: "BSN Sports",
      storeUrl: "https://sideline.bsnsports.com/schools/new_york/rochester/aquinas-institute",
    },
    {
      id: 6,
      name: "Custom Team Orders",
      price: "Contact Us",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=500&fit=crop",
      description: "Bulk orders and custom embroidery available for teams",
      badge: "Team Orders",
      store: "DiMarco Bookstore",
      storeUrl: "https://www.aquinasinstitute.com/apps/pages/the-dimarco-family-bookstore",
    },
  ];

  const officialStores = [
    {
      name: "DiMarco Family Bookstore",
      description: "Official school bookstore with Aquinas Boxing merchandise",
      url: "https://www.aquinasinstitute.com/apps/pages/the-dimarco-family-bookstore",
    },
    {
      name: "BSN Sports",
      description: "Official athletic apparel and equipment partner",
      url: "https://sideline.bsnsports.com/schools/new_york/rochester/aquinas-institute",
    },
    {
      name: "Rokkitwear",
      description: "Premium Aquinas athletics spirit wear",
      url: "https://www.rokkitwear.com/school/10261-aquinas-institute",
    },
  ];

  return (
    <section id="swag-store" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Official <span className="text-maroon-800" style={{textShadow: '1px 1px 0 rgba(202, 138, 4, 0.3)'}}>Merchandise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Show your Aquinas Boxing pride with official merchandise and gear
          </p>
          <p className="text-sm text-maroon-700 font-semibold">
            Proceeds support the Aquinas Boxing Program & Mission Bouts
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-maroon-500 to-maroon-700 mx-auto mt-6 rounded-full shadow-sm"></div>
        </div>

        {/* Official Store Partners */}
        <div className="bg-gradient-to-br from-maroon-50 to-maroon-100 rounded-2xl p-8 mb-16 border-2 border-gold-300">
          <h3 className="text-2xl font-bold text-maroon-900 text-center mb-6">
            Official Merchandise Partners
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {officialStores.map((store, index) => (
              <a
                key={index}
                href={store.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-200 hover:border-maroon-400"
              >
                <div className="flex items-start gap-3 mb-3">
                  <svg className="w-6 h-6 text-maroon-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-maroon-700 transition-colors mb-1">
                      {store.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {store.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-maroon-600 text-sm font-semibold group-hover:text-maroon-700">
                  Visit Store
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Featured Items
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-maroon-400"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-maroon-600 text-white text-xs font-bold rounded-full shadow-lg">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-maroon-800 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {product.description}
                </p>
                <p className="text-xs text-gray-500 mb-4 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Available at {product.store}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-maroon-700">
                    {product.price}
                  </span>
                  <a
                    href={product.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-maroon-600 to-maroon-700 hover:from-maroon-700 hover:to-maroon-800 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md border border-gold-400/20"
                  >
                    Shop Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-br from-maroon-800 to-maroon-900 p-10 rounded-2xl text-white shadow-xl border-4 border-gold-400/40">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="text-2xl font-bold">
              Looking for Something Specific?
            </h3>
          </div>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Contact us for custom orders, team gear, or bulk purchases. The official stores offer embroidery and personalization options for Aquinas Boxing merchandise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.aquinasinstitute.com/apps/pages/the-dimarco-family-bookstore"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white hover:bg-gray-100 text-maroon-900 font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              Visit DiMarco Bookstore
            </a>
            <a
              href="https://sideline.bsnsports.com/schools/new_york/rochester/aquinas-institute"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-maroon-600 hover:bg-maroon-700 text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg border-2 border-gold-400/30 hover:scale-105"
            >
              Browse BSN Sports
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
