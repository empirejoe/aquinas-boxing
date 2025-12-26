/**
 * Newsletter Component - Beehiiv newsletter signup
 * Collects email, phone, and mailing address for updates
 */

'use client';

import { useState, useEffect } from 'react';
import { US_STATES } from '@/lib/us-states';
import Confetti from 'react-confetti';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [zipError, setZipError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Update window size for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // Set initial size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Stop confetti after 5 seconds
  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const resetForm = () => {
    setShowSuccess(false);
    setEmail('');
    setPhone('');
    setFirstName('');
    setLastName('');
    setStreetAddress('');
    setCity('');
    setState('');
    setZipCode('');
    setPhoneError('');
    setZipError('');
    setSubmitMessage('');
  };

  // Phone validation function
  const validatePhoneNumber = (phoneNumber: string): string | null => {
    const digits = phoneNumber.replace(/\D/g, '');

    if (digits.length === 0) {
      return null; // Empty is valid (optional field)
    }

    if (digits.length !== 10) {
      return 'Phone number must be 10 digits';
    }

    // NANP validation rules
    const areaCode = digits.slice(0, 3);
    const exchangeCode = digits.slice(3, 6);

    // Area code cannot start with 0 or 1
    if (areaCode[0] === '0' || areaCode[0] === '1') {
      return 'Area code cannot start with 0 or 1';
    }

    // Exchange code cannot start with 0 or 1
    if (exchangeCode[0] === '0' || exchangeCode[0] === '1') {
      return 'Exchange code cannot start with 0 or 1';
    }

    return null;
  };

  // ZIP code validation function
  const validateZipCode = (zip: string): string | null => {
    if (!zip || zip.trim().length === 0) {
      return null; // Empty is valid (optional field)
    }

    // Basic ZIP code validation (5 digits or 5+4 format)
    const zipPattern = /^\d{5}(-\d{4})?$/;
    if (!zipPattern.test(zip)) {
      return 'Invalid ZIP code format (use 12345 or 12345-6789)';
    }

    return null;
  };

  // Phone formatting function
  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '');

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
    setPhoneError('');
  };

  const handlePhoneBlur = () => {
    const error = validatePhoneNumber(phone);
    setPhoneError(error || '');
  };

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only digits and hyphen
    const cleaned = value.replace(/[^\d-]/g, '');
    setZipCode(cleaned);
    setZipError('');
  };

  const handleZipBlur = () => {
    const error = validateZipCode(zipCode);
    setZipError(error || '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone if provided
    if (phone.trim()) {
      const phoneValidationError = validatePhoneNumber(phone);
      if (phoneValidationError) {
        setPhoneError(phoneValidationError);
        return;
      }
    }

    // Validate ZIP if provided
    if (zipCode.trim()) {
      const zipValidationError = validateZipCode(zipCode);
      if (zipValidationError) {
        setZipError(zipValidationError);
        return;
      }
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          phone,
          streetAddress,
          city,
          state,
          zipCode,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccess(true);
        setShowConfetti(true);
        setSubmitMessage('');
      } else {
        setSubmitMessage(`Error: ${data.error || 'Something went wrong. Please try again.'}`);
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
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.3}
        />
      )}
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

        {/* Success Confirmation or Form */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg relative">
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-t-2xl" />

          {showSuccess ? (
            /* Success Confirmation */
            <div className="text-center py-8">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                  You're In! 🥊
                </h3>
                <p className="text-xl text-gray-600 mb-2">
                  Welcome to the Aquinas Boxing family
                </p>
                <p className="text-gray-500">
                  Check your email for a welcome message and upcoming fight schedules
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <button
                  onClick={resetForm}
                  className="text-gold-600 hover:text-gold-700 font-semibold text-sm hover:underline transition-all"
                >
                  ← Make another submission
                </button>
              </div>
            </div>
          ) : (
            /* Newsletter Form */
            <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name and Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all outline-none"
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all outline-none"
                  placeholder="Last name"
                />
              </div>
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

            {/* Optional Fields Divider */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">
                Optional Contact Information
              </p>
              <p className="text-xs text-gray-500 mb-4">
                Provide your phone or mailing address to receive text or physical mail updates
              </p>

              {/* Phone Number */}
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  onBlur={handlePhoneBlur}
                  className={`w-full px-4 py-3 bg-gray-50 border ${phoneError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all outline-none`}
                  placeholder="(555) 123-4567"
                />
                {phoneError && (
                  <p className="mt-1 text-sm text-red-600">{phoneError}</p>
                )}
              </div>

              {/* Mailing Address */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">
                  Mailing Address (Optional)
                </label>

                <input
                  type="text"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all outline-none"
                  placeholder="Street Address"
                />

                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all outline-none"
                  placeholder="City"
                />

                <div className="grid grid-cols-2 gap-3">
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-gray-900 transition-all outline-none"
                  >
                    <option value="">Select State</option>
                    {US_STATES.map((s) => (
                      <option key={s.code} value={s.code}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                  <div>
                    <input
                      type="text"
                      value={zipCode}
                      onChange={handleZipChange}
                      onBlur={handleZipBlur}
                      maxLength={10}
                      className={`w-full px-4 py-3 bg-gray-50 border ${zipError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all outline-none`}
                      placeholder="ZIP Code"
                    />
                    {zipError && (
                      <p className="mt-1 text-xs text-red-600">{zipError}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !!phoneError || !!zipError}
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
          )}
        </div>
      </div>
    </section>
  );
}
