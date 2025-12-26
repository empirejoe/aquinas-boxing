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
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10 group"
              aria-label="Close"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8 md:p-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Stay in the Loop
                </h2>
                <p className="text-gray-600">
                  Get fight schedules, training updates, and exclusive news
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="modal-name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all outline-none"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="modal-email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="modal-phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="modal-phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    onBlur={handlePhoneBlur}
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all outline-none ${phoneError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}`}
                    placeholder="(555) 123-4567"
                  />
                  {phoneError ? (
                    <p className="text-xs text-red-500 mt-1.5">{phoneError}</p>
                  ) : (
                    <p className="text-xs text-gray-500 mt-1.5">For text message updates</p>
                  )}
                </div>

                {/* Mailing Address */}
                <div className="border-t border-gray-200 pt-5 mt-6">
                  <p className="text-sm font-semibold text-gray-700 mb-4">
                    Mailing Address <span className="text-gray-400 font-normal">(optional)</span>
                  </p>

                  {/* Street Address */}
                  <div className="mb-3">
                    <input
                      type="text"
                      id="modal-street"
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all outline-none"
                      placeholder="Street Address"
                    />
                  </div>

                  {/* City */}
                  <div className="mb-3">
                    <input
                      type="text"
                      id="modal-city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all outline-none"
                      placeholder="City"
                    />
                  </div>

                  {/* State and ZIP */}
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      id="modal-state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      maxLength={2}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all outline-none uppercase"
                      placeholder="State"
                    />
                    <input
                      type="text"
                      id="modal-zip"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      maxLength={10}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all outline-none"
                      placeholder="ZIP Code"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">For physical mail updates</p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-6 px-6 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? 'Signing Up...' : 'Subscribe'}
                </button>

                {/* Submit Message */}
                {submitMessage && (
                  <div className={`p-4 rounded-lg ${submitMessage.startsWith('Success') ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                    <p className={`text-sm text-center font-medium ${submitMessage.startsWith('Success') ? 'text-green-700' : 'text-red-700'}`}>
                      {submitMessage}
                    </p>
                  </div>
                )}

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center mt-4">
                  Unsubscribe anytime. No spam, just boxing updates.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
