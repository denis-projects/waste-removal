import { Truck, Recycle, Hammer, Building2, TreePine, Package } from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Demolition Debris Removal',
    description: 'Complete removal of demolition waste including drywall, wood, metal, and mixed materials from your job site.',
    features: ['Same-day pickup', 'Any volume', 'All materials']
  },
  {
    icon: Building2,
    title: 'Concrete & Asphalt Hauling',
    description: 'Specialized equipment for heavy concrete, asphalt, brick, and stone removal. We handle the toughest materials.',
    features: ['Heavy equipment', 'Crushed & recycled', 'Commercial grade']
  },
  {
    icon: TreePine,
    title: 'Lumber & Wood Waste',
    description: 'Efficient removal of construction lumber, pallets, treated wood, and organic waste materials.',
    features: ['Eco-friendly disposal', 'Recycling options', 'Clean job sites']
  },
  {
    icon: Recycle,
    title: 'Scrap Metal Collection',
    description: 'We collect and recycle all ferrous and non-ferrous metals, copper, aluminum, and steel materials.',
    features: ['Get paid for scrap', 'Certified recycling', 'Environmentally safe']
  },
  {
    icon: Package,
    title: 'Dumpster Rental Service',
    description: 'Multiple dumpster sizes available for long-term projects. Flexible rental periods to fit your schedule.',
    features: ['10-40 yard sizes', 'Weekly pickups', 'Flat rate pricing']
  },
  {
    icon: Truck,
    title: 'Full Job Site Cleanup',
    description: 'Complete post-construction cleaning service. We leave your site spotless and ready for the next phase.',
    features: ['Final cleanup', 'Detailed service', 'Fast turnaround']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive debris hauling solutions for contractors, builders, and construction professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-orange-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
