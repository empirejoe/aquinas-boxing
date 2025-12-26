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
    <section id="newsletter" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-black to-maroon-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-concrete opacity-15" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 bg-gold-500 border-2 border-black">
            <span className="text-black font-black text-sm uppercase tracking-widest">Stay In The Ring</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 uppercase tracking-tight">
            Never Miss a <span className="text-gold-500">Bout</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-bold">
            Get fight schedules, training updates, and exclusive Aquinas Boxing news delivered straight to you
          </p>
          <div className="w-32 h-2 bg-gold-500 mx-auto mt-6 shadow-lg" style={{boxShadow: '0 0 20px rgba(234, 179, 8, 0.5)'}} />
        </div>

        {/* Form */}
        <div className="bg-gradient-to-br from-gray-900 to-black border-4 border-gold-500 p-8 md:p-12 shadow-2xl">
          {/* Top tape effect */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-black text-gold-400 uppercase tracking-wider mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-gold-500 text-white font-bold placeholder-gray-500 transition-colors outline-none"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-black text-gold-400 uppercase tracking-wider mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-gold-500 text-white font-bold placeholder-gray-500 transition-colors outline-none"
                placeholder="your@email.com"
              />
            </div>

            {/* Preferences Header */}
            <div className="pt-4 border-t-2 border-maroon-800">
              <p className="text-sm font-black text-white uppercase tracking-wider mb-4">
                How would you like to receive updates?
              </p>

              {/* Email Checkbox */}
              <label className="flex items-center gap-3 mb-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={preferEmail}
                  onChange={(e) => setPreferEmail(e.target.checked)}
                  className="w-5 h-5 bg-black border-2 border-gold-500 checked:bg-gold-500 cursor-pointer"
                />
                <span className="text-gray-300 font-bold group-hover:text-gold-400 transition-colors">
                  📧 Email Updates (Recommended)
                </span>
              </label>

              {/* SMS Checkbox */}
              <label className="flex items-center gap-3 mb-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={preferSMS}
                  onChange={(e) => setPreferSMS(e.target.checked)}
                  className="w-5 h-5 bg-black border-2 border-gold-500 checked:bg-gold-500 cursor-pointer"
                />
                <span className="text-gray-300 font-bold group-hover:text-gold-400 transition-colors">
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
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-gold-500 text-white font-bold placeholder-gray-500 transition-colors outline-none"
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
                  className="w-5 h-5 bg-black border-2 border-gold-500 checked:bg-gold-500 cursor-pointer"
                />
                <span className="text-gray-300 font-bold group-hover:text-gold-400 transition-colors">
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
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-gold-500 text-white font-bold placeholder-gray-500 transition-colors outline-none resize-none"
                    placeholder="Street Address&#10;City, State ZIP"
                  />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || (!preferEmail && !preferSMS && !preferMail)}
              className="group relative w-full px-8 py-5 bg-gold-500 hover:bg-gold-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-black text-xl uppercase tracking-wider transition-all duration-300 shadow-2xl border-2 border-black overflow-hidden"
            >
              <span className="relative z-10">
                {isSubmitting ? 'Signing Up...' : 'Join The Fight'}
              </span>
              <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>

            {/* Submit Message */}
            {submitMessage && (
              <div className={`p-4 border-2 ${submitMessage.startsWith('Success') ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10'}`}>
                <p className={`font-bold text-center ${submitMessage.startsWith('Success') ? 'text-green-400' : 'text-red-400'}`}>
                  {submitMessage}
                </p>
              </div>
            )}

            {/* Privacy Note */}
            <p className="text-xs text-gray-500 text-center">
              We respect your privacy. Unsubscribe anytime. No spam, just boxing.
            </p>
          </form>

          {/* Bottom tape effect */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />
        </div>
      </div>
    </section>
  );
}
