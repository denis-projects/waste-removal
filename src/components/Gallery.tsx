export default function Gallery() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Construction Site Cleanup',
      description: 'Full debris removal service'
    },
    {
      url: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Heavy Equipment',
      description: 'Specialized hauling trucks'
    },
    {
      url: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Demolition Projects',
      description: 'Large scale debris removal'
    },
    {
      url: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Commercial Projects',
      description: 'Professional hauling service'
    },
    {
      url: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Our Fleet',
      description: '50+ trucks ready to serve'
    },
    {
      url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Residential Services',
      description: 'Home renovation cleanup'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Work in Action
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            See our professional debris hauling services at work on construction sites across the region
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-800"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                  <p className="text-gray-300">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6 text-lg">
            Join hundreds of satisfied contractors who trust ProHaul Debris
          </p>
          <button
            onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
}
