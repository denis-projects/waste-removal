import { Truck, Phone, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Eco-Pastrim</h1>
              <p className="text-xs text-gray-600 hidden sm:block">{t.header.subtitle}</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition">{t.header.services}</button>
            <button onClick={() => scrollToSection('materials')} className="text-gray-700 hover:text-blue-600 transition">{t.header.materials}</button>
            <button onClick={() => scrollToSection('why-us')} className="text-gray-700 hover:text-blue-600 transition">{t.header.whyUs}</button>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-gray-600" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'en' | 'sq')}
                className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded transition cursor-pointer"
              >
                <option value="en">English</option>
                <option value="sq">Shqip</option>
              </select>
            </div>
            <button onClick={() => scrollToSection('quote')} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">{t.header.getQuote}</button>
          </nav>

          <div className="flex md:hidden items-center space-x-3">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'sq')}
              className="text-xs bg-gray-100 px-2 py-1 rounded"
            >
              <option value="en">EN</option>
              <option value="sq">SQ</option>
            </select>
            <a href="tel:+355 682042980" className="text-blue-600">
              <Phone className="h-6 w-6" />
            </a>
            <button onClick={() => scrollToSection('quote')} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">{t.header.getQuote}</button>
          </div>
        </div>

        <div className="md:hidden flex justify-center space-x-4 pb-3 text-sm">
          <button onClick={() => scrollToSection('services')} className="text-gray-700">{t.header.services}</button>
          <button onClick={() => scrollToSection('materials')} className="text-gray-700">{t.header.materials}</button>
          <button onClick={() => scrollToSection('why-us')} className="text-gray-700">{t.header.whyUs}</button>
        </div>
      </div>

      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>{t.header.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>{t.header.email}</span>
          </div>
          <div className="font-semibold animate-pulse">🎉 {t.header.discount}</div>
        </div>
      </div>
    </header>
  );
}
