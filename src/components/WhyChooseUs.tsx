import { Clock, Shield, DollarSign, Users, Award, Leaf } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Fast & Reliable Service',
    description: 'Same-day and next-day service available. We understand construction timelines and never slow down your project.',
    stat: '2-Hour Response Time'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprise charges. Get an accurate quote upfront and lock in your price. Volume discounts available.',
    stat: 'Up to 20% Off for Bulk'
  },
  {
    icon: Shield,
    title: 'Fully Licensed & Insured',
    description: '$2M liability insurance coverage. Licensed by state and local authorities. Your project is protected.',
    stat: '$2M Coverage'
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: '15+ years serving contractors and builders. Our crew is trained, professional, and knows construction sites.',
    stat: '15+ Years Experience'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Disposal',
    description: 'We recycle up to 70% of collected materials. Partner with certified recycling facilities. Responsible waste management.',
    stat: '70% Recycling Rate'
  },
  {
    icon: Award,
    title: 'Trusted by Professionals',
    description: 'Rated 4.9/5 stars by contractors. Preferred vendor for major construction companies. Excellence is our standard.',
    stat: '4.9/5 Rating'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose ProHaul Debris?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just another hauling company. We're your construction partner, committed to keeping your projects on schedule and within budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-orange-600 transition"
            >
              <div className="bg-orange-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <reason.icon className="h-7 w-7 text-white" />
              </div>

              <div className="text-orange-400 font-bold text-sm mb-2">
                {reason.stat}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {reason.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-400">Availability</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-400">Trucks in Fleet</div>
          </div>
        </div>
      </div>
    </section>
  );
}
