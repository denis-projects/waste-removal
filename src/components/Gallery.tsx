import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Mock translations for demo
const mockTranslations = {
  gallery: {
    title: "Our Projects",
    subtitle: "Showcasing excellence in construction and renovation",
    site1: { title: "Modern Architecture", desc: "Contemporary residential design" },
    site2: { title: "Interior Excellence", desc: "Luxury interior renovations" },
    site3: { title: "Urban Development", desc: "City skyline transformation" },
    site4: { title: "Coastal Properties", desc: "Beachfront construction projects" },
    site5: { title: "Scenic Views", desc: "Mountain resort development" },
    site6: { title: "Commercial Spaces", desc: "Office building modernization" },
    testimonial: "Ready to bring your vision to life?",
    cta: "Get a Free Quote"
  }
};

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const t = mockTranslations;

  const images = [
    { url: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=800', key: 'site1' },
    { url: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800', key: 'site2' },
    { url: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800', key: 'site3' },
    { url: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=800', key: 'site4' },
    { url: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800', key: 'site5' },
    { url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800', key: 'site6' }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleManualNavigation = (direction) => {
    setIsAutoPlaying(false);
    direction === 'next' ? nextSlide() : prevSlide();
  };

  return (
    <section className="py-16 sm:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Image Display */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[16/9] bg-gray-800">
            {images.map((image, index) => {
              const imageData = t.gallery[image.key];
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + images.length) % images.length;
              const isNext = index === (currentIndex + 1) % images.length;

              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${isActive
                    ? 'opacity-100 scale-100 z-10'
                    : isPrev
                      ? 'opacity-0 -translate-x-full scale-95'
                      : isNext
                        ? 'opacity-0 translate-x-full scale-95'
                        : 'opacity-0 scale-95'
                    }`}
                >
                  <img
                    src={image.url}
                    alt={imageData.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Content Overlay */}
                  <div className={`absolute bottom-0 left-0 right-0 p-8 sm:p-12 transition-all duration-700 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    <div className="max-w-2xl">
                      <div className="inline-block px-4 py-1 bg-blue-600/80 backdrop-blur-sm rounded-full text-sm font-semibold text-white mb-4">
                        Project {index + 1} of {images.length}
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                        {imageData.title}
                      </h3>
                      <p className="text-lg text-gray-200">
                        {imageData.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => handleManualNavigation('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => handleManualNavigation('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${index === currentIndex
                  ? 'bg-blue-600 w-12 h-3'
                  : 'bg-gray-600 hover:bg-gray-500 w-3 h-3'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail Preview Strip */}
          <div className="hidden lg:flex gap-4 mt-8 justify-center">
            {images.map((image, index) => {
              const imageData = t.gallery[image.key];
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${index === currentIndex
                    ? 'ring-4 ring-blue-600 scale-105 opacity-100'
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                  style={{ width: '120px', height: '80px' }}
                >
                  <img
                    src={image.url}
                    alt={imageData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-blue-600/20 transition-opacity ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6 text-lg">
            {t.gallery.testimonial}
          </p>
          <button
            onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/50"
          >
            {t.gallery.cta}
          </button>
        </div>
      </div>
    </section>
  );
}