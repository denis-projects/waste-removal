import { Truck, Recycle, Hammer, Building2, TreePine, Package } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: Hammer,
      key: 'demolition'
    },
    {
      icon: Building2,
      key: 'concrete'
    },
    {
      icon: TreePine,
      key: 'lumber'
    },
    {
      icon: Recycle,
      key: 'metal'
    },
    {
      icon: Package,
      key: 'dumpster'
    },
    {
      icon: Truck,
      key: 'cleanup'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const serviceData = t.services[service.key as keyof typeof t.services] as any;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {serviceData.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {serviceData.description}
                </p>

                <ul className="space-y-2">
                  {serviceData.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
