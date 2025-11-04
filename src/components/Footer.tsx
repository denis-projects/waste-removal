import { Truck, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Truck className="h-8 w-8 text-orange-600" />
              <div>
                <h3 className="text-xl font-bold text-white">ProHaul Debris</h3>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional construction debris hauling and waste removal services. Licensed, insured, and trusted by contractors.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-orange-600 transition">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('materials')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-orange-600 transition">
                  Materials We Accept
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-orange-600 transition">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-orange-600 transition">
                  Get a Quote
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+1234567890" className="hover:text-orange-600 transition">
                    (555) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@prohauling.com" className="hover:text-orange-600 transition">
                    info@prohauling.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>123 Industrial Pkwy, Suite 100, Your City, ST 12345</div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Business Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Clock className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">24/7 Emergency Service</div>
                  <div className="text-sm">Available for urgent projects</div>
                </div>
              </li>
              <li className="mt-4">
                <div className="text-sm">
                  <div>Monday - Friday: 6:00 AM - 8:00 PM</div>
                  <div>Saturday: 7:00 AM - 6:00 PM</div>
                  <div>Sunday: 8:00 AM - 4:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 ProHaul Debris Services. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-orange-600 transition">Privacy Policy</a>
              <a href="#" className="hover:text-orange-600 transition">Terms of Service</a>
              <a href="#" className="hover:text-orange-600 transition">Licensing</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
