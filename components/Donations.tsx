/**
 * Donations Component - Stripe-powered donations with fee coverage option
 * Supports one-time and recurring donations with preset/custom amounts
 */

'use client';

import { useState } from 'react';

export default function Donations() {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [amount, setAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [coverFees, setCoverFees] = useState(true);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const presetAmounts = [25, 50, 100, 250, 500];

  // Calculate Stripe fee (2.9% + $0.30)
  const calculateFee = (donationAmount: number): number => {
    return (donationAmount * 0.029) + 0.30;
  };

  const selectedAmount = amount || (customAmount ? parseFloat(customAmount) : 0);
  const stripeFee = calculateFee(selectedAmount);
  const totalCharge = coverFees ? selectedAmount + stripeFee : selectedAmount;
  const programReceives = coverFees ? selectedAmount : selectedAmount - stripeFee;

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedAmount || selectedAmount <= 0) {
      alert('Please select or enter a donation amount');
      return;
    }

    if (selectedAmount < 10) {
      alert('Minimum donation amount is $10. This helps ensure that processing fees do not consume a large portion of your contribution.');
      return;
    }

    setIsProcessing(true);

    try {
      // TODO: Implement Stripe Checkout
      // This will call your API route that creates a Stripe Checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: Math.round(totalCharge * 100), // Convert to cents
          donationType,
          donorName,
          donorEmail,
          coverFees,
        }),
      });

      const { sessionId } = await response.json();

      // Redirect to Stripe Checkout
      // In production, you'll need to import and use Stripe.js here
      console.log('Would redirect to Stripe Checkout with session:', sessionId);
      alert('Stripe integration ready! See console for session details.');

    } catch (error) {
      console.error('Donation error:', error);
      alert('Error processing donation. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section id="donate" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-maroon-50 to-gold-100 rounded-full shadow-sm">
            <span className="text-maroon-600 font-semibold text-sm tracking-wide">Support The Program</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Fuel The <span className="text-maroon-600">Fight</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Your donation helps provide equipment, training, and opportunities for young athletes to become champions
          </p>
          <p className="text-lg text-gray-500">
            100% of your donation goes directly to Aquinas Boxing when you opt to cover processing fees
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-maroon-400 to-maroon-700 mx-auto mt-6 rounded-full" />
        </div>

        {/* Donation Form */}
        <div className="bg-white rounded-2xl border border-gray-200 relative overflow-hidden shadow-lg">
          {/* Top accent */}
          <div className="h-1 bg-gradient-to-r from-maroon-400 via-gold-500 to-maroon-700" />

          <div className="p-8 md:p-12">
            <form onSubmit={handleDonate} className="space-y-8">
              {/* Donation Type Toggle */}
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-4 text-center">
                  Donation Frequency
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setDonationType('one-time')}
                    className={`px-6 py-4 font-semibold rounded-lg transition-all ${
                      donationType === 'one-time'
                        ? 'bg-gradient-to-r from-maroon-500 to-maroon-700 text-white shadow-md'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    One-Time
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType('monthly')}
                    className={`px-6 py-4 font-semibold rounded-lg transition-all ${
                      donationType === 'monthly'
                        ? 'bg-gradient-to-r from-maroon-500 to-maroon-700 text-white shadow-md'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Preset Amounts */}
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-4 text-center">
                  Select Amount
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => {
                        setAmount(preset);
                        setCustomAmount('');
                      }}
                      className={`px-4 py-6 font-bold text-xl rounded-lg transition-all ${
                        amount === preset
                          ? 'bg-gradient-to-r from-maroon-500 to-maroon-700 text-white shadow-md scale-105'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:scale-105 border border-gray-200'
                      }`}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-4 text-center">
                  Or Enter Custom Amount
                </p>
                <div className="relative max-w-md mx-auto">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400">$</span>
                  <input
                    type="number"
                    min="10"
                    step="0.01"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount(null);
                    }}
                    placeholder="0.00"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent text-gray-900 text-2xl font-bold text-center placeholder-gray-400 transition-all outline-none"
                  />
                </div>
                <p className="text-sm text-gray-500 text-center mt-2">Minimum donation: $10</p>
              </div>

              {/* Fee Coverage Option */}
              {selectedAmount > 0 && (
                <div className="bg-gradient-to-br from-maroon-50 to-gold-100/50 border border-gold-200 rounded-lg p-6">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={coverFees}
                      onChange={(e) => setCoverFees(e.target.checked)}
                      className="w-6 h-6 mt-1 rounded border-2 border-gold-500 text-maroon-600 focus:ring-2 focus:ring-maroon-500 cursor-pointer flex-shrink-0"
                    />
                    <div className="flex-1">
                      <p className="text-gray-900 font-semibold text-lg mb-2 group-hover:text-maroon-600 transition-colors">
                        Cover Processing Fees (${stripeFee.toFixed(2)})
                      </p>
                      <p className="text-gray-600 text-sm">
                        {coverFees
                          ? `You'll be charged $${totalCharge.toFixed(2)} and Aquinas Boxing receives the full $${selectedAmount.toFixed(2)}`
                          : `You'll be charged $${selectedAmount.toFixed(2)} and Aquinas Boxing receives $${programReceives.toFixed(2)} after fees`
                        }
                      </p>
                    </div>
                  </label>
                </div>
              )}

              {/* Donor Information */}
              <div className="border-t border-gray-200 pt-8 space-y-4">
                <div>
                  <label htmlFor="donor-name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="donor-name"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="donor-email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="donor-email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                  <p className="text-xs text-gray-500 mt-2">For donation receipt and updates</p>
                </div>
              </div>

              {/* Donation Summary */}
              {selectedAmount > 0 && (
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-gray-900 font-semibold">
                      <span>{donationType === 'monthly' ? 'Monthly ' : ''}Donation:</span>
                      <span className="text-2xl">${selectedAmount.toFixed(2)}</span>
                    </div>
                    {coverFees && (
                      <div className="flex justify-between items-center text-gray-600 text-sm">
                        <span>Processing Fee:</span>
                        <span>+${stripeFee.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="h-px bg-gray-300" />
                    <div className="flex justify-between items-center text-maroon-600 font-bold text-xl">
                      <span>Total{donationType === 'monthly' ? '/month' : ''}:</span>
                      <span>${totalCharge.toFixed(2)}</span>
                    </div>
                    <div className="text-center text-green-600 font-medium text-sm pt-2">
                      ✓ Aquinas Boxing receives ${programReceives.toFixed(2)}
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing || !selectedAmount || selectedAmount <= 0}
                className="w-full px-8 py-5 bg-gradient-to-r from-maroon-500 to-maroon-700 hover:from-maroon-600 hover:to-gold-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-semibold text-xl rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {isProcessing
                  ? 'Processing...'
                  : donationType === 'monthly'
                    ? `Donate $${totalCharge.toFixed(2)}/Month`
                    : `Donate $${totalCharge.toFixed(2)}`
                }
              </button>

              {/* Secure Payment Badge */}
              <div className="flex items-center justify-center gap-3 text-gray-500 text-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Secure payment powered by Stripe</span>
              </div>
            </form>
          </div>

          {/* Bottom accent */}
          <div className="h-1 bg-gradient-to-r from-maroon-400 via-gold-500 to-maroon-700" />
        </div>

        {/* Impact Statement */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 font-semibold text-lg mb-6">Your donation helps provide:</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="text-4xl mb-3">🥊</div>
              <p className="text-gray-900 font-semibold text-sm">Training Equipment</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="text-4xl mb-3">👔</div>
              <p className="text-gray-900 font-semibold text-sm">Competition Gear</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="text-4xl mb-3">🎓</div>
              <p className="text-gray-900 font-semibold text-sm">Athlete Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
