import { Phone, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';
import Logo from "../assets/LOGO-WASTE-REMOVAL.jpg"

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
    <header className="bg-gradient-to-r from-[#0166a8] to-[#0178c5] shadow-2xl sticky top-0 z-50 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 transition-all duration-300">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <img src={Logo} alt="Logo" className="h-12 w-12 sm:h-16 sm:w-16 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-lg" />
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-wide leading-tight drop-shadow-md">GREY SKIP CO sh.p.k</h1>
              <p className="text-xs text-blue-50 mt-0.5 font-medium tracking-wide">Ne e vendosim - ju e mbushni - ne e marrim</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-blue-100 transition-all duration-300 font-medium relative group">
              {t.header.services}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('materials')} className="text-white hover:text-blue-100 transition-all duration-300 font-medium relative group">
              {t.header.materials}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('why-us')} className="text-white hover:text-blue-100 transition-all duration-300 font-medium relative group">
              {t.header.whyUs}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Globe className="h-4 w-4 text-white" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'en' | 'sq' | 'it')}
                className="text-sm bg-transparent text-white px-2 py-0.5 rounded transition-all duration-300 cursor-pointer border-none outline-none"
              >
                <option value="sq" className="bg-[#0166a8] text-white">Shqip</option>
                <option value="en" className="bg-[#0166a8] text-white">English</option>
                <option value="it" className="bg-[#0166a8] text-white">Italiano</option>
              </select>
            </div>
            <button onClick={() => scrollToSection('quote')} className="bg-white text-[#0166a8] px-6 py-2.5 rounded-lg hover:bg-blue-50 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-semibold shadow-lg transform">
              {t.header.getQuote}
            </button>
          </nav>

          <div className="flex md:hidden items-center space-x-3">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'sq' | 'it')}
              className="text-xs bg-white/10 text-white px-2 py-1 rounded border border-white/20 backdrop-blur-sm"
            >
              <option value="sq" className="bg-[#0166a8]">AL</option>
              <option value="en" className="bg-[#0166a8]">EN</option>
              <option value="it" className="bg-[#0166a8]">IT</option>
            </select>
            <a href="tel:+355688077788" className="text-white hover:text-blue-100 transition-all duration-300 hover:scale-110 transform">
              <Phone className="h-6 w-6" />
            </a>
            <button onClick={() => scrollToSection('quote')} className="bg-white text-[#0166a8] px-4 py-2 rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 transform">
              {t.header.getQuote}
            </button>
          </div>
        </div>

        <div className="md:hidden flex justify-center space-x-4 pb-3 text-sm border-t border-white/20 pt-3">
          <button onClick={() => scrollToSection('services')} className="text-white hover:text-blue-100 transition-all duration-300 relative group">
            {t.header.services}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </button>
          <button onClick={() => scrollToSection('materials')} className="text-white hover:text-blue-100 transition-all duration-300 relative group">
            {t.header.materials}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </button>
          <button onClick={() => scrollToSection('why-us')} className="text-white hover:text-blue-100 transition-all duration-300 relative group">
            {t.header.whyUs}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#005599] to-[#006bb3] text-white py-2.5 border-t border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm">
          <div className="flex items-center space-x-2 hover:text-blue-100 transition-colors duration-300">
            <Phone className="h-4 w-4 animate-pulse" />
            <span className="font-medium">{t.header.phone}</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-blue-100 transition-colors duration-300">
            <Mail className="h-4 w-4" />
            <span className="font-medium">{t.header.email}</span>
          </div>
          <div className="font-bold bg-white/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-sm animate-pulse shadow-lg">
            🎉 {t.header.discount}
          </div>
        </div>
      </div>
    </header>
  );
}