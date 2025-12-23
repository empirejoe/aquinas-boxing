/**
 * SwagStore Component - Product cards for merchandise
 * Placeholder for future e-commerce integration (Shopify, etc.)
 */

export default function SwagStore() {
  // Placeholder products - ready for future integration
  const products = [
    {
      id: 1,
      name: "Aquinas Boxing T-Shirt",
      price: "$25.00",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      description: "Classic crew neck tee with Aquinas Boxing logo",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Mission Bouts Hoodie",
      price: "$55.00",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
      description: "Premium fleece hoodie with embroidered logo",
      badge: null,
    },
    {
      id: 3,
      name: "Boxing Gloves - Training",
      price: "$75.00",
      image: "https://images.unsplash.com/photo-1614108451410-8e5b7a3e2a37?w=500&h=500&fit=crop",
      description: "Professional grade training gloves",
      badge: "New",
    },
    {
      id: 4,
      name: "Aquinas Boxing Cap",
      price: "$22.00",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=500&fit=crop",
      description: "Adjustable snapback with embroidered logo",
      badge: null,
    },
    {
      id: 5,
      name: "Training Tank Top",
      price: "$28.00",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=500&fit=crop",
      description: "Moisture-wicking performance tank",
      badge: null,
    },
    {
      id: 6,
      name: "Mission Bouts Poster",
      price: "$15.00",
      image: "https://images.unsplash.com/photo-1594042244093-b3ade4fc54b4?w=500&h=500&fit=crop",
      description: "Commemorative event poster",
      badge: "Limited",
    },
  ];

  return (
    <section id="swag-store" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Official <span className="text-maroon-800">Swag Store</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Show your Aquinas Boxing pride with official merchandise and gear
          </p>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-maroon-300"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full shadow-lg">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-maroon-800 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-maroon-800">
                    {product.price}
                  </span>
                  <button className="px-6 py-2 bg-gold-500 hover:bg-gold-600 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-maroon-800 to-maroon-900 p-10 rounded-xl text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-3">
            Looking for Something Specific?
          </h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Contact us for custom orders, team gear, or bulk purchases. We offer embroidery and personalization options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-black font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              Contact Us
            </button>
            <button className="px-8 py-3 bg-white hover:bg-gray-100 text-maroon-900 font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
