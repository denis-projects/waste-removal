import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function Materials() {
  const { language } = useLanguage();
  const t = translations[language];

  const materialCategories = [
    { key: 'general' },
    { key: 'heavy' },
    { key: 'metal' },
    { key: 'organic' }
  ];

  return (
    <section id="materials" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.materials.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.materials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {materialCategories.map((cat, index) => {
            const categoryData = t.materials[cat.key as keyof typeof t.materials] as any;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-600">
                  {categoryData.category}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {categoryData.items.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-blue-600 text-white rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            {t.materials.notSure}
          </h3>
          <p className="text-lg sm:text-xl mb-6 opacity-90">
            {t.materials.notSureDesc}
          </p>
          <a
            href="tel:+355688077788"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            {t.materials.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
