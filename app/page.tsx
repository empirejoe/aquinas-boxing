/**
 * Home Page - Aquinas Boxing Program
 * Integrates all components into a single-page application
 */

import Hero from '@/components/Hero';
import Streaming from '@/components/Streaming';
import About from '@/components/About';
import Events from '@/components/Events';
import SwagStore from '@/components/SwagStore';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Streaming />
      <Events />
      <SwagStore />
      <Footer />
    </main>
  );
}
