/**
 * Floating Newsletter Button - Always visible signup button with modal
 * Appears on all pages, sticky to bottom-right corner
 */

'use client';

import { useState } from 'react';

export default function FloatingNewsletter() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // TODO: Replace with your actual Beehiiv publication ID
    const BEEHIIV_PUBLICATION_ID = 'YOUR_PUBLICATION_ID';

    try {
      const response = await fetch(`https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          custom_fields: {
            phone: phone || '',
            name,
            mailing_address: address || '',
            preferences: {
              email: true,
              sms: phone ? true : false,
              mail: address ? true : false,
            }
          },
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: 'floating_signup',
        }),
      });

      if (response.ok) {
        setSubmitMessage('Success! You\'re in the ring. Check your email!');
        setTimeout(() => {
          setIsModalOpen(false);
          setEmail('');
          setPhone('');
          setName('');
          setAddress('');
          setSubmitMessage('');
        }, 3000);
      } else {
        const error = await response.json();
        setSubmitMessage(`Error: ${error.message || 'Something went wrong.'}`);
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setSubmitMessage('Error: Unable to connect. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isMinimized ? (
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative bg-gold-500 hover:bg-gold-400 text-black font-black px-6 py-4 shadow-2xl border-2 border-black transition-all duration-300 hover:scale-105 flex items-center gap-3"
            aria-label="Sign up for newsletter"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="hidden sm:block uppercase tracking-wide text-sm">Get Updates</span>

            {/* Pulse animation */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-maroon-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-maroon-600"></span>
            </span>

            {/* Minimize button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMinimized(true);
              }}
              className="absolute -top-2 -left-2 w-6 h-6 bg-black hover:bg-gray-800 border border-gold-500 flex items-center justify-center transition-colors"
              aria-label="Minimize"
            >
              <svg className="w-3 h-3 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </button>
        ) : (
          <button
            onClick={() => setIsMinimized(false)}
            className="w-14 h-14 bg-gold-500 hover:bg-gold-400 text-black rounded-full shadow-2xl border-2 border-black flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Show newsletter signup"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-black border-4 border-gold-500 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top tape effect */}
            <div className="h-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />

            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 bg-maroon-900 hover:bg-maroon-800 border-2 border-gold-500 flex items-center justify-center transition-all duration-300 z-10"
              aria-label="Close"
            >
              <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8 md:p-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-block mb-4 px-6 py-2 bg-gold-500 border-2 border-black">
                  <span className="text-black font-black text-xs uppercase tracking-widest">Stay In The Ring</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-3">
                  Never Miss a <span className="text-gold-500">Bout</span>
                </h2>
                <p className="text-gray-300 font-bold">
                  Get fight schedules, training updates, and exclusive news
                </p>
                <div className="w-24 h-1 bg-gold-500 mx-auto mt-4" />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-black text-gold-400 uppercase tracking-wider mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-gold-500 text-white font-bold placeholder-gray-500 transition-colors outline-none"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-black text-gold-400 uppercase tracking-wider mb-2">
                    📧 Email *
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-gold-500 text-white font-bold placeholder-gray-500 transition-colors outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-black text-gold-400 uppercase tracking-wider mb-2">
                    📱 Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="modal-phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-gold-500 text-white font-bold placeholder-gray-500 transition-colors outline-none"
                    placeholder="(555) 123-4567"
                  />
                  <p className="text-xs text-gray-500 mt-1">For text message updates</p>
                </div>

                {/* Mailing Address */}
                <div>
                  <label htmlFor="modal-address" className="block text-xs font-black text-gold-400 uppercase tracking-wider mb-2">
                    📬 Mailing Address (Optional)
                  </label>
                  <textarea
                    id="modal-address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-gold-500 text-white font-bold placeholder-gray-500 transition-colors outline-none resize-none"
                    placeholder="Street Address&#10;City, State ZIP"
                  />
                  <p className="text-xs text-gray-500 mt-1">For physical mail updates</p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full px-6 py-4 bg-gold-500 hover:bg-gold-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-black text-lg uppercase tracking-wider transition-all duration-300 shadow-xl border-2 border-black overflow-hidden"
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Signing Up...' : 'Join The Fight'}
                  </span>
                  <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>

                {/* Submit Message */}
                {submitMessage && (
                  <div className={`p-3 border-2 ${submitMessage.startsWith('Success') ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10'}`}>
                    <p className={`font-bold text-sm text-center ${submitMessage.startsWith('Success') ? 'text-green-400' : 'text-red-400'}`}>
                      {submitMessage}
                    </p>
                  </div>
                )}

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center">
                  Unsubscribe anytime. No spam, just boxing.
                </p>
              </form>
            </div>

            {/* Bottom tape effect */}
            <div className="h-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />
          </div>
        </div>
      )}
    </>
  );
}
