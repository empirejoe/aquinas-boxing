/**
 * Home Page - Aquinas Boxing Program
 * Modern, engaging single-page application with enhanced features
 */

import Hero from '@/components/Hero';
import About from '@/components/About';
import SchoolPride from '@/components/SchoolPride';
import Legacy from '@/components/Legacy';
import Streaming from '@/components/Streaming';
import Events from '@/components/Events';
import SocialFeed from '@/components/SocialFeed';
import SwagStore from '@/components/SwagStore';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Legacy />
      <SchoolPride />
      <Streaming />
      <Events />
      <SocialFeed />
      <SwagStore />
      <Footer />
    </main>
  );
}
