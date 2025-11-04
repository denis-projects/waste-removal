import { CheckCircle } from 'lucide-react';

const materialCategories = [
  {
    category: 'General Construction Debris',
    items: ['Drywall & Sheetrock', 'Wood & Lumber', 'Carpet & Flooring', 'Roofing Materials', 'Insulation', 'Packaging Materials']
  },
  {
    category: 'Heavy Materials',
    items: ['Concrete & Cement', 'Asphalt', 'Brick & Masonry', 'Stone & Rock', 'Tile & Porcelain', 'Dirt & Soil']
  },
  {
    category: 'Metal & Recyclables',
    items: ['Steel & Iron', 'Copper Wiring', 'Aluminum', 'Brass & Bronze', 'Stainless Steel', 'Mixed Metals']
  },
  {
    category: 'Organic & Wood Waste',
    items: ['Untreated Lumber', 'Treated Wood', 'Pallets & Crates', 'Tree Debris', 'Stumps', 'Yard Waste']
  }
];

export default function Materials() {
  return (
    <section id="materials" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Materials We Accept
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We handle virtually all types of construction debris and materials. If you don't see it listed, just ask!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {materialCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
                {category.category}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-orange-600 text-white rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Not Sure If We Can Haul It?
          </h3>
          <p className="text-lg sm:text-xl mb-6 opacity-90">
            Contact us for a free consultation. We handle specialty materials and can accommodate unique project requirements.
          </p>
          <a
            href="tel:+1234567890"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Call for Special Materials
          </a>
        </div>
      </div>
    </section>
  );
}
