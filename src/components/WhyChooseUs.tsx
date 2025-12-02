import { Clock, Shield, DollarSign, Users, Award, Leaf } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function WhyChooseUs() {
  const { language } = useLanguage();
  const t = translations[language];

  const reasons = [
    { icon: Clock, key: 'speed' },
    { icon: DollarSign, key: 'pricing' },
    { icon: Shield, key: 'insurance' },
    { icon: Users, key: 'team' },
    { icon: Leaf, key: 'eco' },
    { icon: Award, key: 'trust' }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t.whyUs.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            {t.whyUs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const reasonData = t.whyUs[reason.key as keyof typeof t.whyUs] as any;
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-600 transition"
              >
                <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <reason.icon className="h-7 w-7 text-white" />
                </div>

                <div className="text-blue-400 font-bold text-sm mb-2">
                  {reasonData.stat}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {reasonData.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {reasonData.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-400">{t.whyUs.stats.projects}</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-400">{t.whyUs.stats.availability}</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-blue-400 mb-2">100%</div>
            <div className="text-gray-400">{t.whyUs.stats.satisfaction}</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-400">{t.whyUs.stats.trucks}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
