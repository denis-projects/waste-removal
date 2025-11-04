import { useState, FormEvent } from 'react';
import { supabase, QuoteRequest } from '../lib/supabase';
import { CheckCircle, AlertCircle, Loader, TrendingDown } from 'lucide-react';

export default function QuoteForm() {
  const [formData, setFormData] = useState<QuoteRequest>({
    name: '',
    email: '',
    phone: '',
    address: '',
    debris_type: '',
    estimated_volume: '',
    project_type: '',
    preferred_date: '',
    additional_info: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('quote_requests')
        .insert([formData]);

      if (error) throw error;

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        debris_type: '',
        estimated_volume: '',
        project_type: '',
        preferred_date: '',
        additional_info: ''
      });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to submit quote request. Please try again or call us directly.');
      console.error('Error submitting quote:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="quote" className="py-16 sm:py-24 bg-gradient-to-br from-orange-50 to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold mb-4 animate-pulse">
            <TrendingDown className="h-5 w-5" />
            <span>15% OFF for First-Time Customers - Limited Time!</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Fill out the form below and receive a detailed quote within 2 hours. No commitment required.
          </p>
        </div>

        {status === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-green-900">Quote Request Submitted!</h3>
              <p className="text-green-700">We'll contact you within 2 hours with your personalized quote.</p>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8 flex items-center space-x-3">
            <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-red-900">Submission Failed</h3>
              <p className="text-red-700">{errorMessage}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="preferred_date" className="block text-sm font-semibold text-gray-700 mb-2">
                Preferred Service Date
              </label>
              <input
                type="date"
                id="preferred_date"
                name="preferred_date"
                value={formData.preferred_date}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
              Service Location Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              placeholder="123 Construction Site Rd, City, State 12345"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label htmlFor="project_type" className="block text-sm font-semibold text-gray-700 mb-2">
                Project Type *
              </label>
              <select
                id="project_type"
                name="project_type"
                required
                value={formData.project_type}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              >
                <option value="">Select type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
                <option value="demolition">Demolition</option>
                <option value="renovation">Renovation</option>
              </select>
            </div>

            <div>
              <label htmlFor="debris_type" className="block text-sm font-semibold text-gray-700 mb-2">
                Primary Debris Type *
              </label>
              <select
                id="debris_type"
                name="debris_type"
                required
                value={formData.debris_type}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              >
                <option value="">Select debris</option>
                <option value="concrete">Concrete/Asphalt</option>
                <option value="wood">Wood/Lumber</option>
                <option value="drywall">Drywall/Sheetrock</option>
                <option value="metal">Metal/Scrap</option>
                <option value="roofing">Roofing Materials</option>
                <option value="mixed">Mixed Debris</option>
              </select>
            </div>

            <div>
              <label htmlFor="estimated_volume" className="block text-sm font-semibold text-gray-700 mb-2">
                Estimated Volume *
              </label>
              <select
                id="estimated_volume"
                name="estimated_volume"
                required
                value={formData.estimated_volume}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              >
                <option value="">Select volume</option>
                <option value="small">Small (1-2 truck loads)</option>
                <option value="medium">Medium (3-5 truck loads)</option>
                <option value="large">Large (6-10 truck loads)</option>
                <option value="xlarge">Extra Large (10+ loads)</option>
              </select>
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="additional_info" className="block text-sm font-semibold text-gray-700 mb-2">
              Additional Information
            </label>
            <textarea
              id="additional_info"
              name="additional_info"
              value={formData.additional_info}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              placeholder="Tell us about site access, special requirements, or any other details..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-lg text-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {status === 'loading' ? (
              <>
                <Loader className="h-5 w-5 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <span>Get My Free Quote Now</span>
            )}
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            🔒 Your information is secure and will never be shared
          </p>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Prefer to call? Speak with a debris removal specialist now:</p>
          <a
            href="tel:+1234567890"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition"
          >
            📞 (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  );
}
