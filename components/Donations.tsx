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
    <section id="donate" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-maroon-950 via-black to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-concrete opacity-20" />

      {/* Spotlight effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 bg-gold-500 border-2 border-black">
            <span className="text-black font-black text-sm uppercase tracking-widest">Support The Program</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 uppercase tracking-tight">
            Fuel The <span className="text-gold-500">Fight</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-bold mb-4">
            Your donation helps provide equipment, training, and opportunities for young athletes to become champions
          </p>
          <p className="text-lg text-gray-400">
            100% of your donation goes directly to Aquinas Boxing when you opt to cover processing fees
          </p>
          <div className="w-32 h-2 bg-gold-500 mx-auto mt-6 shadow-lg" style={{boxShadow: '0 0 20px rgba(234, 179, 8, 0.5)'}} />
        </div>

        {/* Donation Form */}
        <div className="bg-gradient-to-br from-gray-900 to-black border-4 border-gold-500 relative overflow-hidden shadow-2xl">
          {/* Top tape effect */}
          <div className="h-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />

          <div className="p-8 md:p-12">
            <form onSubmit={handleDonate} className="space-y-8">
              {/* Donation Type Toggle */}
              <div>
                <p className="text-sm font-black text-gold-400 uppercase tracking-wider mb-4 text-center">
                  Donation Frequency
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setDonationType('one-time')}
                    className={`px-6 py-4 font-black uppercase tracking-wide border-2 transition-all ${
                      donationType === 'one-time'
                        ? 'bg-gold-500 text-black border-black'
                        : 'bg-black text-white border-gray-700 hover:border-gold-500'
                    }`}
                  >
                    One-Time
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType('monthly')}
                    className={`px-6 py-4 font-black uppercase tracking-wide border-2 transition-all ${
                      donationType === 'monthly'
                        ? 'bg-gold-500 text-black border-black'
                        : 'bg-black text-white border-gray-700 hover:border-gold-500'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Preset Amounts */}
              <div>
                <p className="text-sm font-black text-gold-400 uppercase tracking-wider mb-4 text-center">
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
                      className={`px-4 py-6 font-black text-xl border-2 transition-all ${
                        amount === preset
                          ? 'bg-gold-500 text-black border-black scale-105'
                          : 'bg-black text-white border-gray-700 hover:border-gold-500 hover:scale-105'
                      }`}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div>
                <p className="text-sm font-black text-gold-400 uppercase tracking-wider mb-4 text-center">
                  Or Enter Custom Amount
                </p>
                <div className="relative max-w-md mx-auto">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-black text-gray-500">$</span>
                  <input
                    type="number"
                    min="1"
                    step="0.01"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount(null);
                    }}
                    placeholder="0.00"
                    className="w-full pl-12 pr-4 py-4 bg-black border-2 border-gray-700 focus:border-gold-500 text-white text-2xl font-black text-center placeholder-gray-600 transition-colors outline-none"
                  />
                </div>
              </div>

              {/* Fee Coverage Option */}
              {selectedAmount > 0 && (
                <div className="bg-maroon-950/30 border-2 border-maroon-800 p-6">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={coverFees}
                      onChange={(e) => setCoverFees(e.target.checked)}
                      className="w-6 h-6 mt-1 bg-black border-2 border-gold-500 checked:bg-gold-500 cursor-pointer flex-shrink-0"
                    />
                    <div className="flex-1">
                      <p className="text-white font-black text-lg mb-2 group-hover:text-gold-400 transition-colors">
                        Cover Processing Fees (${stripeFee.toFixed(2)})
                      </p>
                      <p className="text-gray-400 text-sm font-semibold">
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
              <div className="border-t-2 border-maroon-800 pt-8 space-y-4">
                <div>
                  <label htmlFor="donor-name" className="block text-sm font-black text-gold-400 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="donor-name"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-gold-500 text-white font-bold placeholder-gray-500 transition-colors outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="donor-email" className="block text-sm font-black text-gold-400 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="donor-email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-gold-500 text-white font-bold placeholder-gray-500 transition-colors outline-none"
                    placeholder="john@example.com"
                  />
                  <p className="text-xs text-gray-500 mt-2">For donation receipt and updates</p>
                </div>
              </div>

              {/* Donation Summary */}
              {selectedAmount > 0 && (
                <div className="bg-black border-2 border-gold-500 p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-white font-bold">
                      <span>{donationType === 'monthly' ? 'Monthly ' : ''}Donation:</span>
                      <span className="text-2xl">${selectedAmount.toFixed(2)}</span>
                    </div>
                    {coverFees && (
                      <div className="flex justify-between items-center text-gray-400 text-sm font-bold">
                        <span>Processing Fee:</span>
                        <span>+${stripeFee.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="h-px bg-gold-500" />
                    <div className="flex justify-between items-center text-gold-400 font-black text-xl">
                      <span>Total{donationType === 'monthly' ? '/month' : ''}:</span>
                      <span>${totalCharge.toFixed(2)}</span>
                    </div>
                    <div className="text-center text-green-400 font-bold text-sm pt-2">
                      ✓ Aquinas Boxing receives ${programReceives.toFixed(2)}
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing || !selectedAmount || selectedAmount <= 0}
                className="group relative w-full px-8 py-6 bg-gold-500 hover:bg-gold-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-black text-2xl uppercase tracking-wider transition-all duration-300 shadow-2xl border-2 border-black overflow-hidden"
              >
                <span className="relative z-10">
                  {isProcessing
                    ? 'Processing...'
                    : donationType === 'monthly'
                      ? `Donate $${totalCharge.toFixed(2)}/Month`
                      : `Donate $${totalCharge.toFixed(2)}`
                  }
                </span>
                <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>

              {/* Secure Payment Badge */}
              <div className="flex items-center justify-center gap-3 text-gray-400 text-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="font-bold">Secure payment powered by Stripe</span>
              </div>
            </form>
          </div>

          {/* Bottom tape effect */}
          <div className="h-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />
        </div>

        {/* Impact Statement */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 font-bold text-lg mb-6">Your donation helps provide:</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-black/50 border border-gold-500/30 p-6">
              <div className="text-4xl mb-3">🥊</div>
              <p className="text-white font-black uppercase text-sm">Training Equipment</p>
            </div>
            <div className="bg-black/50 border border-gold-500/30 p-6">
              <div className="text-4xl mb-3">👔</div>
              <p className="text-white font-black uppercase text-sm">Competition Gear</p>
            </div>
            <div className="bg-black/50 border border-gold-500/30 p-6">
              <div className="text-4xl mb-3">🎓</div>
              <p className="text-white font-black uppercase text-sm">Athlete Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
