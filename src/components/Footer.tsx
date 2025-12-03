import { Truck, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Truck className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="text-xl font-bold text-white">Eco-Pastrim</h3>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-600 transition">
                  {t.header.services}
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('materials')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-600 transition">
                  {t.header.materials}
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-600 transition">
                  {t.header.whyUs}
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-600 transition">
                  {t.header.getQuote}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+1234567890" className="hover:text-blue-600 transition">
                    {t.header.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@prohauling.com" className="hover:text-blue-600 transition">
                    {t.header.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>Durres</div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{t.footer.hours}</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Clock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">{t.footer.hourText}</div>
                  <div className="text-sm">{t.footer.hourDesc}</div>
                </div>
              </li>
              <li className="mt-4">
                <div className="text-sm">
                  <div>Monday - Saturday: 8:00 AM - 5:00 PM</div>
                  <div>Sunday: 9:00 AM - 3:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              {t.footer.copyright}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-blue-600 transition">{t.footer.privacy}</a>
              <a href="#" className="hover:text-blue-600 transition">{t.footer.terms}</a>
              <a href="#" className="hover:text-blue-600 transition">{t.footer.licensing}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
