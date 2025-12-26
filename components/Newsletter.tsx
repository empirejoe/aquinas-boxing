/**
 * Newsletter Component - Beehiiv newsletter signup
 * Collects email, phone, and mailing address for updates
 */

'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [preferEmail, setPreferEmail] = useState(true);
  const [preferSMS, setPreferSMS] = useState(false);
  const [preferMail, setPreferMail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // TODO: Replace with your actual Beehiiv publication ID
    // Get this from: https://app.beehiiv.com/settings/publications
    const BEEHIIV_PUBLICATION_ID = 'YOUR_PUBLICATION_ID';

    try {
      // Beehiiv API endpoint
      const response = await fetch(`https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BEEHIIV_API_KEY}`, // Add to .env.local
        },
        body: JSON.stringify({
          email,
          custom_fields: {
            phone: preferSMS ? phone : '',
            name,
            mailing_address: preferMail ? address : '',
            preferences: {
              email: preferEmail,
              sms: preferSMS,
              mail: preferMail,
            }
          },
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: 'aquinas_boxing_website',
        }),
      });

      if (response.ok) {
        setSubmitMessage('Success! You\'re signed up for updates. Check your email!');
        // Reset form
        setEmail('');
        setPhone('');
        setName('');
        setAddress('');
        setPreferEmail(true);
        setPreferSMS(false);
        setPreferMail(false);
      } else {
        const error = await response.json();
        setSubmitMessage(`Error: ${error.message || 'Something went wrong. Please try again.'}`);
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setSubmitMessage('Error: Unable to connect. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsletter" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-gold-50 to-gold-100 rounded-full shadow-sm">
            <span className="text-gold-600 font-semibold text-sm tracking-wide">Stay In The Ring</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Never Miss a <span className="text-gold-600">Bout</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get fight schedules, training updates, and exclusive Aquinas Boxing news delivered straight to you
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg">
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-t-2xl" />

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all outline-none"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all outline-none"
                placeholder="your@email.com"
              />
            </div>

            {/* Preferences Header */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-900 mb-4">
                How would you like to receive updates?
              </p>

              {/* Email Checkbox */}
              <label className="flex items-center gap-3 mb-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={preferEmail}
                  onChange={(e) => setPreferEmail(e.target.checked)}
                  className="w-5 h-5 rounded border-2 border-gold-500 text-gold-600 focus:ring-2 focus:ring-gold-500 cursor-pointer"
                />
                <span className="text-gray-700 font-medium group-hover:text-gold-600 transition-colors">
                  📧 Email Updates (Recommended)
                </span>
              </label>

              {/* SMS Checkbox */}
              <label className="flex items-center gap-3 mb-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={preferSMS}
                  onChange={(e) => setPreferSMS(e.target.checked)}
                  className="w-5 h-5 rounded border-2 border-gold-500 text-gold-600 focus:ring-2 focus:ring-gold-500 cursor-pointer"
                />
                <span className="text-gray-700 font-medium group-hover:text-gold-600 transition-colors">
                  📱 Text Message Updates
                </span>
              </label>

              {preferSMS && (
                <div className="ml-8 mb-4">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required={preferSMS}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>
              )}

              {/* Physical Mail Checkbox */}
              <label className="flex items-center gap-3 mb-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={preferMail}
                  onChange={(e) => setPreferMail(e.target.checked)}
                  className="w-5 h-5 rounded border-2 border-gold-500 text-gold-600 focus:ring-2 focus:ring-gold-500 cursor-pointer"
                />
                <span className="text-gray-700 font-medium group-hover:text-gold-600 transition-colors">
                  📬 Physical Mail Updates
                </span>
              </label>

              {preferMail && (
                <div className="ml-8 mb-4">
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required={preferMail}
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all outline-none resize-none"
                    placeholder="Street Address&#10;City, State ZIP"
                  />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || (!preferEmail && !preferSMS && !preferMail)}
              className="w-full px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-semibold text-lg rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {isSubmitting ? 'Signing Up...' : 'Join The Fight'}
            </button>

            {/* Submit Message */}
            {submitMessage && (
              <div className={`p-4 rounded-lg ${submitMessage.startsWith('Success') ? 'border border-green-200 bg-green-50' : 'border border-red-200 bg-red-50'}`}>
                <p className={`font-medium text-center ${submitMessage.startsWith('Success') ? 'text-green-700' : 'text-red-700'}`}>
                  {submitMessage}
                </p>
              </div>
            )}

            {/* Privacy Note */}
            <p className="text-xs text-gray-500 text-center">
              We respect your privacy. Unsubscribe anytime. No spam, just boxing.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
