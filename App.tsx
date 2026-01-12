import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Comparison } from './components/Comparison';
import { Process } from './components/Process';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <div id="comparison"><Comparison /></div>
        <Process />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
export default App;
