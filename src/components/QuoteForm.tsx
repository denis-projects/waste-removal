import { useState, FormEvent } from 'react';
import { CheckCircle, AlertCircle, Loader, TrendingDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
  debris_type: string;
  estimated_volume: string;
  project_type: string;
  preferred_date: string;
  additional_info: string;
}

export default function QuoteForm() {
  const { language } = useLanguage();
  const t = translations[language];

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
      // Replace 'YOUR_ACCESS_KEY_HERE' with your actual Web3Forms access key
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // Get this from web3forms.com
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          debris_type: formData.debris_type,
          estimated_volume: formData.estimated_volume,
          project_type: formData.project_type,
          preferred_date: formData.preferred_date,
          additional_info: formData.additional_info,
          subject: 'New Quote Request from Construction Debris Removal',
        }),
      });

      const data = await response.json();

      if (data.success) {
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
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(t.quote.error.message);
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
    <section id="quote" className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold mb-4 animate-pulse">
            <TrendingDown className="h-5 w-5" />
            <span>{t.quote.discount}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.quote.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            {t.quote.subtitle}
          </p>
        </div>

        {status === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-green-900">{t.quote.success.title}</h3>
              <p className="text-green-700">{t.quote.success.message}</p>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8 flex items-center space-x-3">
            <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-red-900">{t.quote.error.title}</h3>
              <p className="text-red-700">{errorMessage}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                {t.quote.fields.name} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                {t.quote.fields.email} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                {t.quote.fields.phone} *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="preferred_date" className="block text-sm font-semibold text-gray-700 mb-2">
                {t.quote.fields.date}
              </label>
              <input
                type="date"
                id="preferred_date"
                name="preferred_date"
                value={formData.preferred_date}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
              {t.quote.fields.address} *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="123 Construction Site Rd, City, State 12345"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label htmlFor="project_type" className="block text-sm font-semibold text-gray-700 mb-2">
                {t.quote.fields.projectType} *
              </label>
              <select
                id="project_type"
                name="project_type"
                required
                value={formData.project_type}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                <option value="">Select type</option>
                <option value="residential">{t.quote.projectTypes.residential}</option>
                <option value="commercial">{t.quote.projectTypes.commercial}</option>
                <option value="industrial">{t.quote.projectTypes.industrial}</option>
                <option value="demolition">{t.quote.projectTypes.demolition}</option>
                <option value="renovation">{t.quote.projectTypes.renovation}</option>
              </select>
            </div>

            <div>
              <label htmlFor="debris_type" className="block text-sm font-semibold text-gray-700 mb-2">
                {t.quote.fields.debrisType} *
              </label>
              <select
                id="debris_type"
                name="debris_type"
                required
                value={formData.debris_type}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                <option value="">Select debris</option>
                <option value="concrete">{t.quote.debrisTypes.concrete}</option>
                <option value="wood">{t.quote.debrisTypes.wood}</option>
                <option value="drywall">{t.quote.debrisTypes.drywall}</option>
                <option value="metal">{t.quote.debrisTypes.metal}</option>
                <option value="roofing">{t.quote.debrisTypes.roofing}</option>
                <option value="mixed">{t.quote.debrisTypes.mixed}</option>
              </select>
            </div>

            <div>
              <label htmlFor="estimated_volume" className="block text-sm font-semibold text-gray-700 mb-2">
                {t.quote.fields.volume} *
              </label>
              <select
                id="estimated_volume"
                name="estimated_volume"
                required
                value={formData.estimated_volume}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                <option value="">Select volume</option>
                <option value="small">{t.quote.volumes.small}</option>
                <option value="medium">{t.quote.volumes.medium}</option>
                <option value="large">{t.quote.volumes.large}</option>
                <option value="xlarge">{t.quote.volumes.xlarge}</option>
              </select>
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="additional_info" className="block text-sm font-semibold text-gray-700 mb-2">
              {t.quote.fields.info}
            </label>
            <textarea
              id="additional_info"
              name="additional_info"
              value={formData.additional_info}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Tell us about site access, special requirements, or any other details..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg text-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {status === 'loading' ? (
              <>
                <Loader className="h-5 w-5 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <span>{t.quote.fields.submit}</span>
            )}
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            🔒 {t.quote.fields.privacy}
          </p>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">{t.quote.fields.orCall}</p>
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