import { Truck, Phone, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 130;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-blue-300" />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide">GREY SKIP CO</h1>
              <p className="text-xs text-blue-200 hidden sm:block">{t.header.subtitle}</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('services')} className="text-blue-100 hover:text-white transition font-medium">{t.header.services}</button>
            <button onClick={() => scrollToSection('materials')} className="text-blue-100 hover:text-white transition font-medium">{t.header.materials}</button>
            <button onClick={() => scrollToSection('why-us')} className="text-blue-100 hover:text-white transition font-medium">{t.header.whyUs}</button>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-blue-200" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'en' | 'sq' | 'it')}
                className="text-sm bg-blue-700 text-white hover:bg-blue-600 px-3 py-1 rounded transition cursor-pointer border border-blue-600"
              >
                <option value="sq">Shqip</option>
                <option value="en">English</option>
                <option value="it">Italiano</option>
              </select>
            </div>
            <button onClick={() => scrollToSection('quote')} className="bg-white text-blue-900 px-6 py-2 rounded-lg hover:bg-blue-50 transition font-semibold shadow-md">{t.header.getQuote}</button>
          </nav>

          <div className="flex md:hidden items-center space-x-3">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'sq' | 'it')}
              className="text-xs bg-blue-700 text-white px-2 py-1 rounded border border-blue-600"
            >
              <option value="sq">AL</option>
              <option value="en">EN</option>
              <option value="it">IT</option>
            </select>
            <a href="tel:+355688077788" className="text-blue-200 hover:text-white transition">
              <Phone className="h-6 w-6" />
            </a>
            <button onClick={() => scrollToSection('quote')} className="bg-white text-blue-900 px-4 py-2 rounded-lg text-sm font-semibold shadow-md">{t.header.getQuote}</button>
          </div>
        </div>

        <div className="md:hidden flex justify-center space-x-4 pb-3 text-sm border-t border-blue-700 pt-3">
          <button onClick={() => scrollToSection('services')} className="text-blue-100 hover:text-white transition">{t.header.services}</button>
          <button onClick={() => scrollToSection('materials')} className="text-blue-100 hover:text-white transition">{t.header.materials}</button>
          <button onClick={() => scrollToSection('why-us')} className="text-blue-100 hover:text-white transition">{t.header.whyUs}</button>
        </div>
      </div>

      <div className="bg-blue-700 text-white py-2 border-t border-blue-600">
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