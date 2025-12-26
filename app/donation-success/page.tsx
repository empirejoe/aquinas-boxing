/**
 * Donation Success Page
 * Displayed after successful donation through Stripe
 */

'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function DonationSuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-maroon-950 to-black flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-gradient-to-br from-gray-900 to-black border-4 border-gold-500 relative overflow-hidden">
        {/* Top tape effect */}
        <div className="h-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />

        <div className="p-12 text-center">
          {/* Success Icon */}
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-gold-500/30 rounded-full blur-2xl" />
            <div className="relative w-24 h-24 mx-auto bg-gold-500 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Thank You For Your <span className="text-gold-500">Support!</span>
          </h1>

          <div className="w-24 h-2 bg-gold-500 mx-auto mb-8" />

          <p className="text-xl text-gray-300 font-bold mb-6 leading-relaxed">
            Your generous donation helps Aquinas Boxing continue building champions both in the ring and in life.
          </p>

          <p className="text-lg text-gray-400 mb-8">
            You'll receive a confirmation email with your donation receipt shortly.
          </p>

          {sessionId && (
            <p className="text-sm text-gray-500 mb-8 font-mono">
              Transaction ID: {sessionId}
            </p>
          )}

          {/* Impact Statement */}
          <div className="bg-black border-2 border-gold-500/30 p-6 mb-8">
            <p className="text-gold-400 font-black uppercase text-sm mb-3">Your Impact</p>
            <p className="text-gray-300 font-semibold">
              Your donation directly funds training equipment, competition gear, and athlete development programs
              that help young fighters achieve their dreams.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-black uppercase tracking-wide transition-all duration-300 border-2 border-black"
            >
              Return Home
            </a>
            <a
              href="/#social"
              className="px-8 py-4 bg-black hover:bg-gray-900 text-white font-black uppercase tracking-wide transition-all duration-300 border-2 border-gold-500"
            >
              Follow Our Journey
            </a>
          </div>

          {/* Social Share */}
          <div className="mt-12 pt-8 border-t-2 border-maroon-800">
            <p className="text-gray-400 font-bold mb-4">Help spread the word:</p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://www.facebook.com/AquinasMissionBouts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/aqboxing/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-tr from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex items-center justify-center transition-all"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom tape effect */}
        <div className="h-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />
      </div>
    </div>
  );
}

export default function DonationSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white font-bold">Loading...</div>
      </div>
    }>
      <DonationSuccessContent />
    </Suspense>
  );
}
