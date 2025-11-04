import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white overflow-hidden">
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
          <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            ⚡ Same-Day Service Available
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Professional Construction Debris Hauling
          </h2>

          <p className="text-xl sm:text-2xl text-gray-200 mb-8">
            Fast, reliable, and affordable waste removal for contractors and builders. We handle everything from demolition debris to concrete disposal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={scrollToQuote}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center space-x-2 transition transform hover:scale-105"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            <a
              href="tel:+1234567890"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center space-x-2 transition"
            >
              <span>Call Now</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
              <span className="text-sm sm:text-base">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
              <span className="text-sm sm:text-base">24/7 Availability</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
              <span className="text-sm sm:text-base">Eco-Friendly Disposal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
