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
    <section id="materials" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.materials.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.materials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {materialCategories.map((cat, index) => {
            const categoryData = t.materials[cat.key as keyof typeof t.materials] as any;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mr-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {categoryData.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {categoryData.items.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start space-x-3 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0 mt-2" />
                      <span className="text-gray-700 text-sm group-hover/item:text-gray-900 transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]" />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              {t.materials.notSure}
            </h3>
            <p className="text-lg sm:text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
              {t.materials.notSureDesc}
            </p>
            <a
              href="tel:+355688077788"
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              {t.materials.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}