import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Photo from '../assets/Photo.jpeg'
import Photo2 from '../assets/Photo2.jpeg'
import Photo3 from '../assets/Photo3.jpeg'
import Photo4 from '../assets/Photo4.jpeg'
import Photo5 from '../assets/Photo5.jpeg'
import Photo6 from '../assets/Photo6.jpeg'
import Photo7 from '../assets/Photo7.jpeg'



// Content specific to debris removal
const galleryContent = {
  title: "Our Cleanup Projects",
  subtitle: "Real jobs completed by our professional debris removal team",
  testimonial: "Need debris removed fast and hassle-free?",
  cta: "Request a Free Quote",

  slides: {
    site1: { title: "Construction Debris", desc: "Post-construction site cleanout" },
    site2: { title: "Home Cleanout", desc: "Full house and apartment junk removal" },
    site3: { title: "Yard Cleanup", desc: "Branches, leaves and green waste hauling" },
    site4: { title: "Renovation Waste", desc: "Drywall, wood, tiles and rubble removal" },
    site5: { title: "Garage Cleanout", desc: "Furniture and appliance disposal" },
    site6: { title: "Commercial Cleanup", desc: "Office and warehouse debris removal" },
    site7: { title: "Commercial Cleanup", desc: "Office and warehouse debris removal" }
  }
};

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Realistic debris-removal related photos
  const images = [
    {
      url: Photo,
      key: "site1"
    },
    {
      url: Photo2,
      key: "site2"
    },
    {
      url: Photo3,
      key: "site3"
    },
    {
      url: Photo4,
      key: "site4"
    },
    {
      url: Photo5,
      key: "site5"
    },
    {
      url: Photo6,
      key: "site6"
    },
    {
      url: Photo7,
      key: "site7"
    }
  ];

  const totalSlides = images.length;

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % totalSlides);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleNav = (direction: "next" | "prev") => {
    setIsAutoPlaying(false);
    direction === "next" ? nextSlide() : prevSlide();
  };

  return (
    <section className="py-16 sm:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {galleryContent.title}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {galleryContent.subtitle}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">

          {/* Main Slide */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[16/9] bg-gray-800">

            {images.map((image, index) => {
              const data = galleryContent.slides[image.key as keyof typeof galleryContent.slides];
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + totalSlides) % totalSlides;
              const isNext = index === (currentIndex + 1) % totalSlides;

              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out
                  ${isActive
                      ? "opacity-100 scale-100 z-10"
                      : isPrev
                        ? "opacity-0 -translate-x-full scale-95"
                        : isNext
                          ? "opacity-0 translate-x-full scale-95"
                          : "opacity-0 scale-95"
                    }`}
                >
                  <img
                    src={image.url}
                    alt={data.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Text */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-700 ${isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                      }`}
                  >
                    <div className="max-w-xl">
                      <div className="inline-block mb-4 px-4 py-1 bg-orange-500/90 text-white text-sm font-semibold rounded-full">
                        Job {index + 1} of {totalSlides}
                      </div>

                      <h3 className="text-3xl font-bold text-white mb-2">
                        {data.title}
                      </h3>
                      <p className="text-gray-200 text-lg">
                        {data.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <button
            onClick={() => handleNav("prev")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 p-3 rounded-full text-white backdrop-blur transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => handleNav("next")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 p-3 rounded-full text-white backdrop-blur transition"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all ${index === currentIndex
                  ? "bg-orange-500 w-10 h-3"
                  : "bg-gray-600 w-3 h-3 hover:bg-gray-500"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnails */}
          <div className="hidden lg:flex justify-center gap-4 mt-8">
            {images.map((image, index) => {
              const data =
                galleryContent.slides[
                image.key as keyof typeof galleryContent.slides
                ];
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative overflow-hidden rounded-lg transition-all
                  ${currentIndex === index
                      ? "ring-4 ring-orange-500 scale-105"
                      : "opacity-70 hover:opacity-100 hover:scale-105"
                    }`}
                  style={{ width: "120px", height: "80px" }}
                >
                  <img
                    src={image.url}
                    alt={data.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-300 text-lg mb-6">
            {galleryContent.testimonial}
          </p>

          <button
            onClick={() =>
              document.getElementById("quote")?.scrollIntoView({
                behavior: "smooth"
              })
            }
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-500/40"
          >
            {galleryContent.cta}
          </button>
        </div>

      </div>
    </section>
  );
}
