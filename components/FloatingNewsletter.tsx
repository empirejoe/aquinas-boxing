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
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  // Validate phone number against NANP rules
  const validatePhoneNumber = (phoneNumber: string): string | null => {
    // Remove all non-digits
    const digits = phoneNumber.replace(/\D/g, '');

    // If empty, that's okay (optional field)
    if (digits.length === 0) return null;

    // Must be exactly 10 digits for US/Canada
    if (digits.length !== 10) {
      return 'Phone number must be 10 digits';
    }

    const areaCode = digits.slice(0, 3);
    const exchange = digits.slice(3, 6);
    const subscriber = digits.slice(6, 10);

    // Area code rules
    if (areaCode[0] === '0' || areaCode[0] === '1') {
      return 'Invalid area code';
    }

    // Block obviously fake area codes
    if (areaCode === '555' || areaCode === '000' || areaCode === '111' ||
        areaCode === '222' || areaCode === '333' || areaCode === '444' ||
        areaCode === '666' || areaCode === '777' || areaCode === '888' || areaCode === '999') {
      return 'Invalid area code';
    }

    // Exchange (central office) code rules
    if (exchange[0] === '0' || exchange[0] === '1') {
      return 'Invalid phone number';
    }

    // Block 555-01XX (reserved for fiction)
    if (exchange === '555' && subscriber[0] === '0' && subscriber[1] === '1') {
      return 'Invalid phone number';
    }

    // Block common fake patterns
    if (digits === '5555555555' || digits === '1234567890') {
      return 'Please enter a valid phone number';
    }

    // Block all same digits
    if (/^(\d)\1{9}$/.test(digits)) {
      return 'Please enter a valid phone number';
    }

    return null; // Valid
  };

  // Format phone number as user types
  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const phoneNumber = value.replace(/\D/g, '');

    // Format as (XXX) XXX-XXXX
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);

    // Clear error when user starts typing
    if (phoneError) {
      setPhoneError('');
    }
  };

  const handlePhoneBlur = () => {
    // Validate when user leaves the field
    const error = validatePhoneNumber(phone);
    if (error) {
      setPhoneError(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Validate phone number before submitting
    if (phone) {
      const phoneValidationError = validatePhoneNumber(phone);
      if (phoneValidationError) {
        setPhoneError(phoneValidationError);
        setIsSubmitting(false);
        return;
      }
    }

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
            street_address: streetAddress || '',
            city: city || '',
            state: state || '',
            zip_code: zipCode || '',
            mailing_address: (streetAddress || city || state || zipCode)
              ? `${streetAddress}\n${city}, ${state} ${zipCode}`.trim()
              : '',
            preferences: {
              email: true,
              sms: phone ? true : false,
              mail: (streetAddress || city || state || zipCode) ? true : false,
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
          setStreetAddress('');
          setCity('');
          setState('');
          setZipCode('');
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
      <div className="fixed bottom-8 right-8 z-40">
        {!isMinimized ? (
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:via-gold-400 hover:to-gold-500 text-black font-black px-8 py-5 shadow-2xl border-3 border-black transition-all duration-300 hover:scale-110 flex items-center gap-4 animate-pulse-slow"
            style={{
              boxShadow: '0 0 40px rgba(234, 179, 8, 0.6), 0 0 80px rgba(234, 179, 8, 0.3), 0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
            aria-label="Sign up for newsletter"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="hidden sm:block uppercase tracking-wider text-base font-black">Get Updates</span>

            {/* Enhanced pulse animation */}
            <span className="absolute -top-2 -right-2 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-maroon-500 opacity-75"></span>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-maroon-500 opacity-75 animation-delay-150"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-maroon-600 shadow-lg"></span>
            </span>

            {/* Minimize button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMinimized(true);
              }}
              className="absolute -top-3 -left-3 w-8 h-8 bg-black hover:bg-gray-800 border-2 border-gold-500 flex items-center justify-center transition-colors shadow-lg"
              aria-label="Minimize"
            >
              <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </button>
        ) : (
          <button
            onClick={() => setIsMinimized(false)}
            className="w-20 h-20 bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:via-gold-400 hover:to-gold-500 text-black rounded-full shadow-2xl border-3 border-black flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse-slow"
            style={{
              boxShadow: '0 0 40px rgba(234, 179, 8, 0.6), 0 0 80px rgba(234, 179, 8, 0.3), 0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
            aria-label="Show newsletter signup"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
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
                    onChange={handlePhoneChange}
                    onBlur={handlePhoneBlur}
                    className={`w-full px-4 py-3 bg-black border-2 ${phoneError ? 'border-red-500' : 'border-gray-700 focus:border-gold-500'} text-white font-bold placeholder-gray-500 transition-colors outline-none`}
                    placeholder="(555) 123-4567"
                  />
                  {phoneError ? (
                    <p className="text-xs text-red-400 mt-1 font-semibold">{phoneError}</p>
                  ) : (
                    <p className="text-xs text-gray-500 mt-1">For text message updates</p>
                  )}
                </div>

                {/* Mailing Address */}
                <div className="border-t-2 border-maroon-800 pt-4">
                  <p className="text-xs font-black text-gold-400 uppercase tracking-wider mb-3">
                    📬 Mailing Address (Optional)
                  </p>

                  {/* Street Address */}
                  <div className="mb-3">
                    <label htmlFor="modal-street" className="block text-xs font-semibold text-gray-400 mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      id="modal-street"
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                      className="w-full px-4 py-2 bg-black border border-gray-700 focus:border-gold-500 text-white font-bold placeholder-gray-500 transition-colors outline-none"
                      placeholder="123 Main Street"
                    />
                  </div>

                  {/* City */}
                  <div className="mb-3">
                    <label htmlFor="modal-city" className="block text-xs font-semibold text-gray-400 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="modal-city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-2 bg-black border border-gray-700 focus:border-gold-500 text-white font-bold placeholder-gray-500 transition-colors outline-none"
                      placeholder="Rochester"
                    />
                  </div>

                  {/* State and ZIP */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="modal-state" className="block text-xs font-semibold text-gray-400 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        id="modal-state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        maxLength={2}
                        className="w-full px-4 py-2 bg-black border border-gray-700 focus:border-gold-500 text-white font-bold placeholder-gray-500 transition-colors outline-none uppercase"
                        placeholder="NY"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-zip" className="block text-xs font-semibold text-gray-400 mb-1">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        id="modal-zip"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        maxLength={10}
                        className="w-full px-4 py-2 bg-black border border-gray-700 focus:border-gold-500 text-white font-bold placeholder-gray-500 transition-colors outline-none"
                        placeholder="14604"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">For physical mail updates</p>
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
