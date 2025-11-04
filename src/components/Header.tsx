import { Truck, Phone, Mail } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-orange-600" />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">ProHaul Debris</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Professional Construction Waste Solutions</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 transition">Services</button>
            <button onClick={() => scrollToSection('materials')} className="text-gray-700 hover:text-orange-600 transition">Materials</button>
            <button onClick={() => scrollToSection('why-us')} className="text-gray-700 hover:text-orange-600 transition">Why Us</button>
            <button onClick={() => scrollToSection('quote')} className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition font-semibold">Get Quote</button>
          </nav>

          <div className="flex md:hidden items-center space-x-3">
            <a href="tel:+1234567890" className="text-orange-600">
              <Phone className="h-6 w-6" />
            </a>
            <button onClick={() => scrollToSection('quote')} className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">Quote</button>
          </div>
        </div>

        <div className="md:hidden flex justify-center space-x-4 pb-3 text-sm">
          <button onClick={() => scrollToSection('services')} className="text-gray-700">Services</button>
          <button onClick={() => scrollToSection('materials')} className="text-gray-700">Materials</button>
          <button onClick={() => scrollToSection('why-us')} className="text-gray-700">Why Us</button>
        </div>
      </div>

      <div className="bg-orange-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>info@prohauling.com</span>
          </div>
          <div className="font-semibold animate-pulse">🎉 15% OFF First-Time Customers - Limited Time!</div>
        </div>
      </div>
    </header>
  );
}
