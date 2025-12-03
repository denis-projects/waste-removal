import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-3xl">
          <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            ⚡ {t.hero.badge}
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t.hero.title}
          </h2>

          <p className="text-xl sm:text-2xl text-gray-200 mb-8">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={scrollToQuote}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center space-x-2 transition transform hover:scale-105"
            >
              <span>{t.hero.cta}</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            <a
              href="tel:+355 682042980'"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center space-x-2 transition"
            >
              <span>{t.header.callNow}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
              <span className="text-sm sm:text-base">{t.hero.features.licensed}</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
              <span className="text-sm sm:text-base">{t.hero.features.availability}</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
              <span className="text-sm sm:text-base">{t.hero.features.eco}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
